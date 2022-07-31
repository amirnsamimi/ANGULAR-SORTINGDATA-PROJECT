import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Monster } from 'src/interfaces/monster.interface';


@Injectable()
export class MonsterService {
    
  private _url: string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }
  
  getMonsters(): Observable<Monster[]>{
    return this.http.get<Monster[]>(this._url);
  }
}



