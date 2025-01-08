import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

const favoriteRecipes = [];

function insertCards(recipe) {
  let starSrc = "/whitestar.png";
  for (let i = 0; i < favoriteRecipes.length; i++) {
    if (favoriteRecipes[i].name === recipe.name) {
      starSrc = "/yellowstar.png";
    }
  }
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="picture of ${recipe.name}">
      <h3>${recipe.genre}</h3>
      <button class="viewDetailsButton">View details</button>
      <div class="star">
        <img class="starimg" src="${starSrc}" alt="star to toggle favorited or unfavorited recipe">
      </div>
    </div>`
  );
}

function viewCards() {
  DOMSelectors.spacing.innerHTML = "";
  DOMSelectors.info.innerHTML = "";
  recipes.forEach((recipe) => {
    insertCards(recipe);
  });
}

function viewInfo() {
  DOMSelectors.spacing.addEventListener("click", function (event) {
    if (event.target.classList.contains("viewDetailsButton")) {
      const card = event.target.closest(".card");
      const recipeName = card.querySelector("h2").innerText;
      const recipe = recipes.find((r) => r.name === recipeName);

      DOMSelectors.spacing.innerHTML = "";
      DOMSelectors.info.innerHTML = "";
      DOMSelectors.info.insertAdjacentHTML(
        "afterbegin",
        `
          <h2>${recipe.name}</h2>
          <img src="${recipe.image}" alt="picture of ${recipe.name}">
          <h3>${recipe.genre}</h3>
          <h3>Ingredients:</h3>
          <ul>${recipe.ingredients
            .map((ingredient) => `<li>${ingredient}</li>`)
            .join("")}</ul>
          <h3>Steps:</h3>
          <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <button class="goBackButton">Go Back</button>
        `
      );

      const goBackButton = DOMSelectors.info.querySelector(".goBackButton");
      goBackButton.addEventListener("click", function () {
        DOMSelectors.spacing.innerHTML = "";
        DOMSelectors.info.innerHTML = "";
        viewCards();
      });
    }
  });
}

function handleStarClick() {
  DOMSelectors.spacing.addEventListener("click", function (event) {
    if (event.target.classList.contains("starimg")) {
      const star = event.target;
      const card = star.closest(".card");
      const recipeName = card.querySelector("h2").innerText;
      const recipe = recipes.find((r) => r.name === recipeName);
      const isWhiteStar = star.getAttribute("src").includes("whitestar.png");

      if (isWhiteStar) {
        star.setAttribute("src", "/yellowstar.png");

        let isInFavorites = false;
        for (let i = 0; i < favoriteRecipes.length; i++) {
          if (favoriteRecipes[i].name === recipe.name) {
            isInFavorites = true;
          }
        }

        if (!isInFavorites) {
          favoriteRecipes.push(recipe);
        }
      } else {
        star.setAttribute("src", "/whitestar.png");

        let indexToRemove = -1;
        for (let i = 0; i < favoriteRecipes.length; i++) {
          if (favoriteRecipes[i].name === recipe.name) {
            indexToRemove = i;
          }
        }

        if (indexToRemove !== -1) {
          favoriteRecipes.splice(indexToRemove, 1);
        }
      }
    }
  });
}

function displayFavorites() {
  DOMSelectors.favoriteButton.addEventListener("click", function () {
    DOMSelectors.spacing.innerHTML = "";
    DOMSelectors.info.innerHTML = "";
    favoriteRecipes.forEach((recipe) => {
      insertCards(recipe);
    });
  });
}

function displayAll() {
  DOMSelectors.allButton.addEventListener("click", function () {
    viewCards();
  });
}

viewCards();
viewInfo();
handleStarClick();
displayFavorites();
displayAll();
