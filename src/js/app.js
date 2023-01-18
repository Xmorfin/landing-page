"use strict";

// Selecting manipulations
const modal = document.querySelector(".modal--bg");
const overlay = document.querySelector(".overlay--bg");

// Button
const btnCloseModal = document.querySelector(".close--modal");

// /////////////////////////////////////////////////
// End Selecting manipulations
// /////////////////////////////////////////////////

// Starting conditions
const closeModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
