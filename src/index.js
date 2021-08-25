document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const recipeObject = {"title":  "working"};
    const recipeBlock = document.querySelector('#recipe-block')
    const starImg = document.createElement('img');
    const recipeTitleP= document.createElement('p');
    recipeTitleP.innerText = recipeObject.title;
    starImg.src= "css/pinkStar.jpg";
    starImg.classList= ["favoriteStar"]
    recipeBlock.append(starImg, recipeTitleP)
    recipeBlock.appendChild(recipeTitleP)
    const titleDiv= document.querySelector('.margin-top')
    console.log(recipeBlock)= recipeObject[title];
  


})

// favoriteImg.src =selectedStar;
// favoriteDiv.classList = ["favoriteStar"]
// favoriteDiv.append(favoriteImg);
// recipeBlock.append(favoriteDiv);