import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; 


export interface CanDeactivateComponent {
  form: any; 
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
      fullname: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }
  


}
