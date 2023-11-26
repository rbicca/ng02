import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe; 
  id: number;

  constructor(
      private recService: RecipeService,
      private route: ActivatedRoute,
      private router: Router
      ){}

  ngOnInit(){
    this.route.params.subscribe((e: Params)=>{
      this.id = +e['id'];
      this.recipe = this.recService.getRecipe(this.id);
    });
  }

  onAlterar(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onComprar(){
    this.recService.Buy(this.recipe.ingredients);
  }
}
