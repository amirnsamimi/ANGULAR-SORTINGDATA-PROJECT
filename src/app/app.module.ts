import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from 'src/component/monsters/monsters.component';
import { HttpClientModule } from "@angular/common/http"
import { CountryService } from './config/config.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/component/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent,
    NavbarComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    
  ],
  providers: [CountryService,
  ],
  bootstrap: [AppComponent,
    ]
})
export class AppModule { }
