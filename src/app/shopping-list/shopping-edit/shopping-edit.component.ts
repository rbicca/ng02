import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{

  //@ViewChild('nameInput',{ static: false }) nameInputRef: ElementRef;
  //@ViewChild('amountInput',{ static: false }) amountInputRef: ElementRef;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  constructor(private slService: ShoppingListService){}

  ngOnInit(): void {
    this.subscription =  this.slService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /*
  onAdd(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.slService.addIngredient(new Ingredient(name, amount));
    
  }
  */

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient); 
    }
    this.editMode = false;
    this.slForm.resetForm();
  }

  onDeleteItem(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.resetForm();  
  }

  onClear(){
    this.slService.clearBasket();
    this.editMode = false;
    this.slForm.resetForm();
  }
}
