import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var Healthiness = args[0];
    if (Healthiness === "unhealthy") {
      return input.filter((keg) => {
        return (keg.calories > 300);
      });
    } else if (Healthiness === "healthy") {
      return input.filter((keg) => {
        return (keg.calories < 300);
      });
    } else {
      return input;
    }
  }
}
