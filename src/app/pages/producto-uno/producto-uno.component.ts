import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // Asegúrate de que estos importes sean correctos



export interface CanDeactivateComponent {
  form: any; // Asegúrate de usar el tipo correcto aquí, como FormGroup
}
@Component({
  selector: 'app-producto-uno',
  standalone: true,
  imports: [],
  templateUrl: './producto-uno.component.html',
  styleUrl: './producto-uno.component.css'
})
export class ProductoUnoComponent implements CanDeactivateComponent {
  form: FormGroup;



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Define tus campos de formulario aquí
      fullname: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }
  


}
