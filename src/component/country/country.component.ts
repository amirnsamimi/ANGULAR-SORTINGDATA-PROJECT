import { Component, Input, OnInit, Output } from "@angular/core";
import { CountryService } from "src/app/config/config.service";
import { Country } from "src/interfaces/country.interface";
import { BehaviorSubject } from "rxjs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {MatCardModule} from '@angular/material/card';
import * as e from "express";

@Component({
  selector: "app-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"],
})

export class CountryComponent implements OnInit {
    public COUNTRIES: Country[] = [];

    countryKeyword: string = ' ';
    countryData: string = ' ';
    countryItem: Country[] = [];
    countries: any = []
    p: any;
    constructor(private _CountryService: CountryService) { }
  
    changeFunc(e: any) {
      this.countryKeyword = 'country=' + e.target.value;
    
    }
  
  
   
  
    keyword = 'name';
    data = [
      {
          "id": 0,
          "name": "United States"
      },
      {
          "id": 1,
          "name": "India"
      },
      {
          "id": 2,
          "name": "Canada"
      },
      {
          "id": 3,
          "name": "United Kingdom"
      },
      {
          "id": 4,
          "name": "Afghanistan"
      },
      {
          "id": 5,
          "name": "Albania"
      },
      {
          "id": 6,
          "name": "Algeria"
      },
      {
          "id": 7,
          "name": "Andorra"
      },
      {
          "id": 8,
          "name": "Angola"
      },
      {
          "id": 9,
          "name": "Antigua and Barbuda"
      },
      {
          "id": 10,
          "name": "Argentina"
      },
      {
          "id": 11,
          "name": "Armenia"
      },
      {
          "id": 12,
          "name": "Australia"
      },
      {
          "id": 13,
          "name": "Austria"
      },
      {
          "id": 14,
          "name": "Azerbaijan"
      },
      {
          "id": 15,
          "name": "Bahamas"
      },
      {
          "id": 16,
          "name": "Bahrain"
      },
      {
          "id": 17,
          "name": "Bangladesh"
      },
      {
          "id": 18,
          "name": "Barbados"
      },
      {
          "id": 19,
          "name": "Belarus"
      },
      {
          "id": 20,
          "name": "Belgium"
      },
      {
          "id": 21,
          "name": "Belize"
      },
      {
          "id": 22,
          "name": "Benin"
      },
      {
          "id": 23,
          "name": "Bermuda"
      },
      {
          "id": 24,
          "name": "Bhutan"
      },
      {
          "id": 25,
          "name": "Bolivia, Plurinational State of"
      },
      {
          "id": 26,
          "name": "Bosnia and Herzegovina"
      },
      {
          "id": 27,
          "name": "Botswana"
      },
      {
          "id": 28,
          "name": "Brazil"
      },
      {
          "id": 29,
          "name": "Brunei Darussalam"
      },
      {
          "id": 30,
          "name": "Bulgaria"
      },
      {
          "id": 31,
          "name": "Burkina Faso"
      },
      {
          "id": 32,
          "name": "Myanmar"
      },
      {
          "id": 33,
          "name": "Burundi"
      },
      {
          "id": 34,
          "name": "Cambodia"
      },
      {
          "id": 35,
          "name": "Cameroon"
      },
      {
          "id": 36,
          "name": "Cape Verde"
      },
      {
          "id": 37,
          "name": "Cayman Islands"
      },
      {
          "id": 38,
          "name": "Central African Republic"
      },
      {
          "id": 39,
          "name": "Chad"
      },
      {
          "id": 40,
          "name": "Chile"
      },
      {
          "id": 41,
          "name": "China"
      },
      {
          "id": 42,
          "name": "Colombia"
      },
      {
          "id": 43,
          "name": "Congo, the Democratic Republic of the"
      },
      {
          "id": 44,
          "name": "Congo"
      },
      {
          "id": 45,
          "name": "Costa Rica"
      },
      {
          "id": 46,
          "name": "Côte d'Ivoire"
      },
      {
          "id": 47,
          "name": "Iran"
      },
      {
          "id": 48,
          "name": "Poland"
      },
      {
          "id": 49,
          "name": "Croatia"
      },
      {
          "id": 50,
          "name": "Cuba"
      },
      {
          "id": 51,
          "name": "Cyprus"
      },
      {
          "id": 52,
          "name": "Czech Republic"
      },
      {
          "id": 53,
          "name": "Denmark"
      },
      {
          "id": 54,
          "name": "Djibouti"
      },
      {
          "id": 55,
          "name": "Dominica"
      },
      {
          "id": 56,
          "name": "Dominican Republic"
      },
      {
          "id": 57,
          "name": "Ecuador"
      },
      {
          "id": 58,
          "name": "Egypt"
      },
      {
          "id": 59,
          "name": "El Salvador"
      },
      {
          "id": 60,
          "name": "Equatorial Guinea"
      },
      {
          "id": 61,
          "name": "Eritrea"
      },
      {
          "id": 62,
          "name": "Estonia"
      },
      {
          "id": 63,
          "name": "Ethiopia"
      },
      {
          "id": 64,
          "name": "Faroe Islands"
      },
      {
          "id": 65,
          "name": "Fiji"
      },
      {
          "id": 66,
          "name": "Finland"
      },
      {
          "id": 67,
          "name": "France"
      },
      {
          "id": 68,
          "name": "French Guiana"
      },
      {
          "id": 69,
          "name": "French Polynesia"
      },
      {
          "id": 70,
          "name": "Gabon"
      },
      {
          "id": 71,
          "name": "Gambia"
      },
      {
          "id": 72,
          "name": "Georgia"
      },
      {
          "id": 73,
          "name": "Germany"
      },
      {
          "id": 74,
          "name": "Ghana"
      },
      {
          "id": 75,
          "name": "Greece"
      },
      {
          "id": 76,
          "name": "Greenland"
      },
      {
          "id": 77,
          "name": "Grenada"
      },
      {
          "id": 78,
          "name": "Guadeloupe"
      },
      {
          "id": 79,
          "name": "Guam"
      },
      {
          "id": 80,
          "name": "Guatemala"
      },
      {
          "id": 81,
          "name": "Guinea"
      },
      {
          "id": 82,
          "name": "Guyana"
      },
      {
          "id": 83,
          "name": "Haiti"
      },
      {
          "id": 84,
          "name": "Holy See (Vatican City State)"
      },
      {
          "id": 85,
          "name": "Honduras"
      },
      {
          "id": 86,
          "name": "Hong Kong"
      },
      {
          "id": 87,
          "name": "Hungary"
      },
      {
          "id": 88,
          "name": "Iceland"
      },
      {
          "id": 89,
          "name": "Pakistan"
      },
      {
          "id": 90,
          "name": "Indonesia"
      },
      {
          "id": 91,
          "name": "Iraq"
      },
      {
          "id": 92,
          "name": "Ireland"
      },
      {
          "id": 93,
          "name": "Israel"
      },
      {
          "id": 94,
          "name": "Italy"
      },
      {
          "id": 95,
          "name": "Jamaica"
      },
      {
          "id": 96,
          "name": "Japan"
      },
      {
          "id": 97,
          "name": "Jordan"
      },
      {
          "id": 98,
          "name": "Kazakhstan"
      },
      {
          "id": 99,
          "name": "Kenya"
      },
      {
          "id": 100,
          "name": "Korea, Democratic People's Republic of"
      },
      {
          "id": 101,
          "name": "Korea, Republic of"
      },
      {
          "id": 102,
          "name": "Kosovo"
      },
      {
          "id": 103,
          "name": "Kuwait"
      },
      {
          "id": 104,
          "name": "Kyrgyzstan"
      },
      {
          "id": 105,
          "name": "Lao People's Democratic Republic"
      },
      {
          "id": 106,
          "name": "Latvia"
      },
      {
          "id": 107,
          "name": "Lebanon"
      },
      {
          "id": 108,
          "name": "Lesotho"
      },
      {
          "id": 109,
          "name": "Liberia"
      },
      {
          "id": 110,
          "name": "Libya"
      },
      {
          "id": 111,
          "name": "Liechtenstein"
      },
      {
          "id": 112,
          "name": "Lithuania"
      },
      {
          "id": 113,
          "name": "Luxembourg"
      },
      {
          "id": 114,
          "name": "Macao"
      },
      {
          "id": 115,
          "name": "North Macedonia"
      },
      {
          "id": 116,
          "name": "Madagascar"
      },
      {
          "id": 117,
          "name": "Malawi"
      },
      {
          "id": 118,
          "name": "Malaysia"
      },
      {
          "id": 119,
          "name": "Maldives"
      },
      {
          "id": 120,
          "name": "Mali"
      },
      {
          "id": 121,
          "name": "Malta"
      },
      {
          "id": 122,
          "name": "Martinique"
      },
      {
          "id": 123,
          "name": "Mauritania"
      },
      {
          "id": 124,
          "name": "Mauritius"
      },
      {
          "id": 125,
          "name": "Mexico"
      },
      {
          "id": 126,
          "name": "Moldova, Republic of"
      },
      {
          "id": 127,
          "name": "Monaco"
      },
      {
          "id": 128,
          "name": "Mongolia"
      },
      {
          "id": 129,
          "name": "Montenegro"
      },
      {
          "id": 130,
          "name": "Montserrat"
      },
      {
          "id": 131,
          "name": "Morocco"
      },
      {
          "id": 132,
          "name": "Mozambique"
      },
      {
          "id": 133,
          "name": "Namibia"
      },
      {
          "id": 134,
          "name": "Nepal"
      },
      {
          "id": 135,
          "name": "Netherlands"
      },
      {
          "id": 136,
          "name": "New Caledonia"
      },
      {
          "id": 137,
          "name": "New Zealand"
      },
      {
          "id": 138,
          "name": "Nicaragua"
      },
      {
          "id": 139,
          "name": "Niger"
      },
      {
          "id": 140,
          "name": "Nigeria"
      },
      {
          "id": 141,
          "name": "Niue"
      },
      {
          "id": 142,
          "name": "Norway"
      },
      {
          "id": 143,
          "name": "Oman"
      },
      {
          "id": 144,
          "name": "Palestine, State of"
      },
      {
          "id": 145,
          "name": "Panama"
      },
      {
          "id": 146,
          "name": "Papua New Guinea"
      },
      {
          "id": 147,
          "name": "Paraguay"
      },
      {
          "id": 148,
          "name": "Peru"
      },
      {
          "id": 149,
          "name": "Philippines"
      },
      {
          "id": 150,
          "name": "Portugal"
      },
      {
          "id": 151,
          "name": "Puerto Rico"
      },
      {
          "id": 152,
          "name": "Qatar"
      },
      {
          "id": 153,
          "name": "Réunion"
      },
      {
          "id": 154,
          "name": "Romania"
      },
      {
          "id": 155,
          "name": "Russian Federation"
      },
      {
          "id": 156,
          "name": "Rwanda"
      },
      {
          "id": 157,
          "name": "Saint Kitts and Nevis"
      },
      {
          "id": 158,
          "name": "Saint Lucia"
      },
      {
          "id": 159,
          "name": "Saint Vincent and the Grenadines"
      },
      {
          "id": 160,
          "name": "Samoa"
      },
      {
          "id": 161,
          "name": "San Marino"
      },
      {
          "id": 162,
          "name": "Saudi Arabia"
      },
      {
          "id": 163,
          "name": "Senegal"
      },
      {
          "id": 164,
          "name": "Serbia"
      },
      {
          "id": 165,
          "name": "Seychelles"
      },
      {
          "id": 166,
          "name": "Sierra Leone"
      },
      {
          "id": 167,
          "name": "Singapore"
      },
      {
          "id": 168,
          "name": "Slovakia"
      },
      {
          "id": 169,
          "name": "Slovenia"
      },
      {
          "id": 170,
          "name": "Solomon Islands"
      },
      {
          "id": 171,
          "name": "Somalia"
      },
      {
          "id": 172,
          "name": "South Africa"
      },
      {
          "id": 173,
          "name": "South Sudan"
      },
      {
          "id": 174,
          "name": "Spain"
      },
      {
          "id": 175,
          "name": "Sri Lanka"
      },
      {
          "id": 176,
          "name": "Sudan"
      },
      {
          "id": 177,
          "name": "Suriname"
      },
      {
          "id": 178,
          "name": "Swaziland"
      },
      {
          "id": 179,
          "name": "Sweden"
      },
      {
          "id": 180,
          "name": "Switzerland"
      },
      {
          "id": 181,
          "name": "Syrian Arab Republic"
      },
      {
          "id": 182,
          "name": "Taiwan"
      },
      {
          "id": 183,
          "name": "Tajikistan"
      },
      {
          "id": 184,
          "name": "Tanzania, United Republic of"
      },
      {
          "id": 185,
          "name": "Thailand"
      },
      {
          "id": 186,
          "name": "Togo"
      },
      {
          "id": 187,
          "name": "Tonga"
      },
      {
          "id": 188,
          "name": "Trinidad and Tobago"
      },
      {
          "id": 189,
          "name": "Tunisia"
      },
      {
          "id": 190,
          "name": "Turkey"
      },
      {
          "id": 191,
          "name": "Turkmenistan"
      },
      {
          "id": 192,
          "name": "Turks and Caicos Islands"
      },
      {
          "id": 193,
          "name": "Uganda"
      },
      {
          "id": 194,
          "name": "Ukraine"
      },
      {
          "id": 195,
          "name": "United Arab Emirates"
      },
      {
          "id": 196,
          "name": "Uruguay"
      },
      {
          "id": 197,
          "name": "Uzbekistan"
      },
      {
          "id": 198,
          "name": "Venezuela, Bolivarian Republic of"
      },
      {
          "id": 199,
          "name": "Viet Nam"
      },
      {
          "id": 200,
          "name": "Virgin Islands, British"
      },
      {
          "id": 201,
          "name": "Yemen"
      },
      {
          "id": 202,
          "name": "Zambia"
      },
      {
          "id": 203,
          "name": "Zimbabwe"
      }
  ]
  
    selectEvent(e: any) {
        this.countryKeyword = 'country=' + e.name;
        this.getCountries()
    }
  
    onChangeSearch(val: string) {
       
    }
  
    onFocused(e: any) {
        this.countryKeyword = 'country=' + e.target.value;
        this.getCountries()
    }  
  
    getCountries() {
      return this._CountryService
        .getCountries(this.countryKeyword)
        .subscribe((data) => (this.COUNTRIES = data));
    }
  
    ngOnInit(): void {
      this._CountryService
        .getCountries(this.countryKeyword)
        .subscribe((data) => (this.COUNTRIES = data));
  
    }
  
    phrase$ = new BehaviorSubject<string>('');
  
  
    /** Observable for filtering out data to show in table */
    items$ = this.phrase$.pipe(
      map((phrase = ' ') =>
        phrase.length > 0
          ? this.COUNTRIES.filter(
            ({ name }) => name.toLocaleLowerCase().indexOf(phrase) >= 0
          ).slice(0)
          : this.COUNTRIES
      )
    );
  
    /** pushing new phrase values */
    onChange(event: any) {
      this.phrase$.next(event.target.value);
  
      document
        .querySelectorAll('.country-default')[0]
        .setAttribute('style', 'display:none');
    }
  }
  