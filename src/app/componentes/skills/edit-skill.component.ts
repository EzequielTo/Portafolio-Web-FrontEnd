import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'app/model/skill';
import { SkillService } from 'app/servicio/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private activatedRouter: ActivatedRoute, private skillService: SkillService, private router: Router) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.details(id).subscribe(
      data => {
        this.skill = data;
      }, error =>{
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe({
      next: data => {
        this.router.navigate(['']);
      },error: err =>{
        alert('Error al modificar la skill');
        this.router.navigate(['']);
      }
    }
    );
  }
}

