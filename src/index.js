//dataForJSON='https://traderjoeapi.jackgisel.com/api/recipes'    //fetches 483 recipes when working

const dropDownElement = document.querySelector('.recipeType');  //uses ropDownElement.addEventListener to filter meals based on 'change' event
const dataForJSON; //add url, db.json file location, server address, etc.
const recipeBlock;
opensMeals();

function opensMeals(){
fetch(dataForJSON)
.then(resp => resp.json())
.then(allRecipesArray => {
        
    recipeBlock = document.querySelector('#recipe-block');    
    
        allRecipesArray.forEach((recipeObject) => {
            console.log(recipeObject)

            allRecipesArray =  {"title": "Biscuits & Spicy Soy Chorizo Gravy", "serves": "five"}
//ERASE when JSON or working API. mock title for me to test the star event listener.  "serves" won't pass as a key/value pair!?!
//const recipeTagNames = document.querySelector('#tags');
//recipeTagNames.textContent = allRecipesArray.tags.name.value;
//recipeBlock.append(recipeTagNames);
   
        const recipeTitles = document.querySelector('#title'); 
        const oneTitleDiv = document.createElement('div');  //section for symbol and title inside a line
        oneTitleDiv.classList ="nextLine";
        const starImg = document.createElement('img');
        const recipeTitleP= document.createElement('p');
        const brNewLine = document.createElement('br');
        recipeTitleP.innerText = allRecipesArray.title;
        starImg.src= "css/pinkStar.jpg";
        starImg.classList= ["favoriteStar"]
        oneTitleDiv.append(brNewLine,starImg, recipeTitleP);
        recipeBlock.append(oneTitleDiv);
        const titleDiv= document.querySelector('.margin-top')
        
        
        starImg.addEventListener('click',(mealTypeArray, starImg) =>{
            const elementHolder = mealTypeArray[0];
            starImg.src= "css/blueStar.jpg"

            //move starred to top
            for (let i = 0; i < mealTypeArray.length; i++){
                mealTypeArray.splice(i, 1);
                mealTypArrayunshift(elementHolder);
            }
        })



        
        console.log(titleDiv);
 //expands one listed recipe in oneTitleDiv  to lowerPage
        oneTitleDiv.addEventListener('click',() => { (e) =>{
//Tina please provide, lower leftIngredientsDiv, rightDirectionsDiv, largeRecipeContainer.  I'll do the bottom part.

//passess the one Array to be sorted into three other Divs.  
//suggested HTML ids to match js 
//lower leftIngredientsDiv
//lower rightDirectionsDiv
//the largeRecipeContainer that the above two fit into   e.g. largeRecipeDiv.append(leftIngredientDiv,rightDirectionsDiv)
    
//we just need the space that the listing take 
// one option is to replace recipeBlock e.g. recipeBlock = largeRecipeDiv. I will replace recipeBlock with largeRecipeDiv or just remove it since 
//another option is to remove recipeBox holding recipes too.

//const lowerLeftHalfDiv.querySelector('#')
//const lowerRightHalfDiv.querySelector('#')
//use same code for dropdown selector event listener
        }

    })
})
})
}

  
dropDownElement.addEventListener('change', (e) => {
    const recipeType  = e.target.value;

    mealTypeArray= allRecipesArray.filter(recipe=> recipe.includes(`{recipeType}`));
    mealTypeArray.forEach((recipeObject) => {

            mealTypeArray=  {"title": "Biscuits & Spicy Soy Chorizo Gravy", "serves": "five"}
    //ERASE when JSON or working API. mock title for me to test the star event listener.  "serves" won't pass as a key/value pair!?!
   //const recipeTagNames = document.querySelector('#tags');
   //recipeTagNames.textContent = allRecipesArray.tags.name.value;
   //recipeBlock.append(recipeTagNames);

            const recipeTitles = document.querySelector('#title'); 
            const oneTitleDiv = document.createElement('div');  //section for symbol and title inside a line
            oneTitleDiv.classList ="nextLine";
            const starImg = document.createElement('img');
            const recipeTitleP= document.createElement('p');
            const brNewLine = document.createElement('br');
            recipeTitleP.innerText = allRecipesArray.title;
            starImg.src= "css/pinkStar.jpg";
            starImg.classList= ["favoriteStar"]
            oneTitleDiv.append(brNewLine,starImg, recipeTitleP);
            recipeBlock.append(oneTitleDiv);
            const titleDiv= document.querySelector('.margin-top')
            console.log(titleDiv);


            starImg.addEventListener('click',(mealTypeArray, starImg) =>{
                const elementHolder = mealTypeArray[0];
                starImg.src= "css/blueStar.jpg"

                //move starred to top
                for (let i = 0; i < mealTypeArray.length; i++){
                    mealTypeArray.splice(i, 1);
                    mealTypArrayunshift(elementHolder);
                }
            })

//expands one listed recipe in oneTitleDiv  to lowerPage
                oneTitleDiv.addEventListener('click',() => {
//passess the one Array to be sorted into three other Divs.  
//can also remove recipeBox holding recipes too.
                })

            })

    })  




// favoriteImg.src =selectedStar;
// favoriteDiv.classList = ["favoriteStar"]
// favoriteDiv.append(favoriteImg);
// recipeBlock.append(favoriteDiv);
//switch color when star selected






function getRecipeIngredientsDirctions(allRecipesArray)
{    

   const leftIngredientsDiv = document.querySelector('#leftIngredientsDiv');
   const rightDirectionsDiv= document.querySelector('#rightDirectionsDiv');
  const largeRecipeContainer = document.querySelector('#largeRecipeContainer');

// can move to largeRecipeContainer and center in css
const recipeTitles = document.querySelector('#title');
recipeTitles.textContent = allRecipesArray.title;
largeRecipeContainer.append(recipeTitles); //please bold and center in css



const recipePrepTime = document.querySelector('#prep-time');
recipePrepTime.textContent = allRecipesArray.prepTime;

const recipeServes = document.querySelector('#serves');
recipeServes.textContent = allRecipesArray.serves;

const recipeIngredients = document.querySelector('#ingredients')
recipeIngredients.textContent = allRecipesArray.ingredients;
leftIngredientsDiv.append(recipeIngredients,recipeServes);



const recipeDirections = document.querySelector('#directions');
recipeDirections.textContent = allRecipesArray.directions;

const recipeCookingTime = document.querySelector('#cooking-time');
recipeCookingTime.textContent = allRecipesArray.cookingTime;

rightDirectionsDiv.append(recipePrepTime, recipeCookingTime,recipeDirections);

}


//if we want a delete function 2. we need an X or button to 'click'
// nextLine.addEventListener{'click', (e) => e.target.parentElement.remove()}
