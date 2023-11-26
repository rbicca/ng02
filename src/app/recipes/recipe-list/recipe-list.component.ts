import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {

  recipes: Recipe[];
  
  constructor(
    private recipesSvs: RecipeService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.recipesSvs.getRecipes();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
