import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Foods</option>
      <option value="healthy">Healthy foods :)</option>
      <option value="unhealthy">Unhealthy foods :(</option>
    </select>

    <meal-display *ngFor="#currentMeal of mealList | calories:filterCalories"
    (click)="mealClicked(currentMeal)"
    [meal]="currentMeal">
    </meal-display>

    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>

    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
