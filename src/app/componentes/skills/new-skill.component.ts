import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Skill } from 'app/model/skill';
import { SkillService } from 'app/servicio/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})

export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skills: SkillService, private router: Router) { };
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skills.save(skill).subscribe({
      next: data => {
        alert("Skill Creada Con Exito");
        this.router.navigate(['']);
      }, error: err => {
        alert("Fallo Al Crear La Skill");
        this.router.navigate(['']);
      }
    });
  }

}
