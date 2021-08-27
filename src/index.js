fetch('http://localhost:3000/recipes')
.then(resp => resp.json())
.then(allRecipesArray => {
    const recipeBlock = document.querySelector('#recipe-block')
    
    allRecipesArray.forEach((recipeObject) => {
        console.log(recipeObject)
        
        const recipeTitles = document.querySelector('#title')
        recipeTitles.textContent = recipeObject.title
        recipeBlock.append(recipeTitles)

        const recipeIngredients = document.querySelector('#ingredients')
        recipeIngredients.textContent = recipeObject.ingredients
        recipeBlock.append(recipeIngredients)

        const recipeDirections = document.querySelector('#directions')
        recipeDirections.textContent = recipeObject.directions
        recipeBlock.append(recipeDirections)

        const recipeTagNames = document.querySelector('#tags')
        // recipeBlock.append(recipeTagNames)
    })

})