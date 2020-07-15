import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
      'Another recipe',
      'This is test text recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMfrBNUKC1RYni1APYut5sBRjs64aoGvZ3EQ&usqp=CAU'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe): void {
    console.log('recipe-list');
    this.recipeWasSelected.emit(recipe);
  }
}
