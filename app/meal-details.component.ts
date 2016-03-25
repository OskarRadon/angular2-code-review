import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h2>{{ meal.name }}, {{ meal.calories }} cal</h2>
      <h3><i>{{ meal.details }}</i></h3>

      <h3>Edit details</h3>
      <h5>Name: </h5>
      <input [(ngModel)]="meal.name" class="input-sm meal-name-form"/>
      <h5>Details: </h5>
      <input [(ngModel)]="meal.details" class="input-sm meal-name-form"/>
      <h5>Calories: </h5>
      <input [(ngModel)]="meal.calories" class="input-sm meal-name-form"/>
    </div>
  `
})
export class MealDetailsComponent {
  public meal: Meal;
}
