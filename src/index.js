document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
accessIngredientsDirections();

});



//Will need access to a buttonDiv parameter
function accessIngredientsDirections(){
    const bodyElement = document.body;
    const titleDiv= document.querySelector('.btn')
    //console.log(titleDiv)
    const favoriteDiv = document.createElement('div');
    const favoriteImg = document.createElement('img');
    favoriteDiv.id - "starContainer"
    //const starWhite = "css/pinkStar.jpg";
    const selectedStar ="css/blueStar.jpg"; 
    selectedStar.classList = ["favorite"]
    //favoriteImg.src = starWhite;
    favoriteImg.src =selectedStar;
    favoriteDiv.id = "favoriteStar";
    favoriteDiv.classList = ["favorite"]
    favoriteDiv.append(favoriteImg);
    titleDiv.append(favoriteDiv);


}