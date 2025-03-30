import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from '../../types/products';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-form',
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule],
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent {
  cartForm!: FormGroup;
  products: Products[] = []; 
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartForm = this.fb.group({
      productId: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]] 
    });

    
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: () => {
        console.error('Error al cargar los productos.');
      }
    });
  }

  onSubmit(): void {
    if (this.cartForm.invalid) {
      return;
    }

    const formValue = this.cartForm.value;

    this.cartService.addToCart(formValue.productId, formValue.quantity);

    this.successMessage = 'Curso añadido al carrito con éxito.';

    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 2000);
  }
}