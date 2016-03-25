import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <h4>{{ meal.name }}</h4>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
