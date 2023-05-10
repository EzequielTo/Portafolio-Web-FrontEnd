import { Component, OnInit } from '@angular/core';
import { persona } from 'app/model/persona.model';
import { PersonaService } from 'app/servicio/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService){};
  ngOnInit(): void {
    this.personaService.getpersona().subscribe(data => {this.persona = data});
  }
}
