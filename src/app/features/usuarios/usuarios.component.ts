import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from '../../core/usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  error = '';

  constructor(private srv: UsuariosService) {}

  ngOnInit(): void {
    // Al abrir la página, carga los datos correctamente por defecto
    this.cargarDatos(false);
  }

  cargarDatos(forzarError: boolean): void {
    // Limpiamos los mensajes y la tabla antes de cada petición
    this.error = '';
    this.usuarios = [];

    this.srv.listar(forzarError).subscribe({
      next: (u) => this.usuarios = u,
      error: (e) => this.error = 'No se pudo cargar usuarios'
    });
  }
}