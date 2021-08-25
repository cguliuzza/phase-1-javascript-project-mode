const apiURL ="https://traderjoeapi.jackgisel.com/api/recipes"
//const apiURL= ""
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Dom Loaded")

    fetch(apiURL)
    .then(resp => resp.json())
    .then(allRecipesArray => {
      console.log(allRecipesArray);
      console.log(document.getElementById('recipe-block'));

      const recipeBlock = document.querySelector('#recipe-block')
        
      allRecipesArray.forEach((recipeObject) => {
        
          const recipeTitles = document.querySelector('#title')

          // const recipeTagNames = document.querySelector('#tags')
          // recipeTagNames.textContent = recipeObject.tags.name.value
          // recipeBlock.append(recipeTagNames)
       
        
          const oneTitleDiv   =document.createElement('div');
          oneTitleDiv.classList ="nextLine";
          const starImg = document.createElement('img');
          const recipeTitleP= document.createElement('p');
          const brNewLine = document.createElement('br');
          recipeTitleP.innerText = recipeObject.title;
          starImg.src= "css/pinkStar.jpg";
          starImg.classList= ["favoriteStar"]
          oneTitleDiv.append(brNewLine,starImg, recipeTitleP);
          //recipeBlock.append(oneTitleDiv);
          const titleDiv= document.querySelector('.margin-top')
      
  
  
    //       const recipeImg = document.querySelector('#image')
    //  //     recipeImg.src = recipeObject.img
    //   //    recipeImg.alt = `Image of ${recipeObject.title}`;
        //  recipeBlock.append(recipeImg);

   
        //wrong object need drop down 

        // oneTitleDiv.addEventListener('click',() => {
        
        // const recipeSectionDiv = document.querySelector('#id')
        // const recipeId = document.querySelector('#one-recipe-block')
        // recipeId.textContent = recipeObject.id
        // recipeBlock.append(recipeId)
        // const recipeServes = document.querySelector('#serves')
        // recipeServes.textContent = recipeObject.serves
        // recipeBlock.append(recipeServes)
        // console.log(recipeObject)
        // getRecipeIngredients(recipeObject)
        // }
        

      // const recipeTagIds = document.querySelector('#tag-ids')
       //console.log(recipeTitleP);
       //recipeBlock.append(recipeTagIds)

    //    <div class="recipeInfo">
    //    <div id="detailed-info">
    //      <p id="title">Recipe Title: </p>
    //      <p id="prep-time">Prep Time: </p>
    //      <p id="ingredients">Ingredients: </p>
    //      <p id="directions">Directions: </p>
    //      <p id="cooking-time">Cooking Time: </p>
    //      <p id="tags">Tags: </p>
    //      <p id="id">Id: </p>
    //      <p id="tag-ids">TagIds: </p>
    //      <p id="serves">Serves: </p>
    //    </div>






      


     
        
      
      

    })


})


    
   // console.log(recipeServes[0])
    


// favoriteImg.src =selectedStar;
// favoriteDiv.classList = ["favoriteStar"]
// favoriteDiv.append(favoriteImg);
// recipeBlock.append(favoriteDiv);
    
   
})


function getRecipeIngredients(recipeObject)
{    

    const recipeBlock = document.querySelector('#recipe-block')
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
recipeCookingTime.textContent = recipeObject.cookingTimegit
recipeBlock.append(recipeCookingTime)
}


