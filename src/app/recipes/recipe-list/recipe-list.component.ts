import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Bife a Parmegiana', 'Receita bem empanada...', 'https://img.saborosos.com.br/imagens/bife-a-parmegiana.jpg'),
    new Recipe('Estrogonofe', 'Carne picada com...', 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/861d71239103ef70f76554abf688bfc8.jpg'),
  ];
}
