const username = document.getElementById("username");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbutton");

const data = {
  email: "halilsacirovic03@gmail.com",
  password: "halil123",
};

loginbtn.addEventListener("click", () => {
  if (data.email === username.value && data.password === password.value) {
    window.location.href = "index.html";
  } else {
    const labelalert = document.getElementById("labelalert");
    labelalert.textContent =
      "Nepravilan unos email-a ili sifre.Pokusajte ponovo";
    labelalert.style = "color:red";
  }
});