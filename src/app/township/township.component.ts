import { Component, OnInit } from '@angular/core';
import { restaurants } from '../mock-restaurant';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-township',
  templateUrl: './township.component.html',
  styleUrls: ['./township.component.css'],
})
export class TownshipComponent implements OnInit {
  restaurants: Restaurant[] = restaurants;
  constructor() {}

  ngOnInit(): void {}
}
