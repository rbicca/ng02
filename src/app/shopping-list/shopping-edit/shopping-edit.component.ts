import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @Output() ingredientesAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput',{ static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput',{ static: false }) amountInputRef: ElementRef;

  onAdd(){
    this.ingredientesAdded.emit(new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    ));
  }
}
