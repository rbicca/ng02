import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {
    
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('File Mignon', 1),
        new Ingredient('Farinha Panko', 2),
      ];
      
    getIngredients(){
        return [...this.ingredients];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        //this.ingredientsChanged.emit([...this.ingredients]);
        this.ingredientsChanged.next([...this.ingredients]);
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        //this.ingredientsChanged.emit([...this.ingredients]);
        this.ingredientsChanged.next([...this.ingredients]);
    }
}