import { Component, Input, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/config/config.service';
import { Country } from 'src/interfaces/monster.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})




export class MonstersComponent implements OnInit {

public COUNTRIES: Country[] = [];

countryKeyword : string = " ";


  constructor(private _CountryService: CountryService) { 

  }

  changeFunc(e: any){

      this.countryKeyword = e.target.value;
    console.log(this.countryKeyword)

  }

 
  getCountries(){ 
     let ValueCheck = false;
      ValueCheck = document.querySelectorAll(".country-default")[0].textContent ? true : false;
    console.log(ValueCheck)
    if( ValueCheck ){
    console.log("amir")
    }
    return this._CountryService.getCountries(this.countryKeyword).subscribe( data => this.COUNTRIES = data )

  }


  ngOnInit(): void {
  
  

    this._CountryService.getCountries(this.countryKeyword)
    .subscribe( data => this.COUNTRIES = data);
   

  }



  
  phrase$ = new BehaviorSubject<string>('');

  /** Observable for filtering out data to show in table */
  items$ = this.phrase$.pipe(
    
    map((phrase = " ") => phrase.length > 0 
      ? this.COUNTRIES
        .filter(({ name }) => name.toLocaleLowerCase().indexOf(phrase) >= 0).slice(0)
      : this.COUNTRIES

    )
   
  )

  /** pushing new phrase values */
  onChange(event:any) {
    this.phrase$.next(event.target.value);
  
    document.querySelectorAll(".country-default")[0].setAttribute("style","display:none");


  }

 
 
}

