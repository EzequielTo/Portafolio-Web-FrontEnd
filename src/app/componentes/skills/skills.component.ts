import { Component, OnInit } from '@angular/core';
import { Skill } from 'app/model/skill';
import { SkillService } from 'app/servicio/skill.service';
import { TokenService } from 'app/servicio/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill: Skill[]=[];

  constructor(private skillService: SkillService, private tokenService: TokenService){  }
  isLogged = false;

  
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.lista().subscribe(data => {
      this.skill = data;
    })
  }

  delete(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe({
        next: data => {
          this.cargarSkills();
        },error: err => {
          alert("No Se Pudo Cargar La Skill");
      }
    }      
    );
    }
  }
}
