import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="new-meal-form">
    <h4>Create Meal: </h4>
    <input placeholder="Name" class="input-sm" #newName>
    <input placeholder="Details" class="input-sm" #newDetails>
    <input placeholder="Calories" class="input-sm" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="create btn-success btn-sm add-button">Add Meal</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter < Meal > ;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement) {
    var newMeal = new Meal(mealName.value, mealDetails.value, parseInt(mealCalories.value));
    this.onSubmitNewMeal.emit(newMeal);
    // console.log(newMeal);
    mealName.value = "";
    mealDetails.value = "";
    mealCalories.value = "";
  }
}
