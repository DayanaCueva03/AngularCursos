import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';  // Asegúrate de que tienes el servicio de autenticación importado
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser$: Observable<User | null>;  // Variable para almacenar el estado del usuario

  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.getCurrentUser();  // Obtenemos el estado del usuario
  }

  ngOnInit(): void {}

  logout() {
    this.authService.logout();  // Llamamos al método para cerrar sesión
  }
}
