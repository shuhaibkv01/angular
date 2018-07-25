import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {


   // recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
            'A Supper Tasty',
            'https://www.nps.gov/subjects/camping/images/recipe_1.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)]),
        new Recipe('Burger', 'Good One', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg',
            [new Ingredient('Meat', 1),
            new Ingredient('Buns', 2)])
    ];


    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}