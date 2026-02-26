import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Importa tu componente de usuarios
import { UsuariosComponent } from './features/usuarios/usuarios.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Agrégalo al arreglo de imports
  imports: [RouterOutlet, UsuariosComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-usuarios';
}