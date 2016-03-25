import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h4>Name: </h4>
      <input [(ngModel)]="meal.name" class="input-sm meal-name-form"/>
      <h4>Details: </h4>
      <input [(ngModel)]="meal.details" class="input-sm meal-name-form"/>
      <h4>Calories: </h4>
      <input [(ngModel)]="meal.calories" class="input-sm meal-name-form"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
