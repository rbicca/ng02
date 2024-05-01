import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit, OnDestroy{

  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private recipesSvs: RecipeService,
    private router: Router,
    private route: ActivatedRoute){}


  ngOnInit(){
    this.recipes = this.recipesSvs.getRecipes();

    this.subscription =  this.recipesSvs.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
