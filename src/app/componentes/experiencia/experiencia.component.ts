import { Component } from '@angular/core';
import { Experiencia } from 'app/model/experiencia';
import { SExperienciaService } from 'app/servicio/s-experiencia.service';
import { TokenService } from 'app/servicio/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencia: Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit() {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => { this.experiencia = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe({
        next: data => {
          this.cargarExperiencia();
        }, error: err => {
          alert("Error al borrar la experiencia");
        }
      });
    }
  }

}
