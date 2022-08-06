import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Country } from 'src/interfaces/country.interface';


@Injectable()
export class CountryService {
    
  constructor(private http: HttpClient) { }


  getCountries(input: string): Observable<Country[]>{

    return this.http.get<Country[]>('http://universities.hipolabs.com/search?'+input);
    
  }
}





