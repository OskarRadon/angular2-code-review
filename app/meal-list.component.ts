
import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [MealPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">All Inventory</option>
      <option value="unhealthy">Foods with more than 300 calories</option>
      <option value="healthy">Foods with less than 300 calories</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | pints:filterDone"
    (click)="mealClicked(currentMeal)"
    [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter < Meal > ;
  public selectedMeal: Meal;
  public filterDone: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(createdMeal: Meal): void {
    this.mealList.push(createdMeal)
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
