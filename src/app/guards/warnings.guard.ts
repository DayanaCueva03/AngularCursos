import { CanDeactivateFn } from '@angular/router';
import { ProductsComponent } from '../pages/products/products.component';
import { ProductoUnoComponent } from '../pages/producto-uno/producto-uno.component';

export const warningsGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {



  const currentComponent = component as ProductoUnoComponent;
  if (currentComponent.form.invalid && currentComponent.form.dirty) {

    return window.confirm('¿Deseas abandonar la pagina? Los cambios no guardados se perderan');  
    
  }


  return true;
};
