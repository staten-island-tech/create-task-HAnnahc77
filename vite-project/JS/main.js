import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

function insertCards(recipe) {
  const cardHTML = `
    <div class="card" data-name="${recipe.name}">
      <h2 id="card-header" class="padding">${recipe.name}</h2>
      <img src="${recipe.image}" alt="Album Image" class="padding">
      <h3 class="padding">${recipe.genre}</h3>
      <button class="view-details"> View details </button>
    </div>
  `;
  DOMSelectors.spacing.insertAdjacentHTML("beforeend", cardHTML);
}

function viewInfo(event) {
  if (event.target && event.target.classList.contains("view-details")) {
    const card = event.target.closest(".card");
    const recipeName = card.getAttribute("data-name");
    const recipe = recipes.find((r) => r.name === recipeName);

    if (recipe) {
      DOMSelectors.spacing.innerHTML = `
        <div class="card">
          <h2 id="card-header" class="padding">${recipe.name}</h2>
          <img src="${recipe.image}" alt="Album Image" class="padding">
          <h3 class="padding">${recipe.genre}</h3>
          <h4>Ingredients:</h4>
          <ul>
            ${recipe.ingredients
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join("")}
          </ul>
          <h4>Steps:</h4>
          <ol>
            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
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
  DOMSelectors.spacing.addEventListener("click", viewInfo);
}

recipes.forEach((recipe) => insertCards(recipe));
attachViewInfoListeners();
