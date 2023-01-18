"use strict";

// Selecting manipulations
const modal = document.querySelector(".modal--bg");
const overlay = document.querySelector(".overlay--bg");

const totalEl = document.querySelector(".total--barang");
const stokSisaEl = document.querySelector(".stok--sisa");

// Button Section 1
const btnCloseModal = document.querySelector(".close--modal");
const btnShowModal = document.querySelectorAll(".show--modal");
const btnBg = document.querySelectorAll(".btn--bg");

// Button Section 3
const btnMin = document.querySelector(".btn--min");
const btnPlus = document.querySelector(".btn--plus");

// //////////////////////////////////////////////////////////////////
// End Selecting manipulation
// ////////////////////////////////////////////////////////////////

// Starting Conditions
let totalBarang = 1;
let stokSisa = 10;

let totalStok = stokSisa - totalBarang;

// Stok Sisa
stokSisaEl.textContent = stokSisa;

// Button Plus
btnPlus.addEventListener("click", function () {
  if (stokSisa > totalBarang) {
    if (totalBarang != stokSisa) {
      totalBarang++;
      // stokSisa--;
      totalEl.textContent = totalBarang;
      console.log(totalBarang, stokSisa);
    }
  }
});

// Button Min
btnMin.addEventListener("click", function () {
  if (totalBarang == 1) {
    totalBarang = 1;
    totalEl.textContent = totalBarang;
    console.log(totalBarang);
  } else if (totalBarang <= stokSisa) {
    totalBarang--;
    totalEl.textContent = totalBarang;
    console.log(totalBarang, stokSisa);
  }
});

// Show modal
const openModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}

// Close Modal
const closeModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
