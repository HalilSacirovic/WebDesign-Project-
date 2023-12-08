const email = document.getElementById("email");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

// Dohvat JSON stringa iz localStorage i pretvaranje u objekt

var storedData = localStorage.getItem("data");

var ucitaniKorisnik = JSON.parse(storedData);

console.log("ucitani korisnik", ucitaniKorisnik);
console.log(email.value + " " + password.value);


const data = {
  email: ucitaniKorisnik.demail,
  password: ucitaniKorisnik.dpassword,
};

console.log(data);
loginbtn.addEventListener("click", () => {
  // console.log("input values => ", username.value + " " + password.value);
  // console.log(
  //   "ucitani korisnik =>",
  //   ucitaniKorisnik.demail + " " + ucitaniKorisnik.dpassword
  // );

//   console.log(username.value.length, "  username duzina ");
// console.log("password duzina " , password.value.length);

// console.log("ucitani korisnik email", ucitaniKorisnik.demail.length);
// console.log("ucitani korisnik password ", ucitaniKorisnik.dpassword.length);



  // console.log("DATA", data.username + " DATAPASSWORD " + data.password);

  // if (data.email === email.value) {
  //   alert("radi");
  // }
  if (
    email.value== data.email &&
    password.value == data.password
  ) {
    window.location.href = "index.html";
  }
});
