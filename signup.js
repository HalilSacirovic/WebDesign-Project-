const create_account = document.getElementById("create-acc");

const namee = document.getElementById("name");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error_message = document.getElementById("error-message");

const inputs = document.querySelectorAll(".is_valid");

create_account.addEventListener("click", function () {
  const data = {
    username: namee.value,
    password: password.value,
  };




const baseUrl = "http://softinz20233-001-site1.gtempurl.com/api/users";


fetch(baseUrl,{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
.then((res)=>{
  return res.json()})
.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err)})

  // console.log("email value =>", email.value);
  // console.log("password value =>", password.value);

  // inputs.forEach((input) => {
  //   input.addEventListener("focus", function () {
  //     console.log("Input je aktivan");
  //     // Dodajte željeni kod koji želite izvršiti kada je input aktivan
  //   });
  // });

  // if (
  //   !email.value.includes("@") &&
  //   (password.value.length > 20 || password.value.length < 5)
  // ) {
  //   email.style = "border:2px solid red";
  //   password.style = "border:2px solid red";
  //   console.log("Treci uslov");
  //   error_message.classList.remove("hidden");
  //   error_message.textContent =
  //     "Nepravilan unos email-a i sifre.Probajte ponovo";
  // } else if (password.value.length > 20 || password.value.length < 5) {
  //   password.style = "border:2px solid red";

  //   console.log("DRUGI uslov");
  //   error_message.classList.remove("hidden");
  //   error_message.textContent = "Nepravilan unos  sifre.Probajte ponovo";
  // } else if (!email.value.includes("@")) {
  //   email.style = "border:2px solid red";
  //   console.log("Prvi uslov");
  //   error_message.classList.remove("hidden");
  //   error_message.textContent = "Nepravilan unos email-a.Probajte ponovo ";
  // } else {
  //   localStorage.setItem(`data`, JSON.stringify(data));
  //   window.location.href = "login.html";
  // }

  // OVDE KRAJ
});


