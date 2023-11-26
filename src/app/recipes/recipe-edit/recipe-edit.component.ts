import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent {

  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe((e: Params) => {
      this.id = +e['id'];
      this.editMode = e['id'] != null;
    });
  }

}
