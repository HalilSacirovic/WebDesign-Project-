const create_account = document.getElementById("create-acc");

const namee = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementById("error-message");

let counter = 0;

console.log(error_message);
create_account.addEventListener("click", function () {
  const data = {
    demail: email.value,
    dpassword: password.value,
  };
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
  } else {
    localStorage.setItem(`data`, JSON.stringify(data));
    window.location.href = "login.html";
  }

  // OVDE KRAJ
});

const api = () => {
  fetch(
    "https://api.bestbuy.com/v1/products?format=json&apiKey=iJGg8GCzIN4aLfZSVfnqNTAX"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("podaci => ", data);
    })
    .catch((error) => {
      console.log(error, "error");
    });
};

api();
