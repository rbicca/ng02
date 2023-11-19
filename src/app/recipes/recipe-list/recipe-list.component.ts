import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[];
  
  constructor(private recipesSvs: RecipeService){}

  ngOnInit(){
    this.recipes = this.recipesSvs.getRecipes();
  }
  
}
