// fetch 197 recipe tag names and ids
//fetch('https://traderjoeapi.jackgisel.com/api/tags/')
//.then(resp => resp.json())
//.then(allTagsArray => console.log(allTagsArray))

//fetch 483 recipes
fetch('https://traderjoeapi.jackgisel.com/api/recipes')
.then(resp => resp.json())
.then(allRecipesArray => {
    const recipeBlock = document.querySelector('#recipe-block')
    
    allRecipesArray.forEach((recipeObject) => {
        console.log(recipeObject)
        
        const recipeTitles = document.querySelector('#title')
        recipeTitles.textContent = recipeObject.title
        recipeBlock.append(recipeTitles)
        
        const recipePrepTime = document.querySelector('#prep-time')
        recipePrepTime.textContent = recipeObject.prepTime
        recipeBlock.append(recipePrepTime)

        const recipeIngredients = document.querySelector('#ingredients')
        recipeIngredients.textContent = recipeObject.ingredients
        recipeBlock.append(recipeIngredients)

        const recipeDirections = document.querySelector('#directions')
        recipeDirections.textContent = recipeObject.directions
        recipeBlock.append(recipeDirections)

        const recipeCookingTime = document.querySelector('#cooking-time')
        recipeCookingTime.textContent = recipeObject.cookingTime
        recipeBlock.append(recipeCookingTime)

        // const recipeTagNames = document.querySelector('#tags')
        // recipeTagNames.textContent = recipeObject.tags.name.value
        // recipeBlock.append(recipeTagNames)

        const recipeId = document.querySelector('#id')
        recipeId.textContent = recipeObject.id
        recipeBlock.append(recipeId)

        const recipeTagIds = document.querySelector('#tag-ids')
        recipeTagIds.textContent = recipeObject.tagIds
        recipeBlock.append(recipeTagIds)

        const recipeServes = document.querySelector('#serves')
        recipeServes.textContent = recipeObject.serves
        recipeBlock.append(recipeServes)

        const recipeImg = document.querySelector('#image')
        recipeImg.src = recipeObject.img
        recipeImg.alt = `Image of ${recipeObject.title}`
        recipeBlock.append(recipeImg)

    })

})