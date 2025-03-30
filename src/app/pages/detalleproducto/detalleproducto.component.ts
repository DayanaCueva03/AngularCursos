import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';  
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent implements OnInit{
  
  product:any;
  constructor(private route:ActivatedRoute, private productService:ProductService, private router: Router){ }

  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }

  addToCart() {
    this.router.navigate(['/cart-form']); // Redirige al formulario del carrito
  }
 
}
