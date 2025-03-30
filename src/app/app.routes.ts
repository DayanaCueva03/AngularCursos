import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ProductoUnoComponent } from './pages/producto-uno/producto-uno.component';
import { DetalleproductoComponent } from './pages/detalleproducto/detalleproducto.component';
import { CartFormComponent } from './pages/cart-form/cart-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { NgModule } from '@angular/core';
import { permissionsGuard } from './guards/permissions.guard';


export const routes: Routes = [
    
    {path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {
        path:'producto-uno', component: ProductoUnoComponent,
        ...canActivate(() => redirectUnauthorizedTo(["/login"]))
    },
    {path:'cart-form', component: CartFormComponent},
    {path: 'edit-product/:id', component: ProductFormComponent },
    {
        path:'products', component: ProductsComponent,
        ...canActivate(() => redirectUnauthorizedTo(["/login"]))
    },
    {path:'products/:id', component: DetalleproductoComponent},
    {path:'registro', component: RegistroComponent},
    {path:'recursos', component: RecursosComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }