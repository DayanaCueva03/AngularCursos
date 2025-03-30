import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  product: any; 
  error: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (isNaN(id)) {
      this.error = 'ID de producto inválido.';
      return;
    }

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
        } else {
          this.error = 'Producto no encontrado.';
        }
      },
      error: () => {
        this.error = 'Error al cargar los detalles del producto.';
      }
    });
  }

  addToCart() {
    this.router.navigate(['/cart-form']);
  }

  deleteProduct(): void {
    if (!this.product) {
      this.error = 'No se puede eliminar un producto no cargado.';
      return;
    }

    this.productService.deleteProduct(this.product.id).subscribe({
      next: () => {
      
        this.router.navigate(['/products']);
      },
      error: () => {
        this.error = 'Error al eliminar el producto.';
      }
    });
  }

  editProduct(): void {
    if (!this.product) {
      this.error = 'No se puede editar un producto no cargado.';
      return;
    }

    this.router.navigate(['/edit-product', this.product.id]);
  }
}