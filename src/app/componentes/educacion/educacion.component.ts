import { Component } from '@angular/core';
import { Educacion } from 'app/model/educacion';
import { EducacionService } from 'app/servicio/educacion.service';
import { TokenService } from 'app/servicio/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacion: Educacion[] = [];

  constructor(private educacionS: EducacionService, private tokenService: TokenService) {}
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  cargarEducacion(): void {
    this.educacionS.lista().subscribe(
      data => {
        this.educacion = data;
      }
      )
  }

  delete(id?: number){
    if (id !== undefined){
      this.educacionS.delete(id).subscribe({
        next: data => {
          this.cargarEducacion();
        },error: err => {
          alert("Error al eliminar");
        }
    });
    }
  }
}
