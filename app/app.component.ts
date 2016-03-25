import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meals:</h1>
      <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Carrots and hummus", "My favorite snack!", 240),
      new Meal("Burrito", "I love burritos!!", 700),
      new Meal("Kale salad", "Healthy and tasty", 130),
      new Meal("Tiramisu", "Very fancy", 550),
      new Meal("Poutine", "Potato Champion is the best", 1000)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
