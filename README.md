## Trader Joe’s Recipe Organizer
The Trader Joe’s recipe organizer is an app that generates Trader Joe’s recipes and displays them in a tile view. 

Click a tile to view the recipe’s details. 
Use the drop down menu to sort recipes by topic.

## MVP (Minimum viable product)
* We are pulling a list of recipes from the Trader Joe’s All Recipes api (https://traderjoeapi.jackgisel.com/api/recipes)
* The drop down menu helps users filter the recipes by topic name (e.g. Quick Meal, Snack).  *id based
E.g. filters list down by tagIds: “tags”:[{“tagId”:11,“name”:“Quick Meal”}, {“name”:“Snack”,“tagId”:5}

* When a recipe block is clicked, the recipe’s ingredients and directions appear under the block (X- toggle to expand or hide).
* User can favorite a recipe. These interactions do not need to persist after reloading the page.
* Application is styled with basic css.

## Stretch Goals
* User can use a search bar to filter the list down based on the search criteria.
* User can add a comment to a recipe.
* Get favorite count and comment posts to persist after reloading the page. (Create a db.json file that loads 1st when re-opening.)
//can post to different URL/db.json
* Provide recipe suggestions based on the season of the year (Summer, Fall, Winter, Spring).
* Provide recipe suggestions based on need of the user (e.g. Energy boost, Nutrient rich, Immunity fortifier, Gluten free, Soy free).
* Create users and allow them to save new recipes and see their favorite recipes when they access the application.
* Improve user experience by styling the application with more advanced css.