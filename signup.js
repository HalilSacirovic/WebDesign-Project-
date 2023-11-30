const create_account = document.getElementById("create-acc");

const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementById("error-message");

const data = {
  email: "",
  password: "",
};

console.log(error_message);
create_account.addEventListener("click", function () {
  console.log("email value =>", email.value);
  console.log("password value =>", password.value);

  if (
    !email.value.includes("@") &&
    (password.value.length > 20 || password.value.length < 5)
  ) {
    email.style = "border:2px solid red";
    password.style = "border:2px solid red";
    console.log("Treci uslov");
    error_message.classList.remove("hidden");
    error_message.textContent =
      "Nepravilan unos email-a i sifre.Probajte ponovo";
  } else if (password.value.length > 20 || password.value.length < 5) {
    password.style = "border:2px solid red";

    console.log("DRUGI uslov");
    error_message.classList.remove("hidden");
    error_message.textContent = "Nepravilan unos  sifre.Probajte ponovo";
  } else if (!email.value.includes("@")) {
    email.style = "border:2px solid red";
    console.log("Prvi uslov");
    error_message.classList.remove("hidden");
    error_message.textContent = "Nepravilan unos email-a.Probajte ponovo ";
  }
});
