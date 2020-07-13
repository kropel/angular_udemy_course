import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is test text recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH7fUhBt1SDasMCz05pM24hC2Qfr_fT34_HQ&usqp=CAU'
    ),
    new Recipe(
      'A test Recipe',
      'This is test text recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQH7fUhBt1SDasMCz05pM24hC2Qfr_fT34_HQ&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
