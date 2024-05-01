import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {
    
    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('File Mignon', 1),
        new Ingredient('Farinha Panko', 2),
      ];
      
    getIngredients(){
        return [...this.ingredients];
    }

    getIngredient(index: number){
        return this.ingredients[index];
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

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next([...this.ingredients]);
    }

    clearBasket(){
        this.ingredients = [
            new Ingredient('File Mignon', 1),
            new Ingredient('Farinha Panko', 2),
          ];
          this.ingredientsChanged.next([...this.ingredients]);

    }
}