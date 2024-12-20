import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

function insertCards(recipe) {
  const cardHTML = `
    <div class="card" data-name="${recipe.name}">
      <h2 id="card-header">${recipe.name}</h2>
      <img src="${recipe.image}" alt="picture of ${recipe.name}">
      <h3>${recipe.genre}</h3>
      <button class="view-details"> View details </button>
    </div>`;
  DOMSelectors.spacing.insertAdjacentHTML("beforeend", cardHTML);
}

function viewInfo(event) {
  if (event.target && event.target.classList.contains("view-details")) {
    const card = event.target.closest(".card");
    let recipeName = card.querySelector("h2").textContent;

    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipeName) {
        recipe = recipes[i];
        break;
      }
    }

    if (recipe) {
      let ingredientsList = "";
      for (let i = 0; i < recipe.ingredients.length; i++) {
        ingredientsList += `<li>${recipe.ingredients[i]}</li>`;
      }

      let stepsList = "";
      for (let i = 0; i < recipe.steps.length; i++) {
        stepsList += `<li>${recipe.steps[i]}</li>`;
      }

      DOMSelectors.spacing.innerHTML = `
        <div class="card">
          <h2 id="card-header">${recipe.name}</h2>
          <img src="${recipe.image}" alt="Album Image">
          <h3>${recipe.genre}</h3>
          <h4>Ingredients:</h4>
          <ul>${ingredientsList}</ul>
          <h4>Steps:</h4>
          <ol>${stepsList}</ol>
          <button class="go-back">Go back</button>
        </div>
      `;

      const goBackButton = DOMSelectors.spacing.querySelector(".go-back");
      goBackButton.addEventListener("click", function () {
        DOMSelectors.spacing.innerHTML = "";
        recipes.forEach((recipe) => insertCards(recipe));
        attachViewInfoListeners();
      });
    }
  }
}

function attachViewInfoListeners() {
  const viewDetailsButtons = document.querySelectorAll(".view-details");
  for (let i = 0; i < viewDetailsButtons.length; i++) {
    viewDetailsButtons[i].addEventListener("click", viewInfo);
  }
}

recipes.forEach((recipe) => insertCards(recipe));
attachViewInfoListeners();
