import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() r : Recipe;
  @Input() idRecipe: number;

  //constructor (private recipesSvs: RecipeService){}

  // onClick(){
  //   this.recipesSvs.recipeSelected.emit(this.r);
  // }

}
