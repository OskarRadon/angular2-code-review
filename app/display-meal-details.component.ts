import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'display-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h2>{{ meal.name }}, {{ meal.calories }} cal - <i>{{ meal.details }}</i></h2>
    </div>
  `
})
export class DisplayMealDetailsComponent {
  public meal: Meal;
}
