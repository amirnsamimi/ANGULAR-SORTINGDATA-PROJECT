import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonstersComponent } from 'src/component/monsters/monsters.component';
import { HttpClientModule } from "@angular/common/http"
import { MonsterService } from './config/config.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
