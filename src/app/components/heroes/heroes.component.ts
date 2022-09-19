import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesServices: HeroesService) { }

  ngOnInit() {
  }

}