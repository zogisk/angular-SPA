import { Component, OnInit } from '@angular/core';
import {HeroesService, Hero} from '../../services/heroes/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hers:any[] = []
  constructor(private _heroesServices: HeroesService) { }

  ngOnInit() {

    this.hers = this._heroesServices.getHeroes();
    console.log(this.hers)

  }
}