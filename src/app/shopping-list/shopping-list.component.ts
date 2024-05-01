import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  
  ingredients: Ingredient[] = [];
  private sub: Subscription;

  constructor (private slService: ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.sub = this.slService.ingredientsChanged.subscribe((ings)=>{
      this.ingredients = ings;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onEditItem(i: number){
    //console.log(i);
    this.slService.startedEditing.next(i);
  }

}
