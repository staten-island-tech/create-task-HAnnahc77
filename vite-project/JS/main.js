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
  viewInfo();
}

function viewInfo() {
  const viewDetailButtons = DOMSelectors.spacing.querySelectorAll(".viewDetailsButton");
  viewDetailButtons.forEach((viewDetailsButton) => {
    viewDetailsButton.addEventListener("click", function () {
      const card = viewDetailsButton.closest(".card");
      const recipe = recipes.find((r) => r.name === card.querySelector("h2").innerText);

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
        handleStarClick();
      });
    });
  });
}

function handleStarClick() {
  const starButtons = DOMSelectors.spacing.querySelectorAll(".starimg");

  starButtons.forEach((starButton) => {
    starButton.addEventListener("click", function (event) {
      const star = event.target;
      const card = star.closest(".card");
      const recipe = recipes.find((r) => r.name === card.querySelector("h2").innerText);
      const isWhiteStar = star.getAttribute("src") === "/whitestar.png";

      if (isWhiteStar) {
        star.setAttribute("src", "/yellowstar.png");
        if (!favoriteRecipes.some((r) => r.name === recipe.name)) {
          favoriteRecipes.push(recipe);
        }
      } else {
        star.setAttribute("src", "/whitestar.png");
        const index = favoriteRecipes.findIndex((r) => r.name === recipe.name);
        if (index !== -1) {
          favoriteRecipes.splice(index, 1);
        }
      }
    });
  });
}

function displayFavorites() {
  DOMSelectors.favoriteButton.addEventListener("click", function () {
    DOMSelectors.spacing.innerHTML = "";
    DOMSelectors.info.innerHTML = "";
    favoriteRecipes.forEach((recipe) => {
      insertCards(recipe);
    });
    handleStarClick();
  });
}

function displayAll() {
  DOMSelectors.allButton.addEventListener("click", function () {
    viewCards();
    handleStarClick();
  });
}

viewCards();
viewInfo();
handleStarClick();
displayFavorites();
displayAll();
