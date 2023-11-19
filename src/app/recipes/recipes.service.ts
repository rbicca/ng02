import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Bife a Parmegiana', 
                    'Receita bem empanada...', 
                    'https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg',
                    [
                        new Ingredient('Carne',1),
                        new Ingredient('Farinha',2),
                        new Ingredient('Ovo',1),
                    ]),
        new Recipe('Estrogonofe', 
                    'Carne picada com...', 
                    'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/861d71239103ef70f76554abf688bfc8.jpg',
                    [
                        new Ingredient('Carne',1),
                        new Ingredient('Creme de Leite',2),
                        new Ingredient('Cogumeos',1.5),
                    ]),
    ];
    
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){}

    getRecipes() {
        return [...this.recipes];
    }

    Buy(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}