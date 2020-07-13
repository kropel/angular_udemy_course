import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingridiens: Ingridient[] = [
    new Ingridient('Aples', 5),
    new Ingridient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit(): void {}
}
