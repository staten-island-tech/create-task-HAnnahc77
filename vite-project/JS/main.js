import "../CSS/style.css";
import { recipes } from "./selectors.js";
import { DOMSelectors } from "./selectors.js";

function insertCards(recipe) {
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 id="card-header" class="padding">${recipe.name}</h2>
      <img src="${recipe.image}" alt="Album Image" class="padding">
      <h3 class="padding">${recipe.genre}</h3>
      <p class="padding">$${recipe.ingredients}</p>
    </div>`
  );
}

insertCards(recipe);

insertCards();
