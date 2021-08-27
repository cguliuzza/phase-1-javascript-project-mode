fetch('http://localhost:3000/recipes')
.then(resp => resp.json())
.then(allRecipesArray => {
    const recipeBlock = document.querySelector('#recipe-block')
    
    allRecipesArray.forEach((recipeObject) => {
        
        const recipeTitles = document.querySelector('#title')
        recipeTitles.textContent = recipeObject.title
        recipeBlock.append(recipeTitles)

        const recipeIngredients = document.querySelector('.ingredients-list')

        const ingredientsItem = document.createElement('li')
        // recipeIngredients.append(ingredientsItem.innerText)
        console.log(ingredientsItem, recipeObject.ingredients)

        recipeObject.ingredients.forEach(item => {
            console.log(item)
            ingredientsItem.innerText = item
            recipeIngredients.append(ingredientsItem)
        })

        const recipeDirections = document.querySelector('#directions')

        const directionsTextP = document.createElement('p')
        directionsTextP.innerText = recipeObject.directions
        recipeDirections.append(directionsTextP.innerText)

        const recipeTagNames = document.querySelector('#tags')
    })

})