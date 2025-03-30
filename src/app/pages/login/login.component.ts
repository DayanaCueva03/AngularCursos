import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  providers: [({ provide: AuthService, useClass: AuthService })],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = "";
  showRegister: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [this.confirmPasswordValidator()]]
    });
  }

  login() {
    if (this.email?.invalid || this.password?.invalid) return;
    if (this.showRegister) {
      if (this.confirmPassword?.invalid) return;
      this.authService.registerWithEmail(this.email?.value, this.password?.value)
        .then(() => {
          this.errorMessage = "";
          this.router.navigate(['/products']);  
          this.loginForm.reset();  
        })
        .catch(err => {
          console.log(err);
          this.errorMessage = err.message;
        });
      return;
    }
    
    this.authService.loginWithEmail(this.email?.value, this.password?.value)
      .then(() => {
        this.errorMessage = "";
        this.router.navigate(['/products']);  
      })
      .catch(err => {
        console.log(err);
        this.errorMessage = err.message;
      });
  }

registerWithGoogle() {
  this.authService.loginWithGoogle()
    .then(() => {
      this.errorMessage = "";
      this.router.navigate(['/products/1']);  
    })
    .catch(err => {
      console.log(err);
      this.errorMessage = err.message;
    });
}

  toggleRegister(){
    this.showRegister = !this.showRegister;
  }

  get email() { return this.loginForm.get("email") };
  get password() { return this.loginForm.get("password") };
  get confirmPassword() { return this.loginForm.get("confirmPassword") };

  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!this.showRegister) return null;
      const error = this.password?.value !== control.value;
      return error ? {confirmPassword: {value: control.value}} : null;
    };
  }  
}
