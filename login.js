const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

// Dohvat JSON stringa iz localStorage i pretvaranje u objekt

var storedData = localStorage.getItem("data");
var ucitaniKorisnik = JSON.parse(storedData);

console.log(ucitaniKorisnik);
console.log(username.value + " " + password.value);

const data = {
  email: "halilsacirovic03@gmail.com",
  password: "halil123",
};

loginbtn.addEventListener("click", () => {
  console.log(username.value + " " + password.value);
  console.log(ucitaniKorisnik.demail + " " + ucitaniKorisnik.dpassword);
  if (
    ucitaniKorisnik.email === username.value &&
    ucitaniKorisnik.password === password.value
  ) {
    window.location.href = "index.html";
  } else {
    const labelalert = document.getElementById("labelalert");
    labelalert.textContent =
      "Nepravilan unos email-a ili sifre.Pokusajte ponovo";
    labelalert.style = "color:red";
  }
});
