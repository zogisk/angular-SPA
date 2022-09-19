import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//SERVICIOS
import {HeroesService} from './services/heroes/heroes.service';

//RUTAS
import { APP_ROUTING } from './app.routes';

//COMPONENTS
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, APP_ROUTING],
  declarations: [ AppComponent, HelloComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroesService]
})
export class AppModule { }
