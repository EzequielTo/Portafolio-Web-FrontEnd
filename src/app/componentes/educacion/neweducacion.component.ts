import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'app/model/educacion';
import { EducacionService } from 'app/servicio/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreE: string;
  descripcionE: string;

  constructor(private educacuonService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacuonService.save(educacion).subscribe({
      next: data => {
        alert("Educacion Añadida");
        this.router.navigate(['']);
      }, error: err => {
        alert("fallo");
        this.router.navigate(['']);
      }
    });
  }

}
