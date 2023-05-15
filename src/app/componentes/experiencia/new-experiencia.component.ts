import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'app/model/experiencia';
import { SExperienciaService } from 'app/servicio/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(data => {
      alert("Experiencia created");
      this.router.navigate(['']);
    }, error => {
      alert("Error");
      this.router.navigate(['']);
    }
    )
  }
}
