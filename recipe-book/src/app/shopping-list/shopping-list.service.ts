import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {

    //incredientsChanged = new EventEmitter<Ingredient[]>();
    incredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Orange', 4)
      ];

      getIgredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        //this.incredientsChanged.emit(this.ingredients.slice());
        this.incredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]) {
        //   for(let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        //   }
        //Push array of elements using ... operator.
        this.ingredients.push(...ingredients);
        //this.incredientsChanged.emit(this.ingredients.slice());
        this.incredientsChanged.next(this.ingredients.slice());
      }
}