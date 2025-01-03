import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

function insertCards(recipe) {
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-name="${recipe.name}">
<h2 id="card-header">${recipe.name}</h2>
<img src="${recipe.image}" alt="picture of ${recipe.name}">
<h3>${recipe.genre}</h3>
<button class="viewDetailsButton"> View details </button>
</div>`
  );
}

function viewCards() {
  recipes.forEach((recipe) => insertCards(recipe));
}

function viewInfo() {
  recipes.forEach((recipe) => {
    const targetedButton = DOMSelectors.spacing.querySelector(
      `[data-name="${recipe.name}"] .viewDetailsButton`
    );

    targetedButton.addEventListener("click", function () {
      DOMSelectors.spacing.innerHTML = "";
      DOMSelectors.spacing.insertAdjacentHTML(
        "beforeend",
        `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="picture of ${recipe.name}">
        <h3>${recipe.genre}</h3>
        <ul>${recipe.ingredients
          .map((ingredient) => `<li>${ingredient}</li>`)
          .join("")}</ul>
        <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <button class="goBackButton">Go Back</button>
        `
      );
    });
  });
}

viewCards();
viewInfo();

//this is for go back button   DOMSelectors.goBackButton.addEventListener("click", function () {viewCards();})
