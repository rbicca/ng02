import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {

    selectedRecipe: Recipe;
    
    constructor(private recipesSvs: RecipeService){}

    ngOnInit(){
      this.recipesSvs.recipeSelected.subscribe((r: Recipe) => {
        this.selectedRecipe = r;
      });
    }

}
