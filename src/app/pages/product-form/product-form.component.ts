import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from '../../types/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  productId: number | null = null;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      image: ['']
    });

    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.isEditMode = true;
        this.loadProductDetails(this.productId);
      }
    });
  }

  loadProductDetails(id: number): void {
    this.productService.getProductById(id).subscribe({
      next: (product: Products | undefined) => {
        if (product) {
          this.productForm.patchValue(product);
        } else {
          this.errorMessage = 'Producto no encontrado.';
        }
      },
      error: () => {
        this.errorMessage = 'Error al cargar los detalles del producto.';
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    const productData: Products = this.productForm.value; 

    if (this.isEditMode) {
      productData.id = this.productId!;
      this.productService.updateProduct(productData).subscribe({
        next: () => {
          this.successMessage = 'Información registrada con éxito.';
          setTimeout(() => this.router.navigate(['/products']), 2000);
        },
        error: () => {
          this.errorMessage = 'Error al actualizar el producto.';
        }
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: () => {
          this.successMessage = 'Producto creado con éxito.';
          setTimeout(() => this.router.navigate(['/products']), 2000);
        },
        error: () => {
          this.errorMessage = 'Error al crear el producto.';
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}