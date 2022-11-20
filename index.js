const formControml = document.getElementById("form-control");
const inputName = document.getElementById("input-name");
const inputNumber = document.getElementById("input-number");
const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvvInput = document.querySelector(".cvv-input");
const cardMonth = document.querySelector(".card-month");
const cardYear = document.querySelector(".card-year");
const cardCvv = document.querySelector(".card-cvv");
const expError = document.getElementById("exp-error");
const formContainer = document.querySelector(".form-container");
const completeSection = document.querySelector(".complete-section");
const submitBtn = document.querySelector(".submit-btn");

/*================================
------ADD INPUT VALUE IN CARD-----
---ERROR WHEN WRONG KEY TYPE------
================================== */

inputName.addEventListener("keyup", () => {
  cardName.textContent = inputName.value;
  if (!inputName.value.match(str)) {
    inputName.nextElementSibling.textContent = "Letters only";
    inputName.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    inputName.nextElementSibling.textContent = "";
    inputName.style.border = "";
  }
});

inputNumber.addEventListener("keyup", (e) => {
  cardNumber.textContent = inputNumber.value;
  let space = inputNumber.value.match(/.{1,4}/g);
  cardNumber.textContent = space.join(" ");
  if (!inputNumber.value.match(validRegex)) {
    inputNumber.nextElementSibling.textContent = "Numbers Only";
    inputNumber.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    inputNumber.nextElementSibling.textContent = "";
    inputNumber.style.border = "";
  }
});

monthInput.addEventListener("keyup", () => {
  cardMonth.textContent = monthInput.value;
  if (!monthInput.value.match(validRegex)) {
    expError.textContent = "Numbers only";
    monthInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    expError.textContent = "";
    monthInput.style.border = "";
  }
});

yearInput.addEventListener("keyup", () => {
  cardYear.textContent = yearInput.value;
  if (!yearInput.value.match(validRegex)) {
    expError.textContent = "Numbers only";
    yearInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    expError.textContent = "";
    yearInput.style.border = "";
  }
});

cvvInput.addEventListener("keyup", () => {
  cardCvv.textContent = cvvInput.value;
  if (!cvvInput.value.match(validRegex)) {
    cvvInput.nextElementSibling.textContent = "Numbers only";
    cvvInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    cvvInput.nextElementSibling.textContent = "";
    cvvInput.style.border = "";
  }
});

let validRegex = /^[0-9]+$/;
let str = /^[A-Za-z\s]+$/;

/*=========================
------FORM CONTROL---------
=========================== */

formControml.addEventListener("submit", (e) => {
  e.preventDefault();

  /*=========================
------SHOW COMPLETE MESSAGE-----
=========================== */

  if (
    inputNumber.value.length == 16 &&
    inputName.value.match(str) &&
    cvvInput.value.length == 3 &&
    monthInput.value.length != 0 &&
    yearInput.value.length != 0 &&
    inputNumber.value.match(validRegex) &&
    cvvInput.value.match(validRegex)
  ) {
    completeSection.style.display = "flex";
    formContainer.style.display = "none";
  }

  /*----NAME INPUT ERROR MESSAGE---- */

  if (inputName.value === "") {
    inputName.nextElementSibling.textContent = "can't be blank";
    inputName.style.border = "2px solid hsl(0, 100%, 66%)";
  } else if (!inputName.value.match(str)) {
    inputName.nextElementSibling.textContent = "wrong format, latters only";
    inputName.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    inputName.nextElementSibling.textContent = "";
    inputName.style.border = "";
  }

  /*----NUMBER INPUT ERROR MESSAGE---- */

  if (inputNumber.value === "") {
    inputNumber.nextElementSibling.textContent = "can't be blank";
    inputNumber.style.border = "2px solid hsl(0, 100%, 66%)";
  } else if (!inputNumber.value.match(validRegex)) {
    inputNumber.nextElementSibling.textContent = "wrong format, numbers only";
    inputNumber.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    inputNumber.nextElementSibling.textContent = "";
    inputNumber.style.border = "";
  }

  /*----MONTH INPUT ERROR MESSAGE---- */

  if (monthInput.value === "") {
    expError.textContent = "can't be blank";
    monthInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else if (!monthInput.value.match(validRegex)) {
    expError.textContent = "wrong format";
    monthInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    expError.textContent = "";
    monthInput.style.border = "";
  }

  /*----YEAR INPUT ERROR MESSAGE---- */

  if (yearInput.value === "") {
    expError.textContent = "can't be blank";
    yearInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else if (!yearInput.value.match(validRegex)) {
    expError.textContent = "wrong format";
    yearInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    expError.textContent = "";
    yearInput.style.border = "";
  }

  /*----CVV INPUT ERROR MESSAGE---- */

  if (cvvInput.value === "") {
    cvvInput.nextElementSibling.textContent = "can't be blank";
    cvvInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else if (!cvvInput.value.match(validRegex)) {
    cvvInput.nextElementSibling.textContent = "wrong format, numbers only";
    cvvInput.style.border = "2px solid hsl(0, 100%, 66%)";
  } else {
    cvvInput.nextElementSibling.textContent = "";
    cvvInput.style.border = "";
  }
});

/*==============================
------HIDE COMPLETE MESSAGE-----
================================ */

document.querySelector(".btn-2").addEventListener("click", () => {
  completeSection.style.display = "none";
  formContainer.style.display = "block";
  cardCvv.textContent = "000";
  cardNumber.textContent = "0000 0000 0000 0000";
  cardName.textContent = "jane appleseed";
  cardYear.textContent = "00";
  cardMonth.textContent = "00";
  formControml.reset();
});
