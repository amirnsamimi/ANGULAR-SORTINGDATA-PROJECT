import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CountryComponent } from "src/component/country/country.component";
import { HttpClientModule } from "@angular/common/http";
import { CountryService } from "./config/config.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "src/component/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import {MatCardModule} from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [AppComponent, CountryComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatCardModule,
    NgxPaginationModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
