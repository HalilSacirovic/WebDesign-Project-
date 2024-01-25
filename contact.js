const login = document.getElementById("login");
const contact = document.getElementById("contact");
const user = localStorage.getItem("user");
const cartbtn = document.getElementById("cart");

const loginclass = document.querySelectorAll(".login");

console.log(loginclass);

if (user) {
  cartbtn.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
  contact.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
  for (let i = 0; i < loginclass.length; i++) {
    loginclass[i].textContent = "Logout";
    loginclass[i].addEventListener("click", function () {
      localStorage.removeItem("user");
      loginclass[i].href = "index.html";
    });
  }
} else {
  cartbtn.addEventListener("click", () => {
    alert("You are not logged so you dont have access to this page");
  });
  contact.addEventListener("click", () => {
    alert("You are not logged so you dont have access to this page");
  });
  loginclass[0].href = "login.html";
  loginclass[1].href = "login.html";
}

document.getElementById("submitbutton").addEventListener("click", function () {
  const name_error = document.getElementById("name");
  const lastnamename_error = document.getElementById("lastname");
  const email_error = document.getElementById("email");
  const subject_error = document.getElementById("subject");
  const message_error = document.getElementById("message");

  const name_label = document.getElementById("name-error");
  const lastname_label = document.getElementById("lastname-error");
  const email_label = document.getElementById("email-error");
  const subject_label = document.getElementById("subject-error");
  const message_label = document.getElementById("message-error");

  if (
    (name_error.value === "" ||
      name_error.value.length > 15 ||
      name_error.value.length < 3) &&
    (lastnamename_error.value === "" ||
      lastnamename_error.value.length < 4 ||
      lastnamename_error.value.length > 20) &&
    (email_error.value === "" ||
      !email_error.value.includes("@") ||
      email_error.value.length < 5 ||
      email_error.value.length > 30) &&
    (subject_error.value === "" ||
      subject_error.value.length < 3 ||
      subject_error.value.length > 20) &&
    message_error.value === ""
  ) {
    name_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    name_error.style = "border:3px solid red !important;";
    lastnamename_error.style = "border:3px solid red !important;";
    email_error.style = "border:3px solid red !important;";
    subject_error.style = "border:3px solid red !important;";
    message_error.style = "border:3px solid red !important;";
    lastname_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    email_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    subject_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    message_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
  } else if (
    name_error.value === "" ||
    name_error.value.length > 15 ||
    name_error.value.length < 3
  ) {
    name_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    name_error.style = "border:3px solid red !important;";
  } else if (
    lastnamename_error.value === "" ||
    lastnamename_error.value.length < 4 ||
    lastnamename_error.value.length > 20
  ) {
    lastname_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    lastnamename_error.style = "border:3px solid red !important;";
  } else if (
    email_error.value === "" ||
    !email_error.value.includes("@") ||
    email_error.value.length < 5 ||
    email_error.length > 30
  ) {
    email_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    email_error.style = "border:3px solid red !important;";
  } else if (
    subject_error.value === "" ||
    subject_error.value.length < 3 ||
    subject_error.value.length > 20
  ) {
    subject_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    subject_error.style = "border:3px solid red !important;";
  } else if (message_error.value === "") {
    message_label.style =
      "display:block;color:red;font-size:18px;font-weight:bold";
    message_error.style = "border:3px solid red !important;";
  }
});
