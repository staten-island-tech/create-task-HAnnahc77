import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

const favoriteRecipes = [];

function insertCards(recipe) {
  let starSrc = "/whitestar.png";
  for (let i = 0; i < favoriteRecipes.length; i++) {
    if (favoriteRecipes[i].name === recipe.name) {
      starSrc = "/yellowstar.png"; 
      break;
    }
  }

  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-name="${recipe.name}">
      <h2 id="card-header">${recipe.name}</h2>
      <img src="${recipe.image}" alt="picture of ${recipe.name}">
      <h3>${recipe.genre}</h3>
      <button class="viewDetailsButton">View details</button> 
      <div class="star"></div>
      <img class="starimg" src="${starSrc}" alt="Star, ${starSrc === '/yellowstar.png' ? 'favorited' : 'not favorited'}">
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

function getRecipeFromCard(card) {
  const recipeName = card.getAttribute("data-name");
  for (let i = 0; i < recipes.length; i++) {
    if (recipes[i].name === recipeName) {
      return recipes[i];
    }
  }
  return '';
}



function viewInfo() {
  DOMSelectors.spacing.addEventListener("click", function (event) {
    if (event.target.classList.contains("viewDetailsButton")) {
      const card = event.target.closest(".card");  
      const recipe = getRecipeFromCard(card);  
      
      DOMSelectors.spacing.innerHTML = '';
      DOMSelectors.info.innerHTML = '';
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
         DOMSelectors.info.innerHTML = '';
        viewCards();
      });
    }
  });
}


function handleStarClick() {
  DOMSelectors.spacing.addEventListener("click", function (event) { 
    const stars = DOMSelectors.spacing.querySelectorAll(".starimg");

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      const card = star.closest(".card"); 
      const recipe = getRecipeFromCard(card); 
      if (event.target === star) {
        if (star.src.includes("whitestar.png")) {
          star.src = "/yellowstar.png";
          if (!favoriteRecipes.includes(recipe)) {
            favoriteRecipes.push(recipe);
          }
        } 
        else {
          star.src = "/whitestar.png";
          favoriteRecipes = favoriteRecipes.filter((r) => r.name !== recipe.name);
        }
      }
    }
  });
}

function displayFavorites() {
  DOMSelectors.favoriteButton.addEventListener("click", function () {
    DOMSelectors.spacing.innerHTML = '';
    DOMSelectors.info.innerHTML = '';
    favoriteRecipes.forEach((recipe) => {
      insertCards(recipe);
    });
  });
}

function displayAll() {
  DOMSelectors.allButton.addEventListener("click", function() {
    DOMSelectors.spacing.innerHTML = '';
    DOMSelectors.info.innerHTML = '';
    recipes.forEach((recipe) => {
      insertCards(recipe);
    });
  });
}


viewCards();
viewInfo();
handleStarClick();
displayFavorites();
displayAll();


