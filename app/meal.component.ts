import { Component } from 'angular2/core';
import { Meal } from './keg.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <label>{{ meal.name }}, {{ meal.calories }} cal<br>{{ meal.details }}</label>
    </div>
  </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
