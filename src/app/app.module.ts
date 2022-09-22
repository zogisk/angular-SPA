import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//SERVICIOS
import {HeroesService} from './services/heroes/heroes.service';

//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTS
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, APP_ROUTING, CommonModule],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    NavbarComponent, 
    HeroesComponent,
    HeroeComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers:    [HeroesService]
})
export class AppModule { }
