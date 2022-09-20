import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesService, Hero} from '../../services/heroes/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = []
  constructor(private _heroesServices: HeroesService) { }

  ngOnInit() {

    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes)

  }

}