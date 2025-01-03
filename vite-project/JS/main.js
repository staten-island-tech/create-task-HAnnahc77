import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

function insertCards(recipe) {
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforebegin",
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

viewCards();
viewInfo();
