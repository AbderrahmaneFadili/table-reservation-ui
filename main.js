/* ===== get elements  =====  */
const btnIncrement = document.querySelector("#btn__increment");
const btnDecrement = document.querySelector("#btn__decrement");
const quantityNumber = document.querySelector(".quantity__number");

btnIncrement.addEventListener("click", (event) => {
  let personsNumber = parseInt(quantityNumber.textContent);
  if (personsNumber < 4) {
    personsNumber++;
    quantityNumber.textContent = personsNumber;
  }
});

btnDecrement.addEventListener("click", (event) => {
  let personsNumber = parseInt(quantityNumber.textContent);

  if (personsNumber > 0) {
    personsNumber--;
    quantityNumber.textContent = personsNumber;
  }
});
