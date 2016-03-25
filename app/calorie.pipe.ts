import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var healthiness = args[0];
    if (healthiness === "healthy") {
      return input.filter((meal) => {
        return meal.calories < 301;
      });
    } else if (healthiness === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
