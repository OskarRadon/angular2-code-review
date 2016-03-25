import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class= "container">
      <h1>Meals:</h1>
      <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    <div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Popcorn", "Went to see a movie", 350),
      new Meal("Burrito", "I love burritos!!", 700),
      new Meal("Tiramisu", "Very fancy", 550)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal); // This is where the view details will go
  }
}
