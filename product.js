let storedProduct = localStorage.getItem("product1");
var renderedProduct = JSON.parse(storedProduct);
const user = localStorage.getItem("user");
let storedCart = localStorage.getItem("cartarray");
var renderedCart = JSON.parse(storedCart) || [];

var cart = [];

if (storedCart) {
  cart = renderedCart;
}

const add_to_cart = document.querySelectorAll(".add_to_cart");
const add_to_cartAA = document.querySelector(".test-button");

console.log(add_to_cart);

// console.log(localStorage.length === 0);

add_to_cart.forEach((button) => {
  if (user) {
    if (localStorage.length !== 0) {
      for (var i = 0; i < renderedCart.length; i++) {
        if (renderedCart[i].sku === renderedProduct.sku) {
          button.style.background = "rgb(255, 115, 0)";
          button.disabled = true;
          console.log("JESTE");
        }
      }
    }
  }
});

add_to_cart.forEach((button) => {
  button.addEventListener("click", function () {
    if (user) {
      if (!cart.some((item) => item.sku === renderedProduct.sku)) {
        button.style.background = "rgb(255, 115, 0)";
        button.textContent = "Added in a cart";

        cart.push(renderedProduct);
        localStorage.setItem("cartarray", JSON.stringify(cart));

        alert("Successfully added in Cart");
      }
    } else {
      alert("Niste ulogovani");
    }
  });
});

// console.log(storedProduct);
console.log(renderedProduct);

const prod_images = document.querySelector(".prod-images");
const prod_lg_img = document.querySelector(".prod-lg-img");
const header = document.querySelector(".header-h4");
const header_info = document.querySelector(".header-info");
const header_review = document.querySelector(".header-review");
const prod_price = document.querySelector(".prod-price");
const prod_availability = document.querySelector(".prod-availability");
const pickup_icon = document.querySelector(".pickup-icon");
const pickup_date = document.querySelector(".pickup-date");
const shipping_icon = document.querySelector(".shipping-icon");
const shipping_date = document.querySelector(".shipping-date");
const prod_add_to_cart = document.querySelector(".prod-add-to-cart");

const img_header = document.querySelectorAll(".img-header");
const features_stars = document.querySelectorAll(".features-stars");

const description1 = document.querySelector(".description1");

///////////////////////////////////////////////////////////////////////////////////
const imgsmall = document.createElement("img");
imgsmall.src = renderedProduct.image;
imgsmall.height = "100";

prod_images.appendChild(imgsmall);

const imglarge = document.createElement("img");
imglarge.src = renderedProduct.image;
imglarge.height = "600";
prod_lg_img.appendChild(imglarge);

const h4 = document.createElement("h4");
const p_sku = document.createElement("p");
const p_release = document.createElement("p");
const p_rating = document.createElement("p");

h4.textContent = renderedProduct.name;
p_sku.textContent = "SKU: " + renderedProduct.sku;
p_release.textContent = "Release date: " + renderedProduct.releaseDate;
p_rating.textContent = "Rating: " + renderedProduct.subclass;

header.appendChild(h4);
header_info.appendChild(p_sku);
header_info.appendChild(p_release);
header_info.appendChild(p_rating);

const span = document.createElement("span");
span.textContent = `${renderedProduct.customerReviewAverage}  (${renderedProduct.customerReviewCount} reviews)`;
header_review.appendChild(span);

const h4_price = document.createElement("h4");
h4_price.textContent = `$${renderedProduct.regularPrice}`;
prod_price.appendChild(h4_price);

const h6 = document.createElement("h6");
h6.textContent = `$${renderedProduct.shippingCost} shipping`;

prod_availability.appendChild(h6);

const p_shipping = document.createElement("p");
p_shipping.textContent = renderedProduct.homeDelivery;
shipping_date.appendChild(p_shipping);

//////////////////////////////////////////////////////////////

const h6_features = document.createElement("h6");
h6_features.textContent = renderedProduct.name;

const imgsmallClone = imgsmall.cloneNode(true);
// img_header.appendChild(imgsmallClone);
// img_header.appendChild(h6_features)
// features_stars.appendChild(span)

img_header.forEach((element) => {
  element.appendChild(imgsmallClone.cloneNode(true));
  element.appendChild(h6_features.cloneNode(true));
});

// Assuming span is a DOM element you want to append
features_stars.forEach((element) => {
  element.appendChild(span.cloneNode(true));
});

const p_description = document.createElement("p");
if (renderedProduct.plot === null) {
  p_description.textContent = "VREDNOST JE NULL, NEMA DESKRIPCIJE";
} else {
  p_description.textContent = renderedProduct.plot;
}

description1.appendChild(p_description);

const table = document.querySelector(".table-test");

console.log(table.rows[0].children[1]);

const contact = document.getElementById("contact");

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

for (var i = 0; i < table.rows.length; i++) {
  console.log(table.rows[i].children[1].ariaValueNow);
  if (table.rows[i].children[1].ariaValueNow === "genre") {
    table.rows[i].children[1].textContent = renderedProduct.genre;
  }
  if (table.rows[i].children[1].ariaValueNow === "actors") {
    table.rows[i].children[1].textContent = renderedProduct.artistName;
  }
  if (table.rows[i].children[1].ariaValueNow === "department") {
    table.rows[i].children[1].textContent = renderedProduct.department;
  }
  if (table.rows[i].children[1].ariaValueNow === "year") {
    table.rows[i].children[1].textContent = renderedProduct.releaseDate;
  }
  if (table.rows[i].children[1].ariaValueNow === "format") {
    table.rows[i].children[1].textContent = renderedProduct.format;
  }

  if (table.rows[i].children[1].ariaValueNow === "programtype") {
    table.rows[i].children[1].textContent = renderedProduct.type;
  }

  if (table.rows[i].children[1].ariaValueNow === "length") {
    table.rows[i].children[1].textContent = renderedProduct.lengthInMinutes;
  }
  if (table.rows[i].children[1].ariaValueNow === "studio") {
    table.rows[i].children[1].textContent = renderedProduct.studio;
  }
  if (table.rows[i].children[1].ariaValueNow === "rating") {
    table.rows[i].children[1].textContent = renderedProduct.mpaaRating;
  }
}

window.addEventListener("load", () => {
  if (window.innerWidth < 600) {
    document.getElementById("search").placeholder = "Search for product";
  }
});

if (renderedProduct.longDescription !== null) {
  document.getElementById("movie_desc").textContent =
    renderedProduct.longDescription;
} else {
  document.getElementById("movie_desc").textContent =
    "There is no Description about this movie, you can read the plot of the movie clicking on the Features buttonll";
}
