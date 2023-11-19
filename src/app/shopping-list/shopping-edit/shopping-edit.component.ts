import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput',{ static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput',{ static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService){}

  onAdd(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.slService.addIngredient(new Ingredient(name, amount));
    
  }
}
