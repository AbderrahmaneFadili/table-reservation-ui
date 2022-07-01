/* ===== get elements  =====  */
const btnIncrement = document.querySelector("#btn__increment");
const btnDecrement = document.querySelector("#btn__decrement");
const quantityNumber = document.querySelector(".quantity__number");
const tableReservation = document.querySelector(".table-reservation");
const body = document.querySelector("body");

let personsNumber = parseInt(quantityNumber.textContent);

btnIncrement.addEventListener("click", (event) => {
  if (personsNumber < 4) {
    personsNumber++;
    quantityNumber.textContent = personsNumber;
  }
});

btnIncrement.addEventListener("mousedown", (event) => {
  tableReservation.classList.remove("shrink");
  removeBackgroundColor();
  window.requestAnimationFrame(() => {
    tableReservation.classList.add("shrink");
    if (personsNumber < 4) {
      setBackgroundColor(personsNumber);
    }
  });
});

btnDecrement.addEventListener("mousedown", (event) => {
  tableReservation.classList.remove("shrink");
  removeBackgroundColor();
  window.requestAnimationFrame(() => {
    tableReservation.classList.add("shrink");
    if (personsNumber > 0) {
      setBackgroundColor(personsNumber);
    }
  });
});

btnDecrement.addEventListener("click", (event) => {
  if (personsNumber > 0) {
    personsNumber--;
    quantityNumber.textContent = personsNumber;
  }
});

/* set background color */
function setBackgroundColor(number) {
  switch (number) {
    case 1:
      body.className = "set-blue";
      break;
    case 2:
      body.className = "set-red";
      break;
    case 3:
      body.className = "set-green";
      break;
    case 4:
      body.className = "set-mauve";
      break;
    default:
      break;
  }
}

function removeBackgroundColor() {
  body.className = "";
}
