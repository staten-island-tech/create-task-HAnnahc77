import "../CSS/style.css";
import { DOMSelectors } from "./selectors.js";
import { recipes } from "./selectors.js";

function insertCards(album) {
  DOMSelectors.spacing.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 id="card-header" class="padding">${album.name}</h2>
      <img src="${album.image}" alt="Album Image" class="padding">
      <h3 class="padding">${album.genre}</h3>
      <h3 class="padding">${album.language}</h3>
      <p class="padding">$${album.price}</p>
    </div>`
  );
}

insertCards();
