const body = document.querySelector("body");

const fnLabel = document.querySelector("#fnLabel");
const lnLabel = document.querySelector("#lnLabel");
const eLabel = document.querySelector("#eLabel");
const phLabel = document.querySelector("#phLabel");
const pwLabel = document.querySelector("#pwLabel");
const cpwLabel = document.querySelector("#cpwLabel");

const fnInput = document.querySelector("#firstName");
const lnInput = document.querySelector("#lastName");
const eInput = document.querySelector("#email");
const phInput = document.querySelector("#phone");
const pwInput = document.querySelector("#password");
const cpwInput = document.querySelector("#passwordConfirm");

const button = document.querySelector('[type = "submit"');

button.addEventListener("click", (e) => {
  e.preventDefault();

  //first name
  if (!fnInput.validity.valid && fnInput.value == "") {
    fnLabel.textContent = "Please enter your name";
  }
  if (!fnInput.validity.valid && !fnInput.value == "") {
    fnLabel.textContent = "Please only use letters";
  }
  //last name
  if (!lnInput.validity.valid && lnInput.value == "") {
    lnLabel.textContent = "Please enter your last name";
  }
  if (!lnInput.validity.valid && !lnInput.value == "") {
    lnLabel.textContent = "Please only use letters";
  }

  //email
  if (!eInput.validity.valid && eInput.value == "") {
    eLabel.textContent = "Please enter your email";
  }
  if (!eInput.validity.valid && !eInput.value == "") {
    eLabel.textContent = "Please enter a valid email";
  }

  //phone
  if (!phInput.validity.valid && !phInput.value == "") {
    phLabel.textContent = "Please enter a valid phone";
  }

  //password
  if (!pwInput.validity.valid && pwInput.value == "") {
    pwLabel.textContent = "Please enter your password";
  }
  if (!cpwInput.validity.valid && cpwInput.value == "") {
    cpwLabel.textContent = "Please confirm your password";
  }
  if (!pwInput.validity.valid && pwInput.value != cpwInput.value) {
    cpwLabel.textContent = "Please enter the same password";
  }

  console.log(phInput.validity.valid);
  console.log(pwInput.validity.valid);
  console.log(cpwInput.validity.valid);
  console.log("------------------------");
});
