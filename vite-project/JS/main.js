import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

const favoriteRecipes = [

];

function insertCards(recipe) {
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-name="${recipe.name}">
      <h2 id="card-header">${recipe.name}</h2>
      <img src="${recipe.image}" alt="picture of ${recipe.name}">
      <h3>${recipe.genre}</h3>
      <button class="viewDetailsButton">View details</button> 
      <div class="star"></div>
      <img class="starimg" src="/whitestar.png" alt="Star, not favorited">
    </div>`
  );
}

function viewCards() {
  DOMSelectors.spacing.innerHTML = '';
  DOMSelectors.info.innerHTML = '';
  recipes.forEach((recipe) => {
    insertCards(recipe);
  });
}


function viewInfo() {
  DOMSelectors.spacing.addEventListener("click", function (event) {
    if (event.target.classList.contains("viewDetailsButton")) {
      const recipeName = event.target.closest(".card").getAttribute("data-name");
      const recipe = recipes.find((recipe) => recipe.name === recipeName);
      DOMSelectors.spacing.innerHTML = ''
      DOMSelectors.info.innerHTML = ''
      DOMSelectors.info.insertAdjacentHTML(
        "afterbegin",
        `
          <h2>${recipe.name}</h2>
          <img src="${recipe.image}" alt="picture of ${recipe.name}">
          <h3>${recipe.genre}</h3>
          <h3>Ingredients:</h3>
          <ul>${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}</ul>
          <h3>Steps:</h3>
          <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <button class="goBackButton">Go Back</button>
        `
      );

      const goBackButton = DOMSelectors.info.querySelector('.goBackButton');
      goBackButton.addEventListener('click', function () {
        DOMSelectors.spacing.innerHTML = '';
        viewCards();
      });
    }
  });
}

function handleStarClick() {
  DOMSelectors.spacing.addEventListener("click", function (event) {
    const stars = DOMSelectors.spacing.querySelectorAll(".starimg");
    
    for (let i = 0; i < stars.length; i++) {
      if (event.target === stars[i]) {
        const card = event.target.closest(".card");
        const recipeName = card.getAttribute("data-name");
        const recipe = recipes.find((recipe) => recipe.name === recipeName);
        
        if (event.target.src.includes("whitestar.png")) {
          event.target.src = "/yellowstar.png";
          if (!favoriteRecipes.includes(recipe)) {
            favoriteRecipes.push(recipe);
          }
        } else {
          event.target.src = "/whitestar.png";
          favoriteRecipes = favoriteRecipes.filter((r) => r.name !== recipeName);
        }
      }
    }
  });
}

viewCards();
viewInfo();
handleStarClick();


/*

function displayFavorites() {
DOMSelectors.favoriteButton.addEventListener("click", function () {
  
    const favoriteRecipes = recipes.filter((recipe) => recipe.genre.includes("Pop"));

    DOMSelectors.spacing.innerHTML = '';

    popAlbums.forEach((album) => {
      insertCards(album);
    });
  });
};

*/
