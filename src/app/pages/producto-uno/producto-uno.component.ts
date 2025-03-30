import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-uno',
  templateUrl: './producto-uno.component.html',
  styleUrls: ['./producto-uno.component.css']
})
export class ProductoUnoComponent {
  form: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.form.patchValue({ image: this.selectedFile });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario Enviado:', this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
