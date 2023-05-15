import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from 'app/model/skill';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  
  providedIn: 'root'
})
export class SkillService {
  expURL = environment.URL + '/skill'

  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.expURL+'/lista');
  }

  public details(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.expURL+`/detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.expURL+'/create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.expURL+`/update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.expURL+`/delete/${id}`);
  }
}
