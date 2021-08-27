const dropDownElement = document.querySelector('.recipeType');  //uses ropDownElement.addEventListener to filter meals based on 'change' event
//const dataForJSON = 'http://localhost:3000/recipes' //add url, db.json file location, server address, etc.
const dataForJSON = null; //add url, db.json file location, server address, etc.
const starImg = document.createElement('img');
const recipeBlock = document.querySelector('#recipe-block');
const oneRecipeBlock = document.querySelector('#one-recipe-block');
const brNewLine = document.createElement('br');
opensMeals();


function opensMeals() {

fetch('http://localhost:3000/recipes')
.then(resp => resp.json())
.then(allRecipesArray => {
    
    
    allRecipesArray.forEach((recipeObject) => {
     //console.log(recipeObject)

       const recipeTitleP= document.createElement('p');
       recipeTitleP.innerText = recipeObject.title;
  
       const starImg = document.createElement('img');
       starImg.src= "css/pinkStar.jpg";
       starImg.classList= ["favoriteStar"]


        const oneTitleDiv=document.createElement('div');
        oneTitleDiv.classList ="nextLine";
        
        
        recipeBlock.append(oneTitleDiv);
        const titleDiv= document.querySelector('.margin-top')
       

        oneTitleDiv.append(brNewLine,starImg, recipeTitleP);
        recipeBlock.append(oneTitleDiv)
        console.log(oneTitleDiv)
        
      

//Lower Half Ingredients and Directions
//Find Object.ingredients  b/c its null now
//center title
      

        starImg.addEventListener('click',(e) =>{
            //console.log(e.target.parentElement.querySelector('p'));
            const selectedDivTitle =e.target.parentElement.querySelector('p');
            const selectedTitle = selectedDivTitle.innerText;
            const selectedTitleDiv=document.createElement('div');
            console.log(selectedDivTitle)
            selectedDivTitle.classList =["nextLine", "middle"];

            const unOrderedList = document.createElement('ul');
            const orderedList = document.createElement('li');
            selectedDivTitle.innerText= recipeTitleP;
            console.log(selectedTitle);


            starImg.src= "css/blueStar.jpg"
   
   
          recipeBlock.remove();

            recipeTitleP.innerText = selectedTitle;
            console.log(recipeTitleP)
           // recieptStrongTitleP = document.querySelector('#title');
        //recieptStrongTitleP.innerText = selectedTitle;

            const ingredientsLeft = document.querySelector("#id-ingredients");
            ingredientsLeft.textContent = recipeObject["ingredients"];
            
    
           //<p id="ingredients"><span><strong>Ingredients: </strong></span>
             const directionsTitleH2 = document.createElement('h2');
             directionsTitleH2.classList['bold'];
             directionsTitleH2.innerText ='Title';

             oneRecipeBlock.append(directionsTitleH2,selectedTitle);
          
            const directionsRight = document.querySelector("#id-directions");
            directionsRight.textContent = recipeObject["directions"];
         
        
            const recipeIngredients = document.createElement('ul');

            console.log(recipeObject.ingredients)
            recipeObject.ingredients.forEach((ingredient)=> {
console.log(recipeIngredients);
            const ingredientLi =document.createElement('li');
            ingredientLi.innerText= ingredient;
            recipeIngredients.append(ingredientLi);    

            })

            oneRecipeBlock.append(brNewLine,directionsRight,recipeIngredients);



            //recipeIngredients.textContent = recipeObject.ingredients


            oneRecipeBlock.append(recipeIngredients)
           
    
            //oneRecipeBlock.append(recipeDirections)    
            //const recipeTagNames = document.querySelector('#id-directions')
            // recipeBlock.append(recipeTagNames)

        })
      // recipeBlock.append(recipeTitles)
    })
})
}





/*
const recipeTitles = document.querySelector('#title')
recipeTitles.textContent = recipeObject.title
*/