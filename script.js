var array = [];
var cart = [];

const getProducts = () => {
  fetch(
    "https://api.bestbuy.com/v1/products?format=json&apiKey=iJGg8GCzIN4aLfZSVfnqNTAX"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.products);

      array = data.products;
      array2 = data;
      renderProducts();
    })
    .catch((error) => {
      console.log(error, "error");
    });
};

// RENDER PRODUCT FUNCTION HERE

const renderProducts = () => {
  document.getElementById(
    "number-items"
  ).textContent = `Total:${array2.total}.`;
  const listproducts = document.querySelector(".list-products");
  listproducts.innerHTML = "";
  array.forEach((item, index) => {
    const list_products_item = document.createElement("div");
    list_products_item.classList.add("list-products-item");

    const products_img = document.createElement("div");
    products_img.classList.add("product-img");
    const img_product = document.createElement("img");

    // CREATED SOME DIVS AND ELEMENTS TO WORK WITH
    const product_description = document.createElement("div");
    product_description.classList.add("product-description");
    const product_description_name = document.createElement("div");
    product_description_name.classList.add("product-description-name");

    const a_1 = document.createElement("a");

    const product_description_model = document.createElement("div");
    product_description_model.classList.add("product-description-model");
    const product_description_pickup = document.createElement("div");
    product_description_pickup.classList.add("product-description-pickup");

    const p_model = document.createElement("p");
    const p_sku = document.createElement("p");

    const p_store = document.createElement("p");
    const p_box = document.createElement("p");
    // const p_sku = document.createElement("p");

    const i_store = document.createElement("i");
    const i_box = document.createElement("i");

    i_store.classList.add("fa-solid");
    i_store.classList.add("fa-store");

    i_box.classList.add("fa-solid");
    i_box.classList.add("fa-box-open");

    // CREATING DIVS  AND SOME ELEMENTS
    const product_price = document.createElement("div");
    product_price.classList.add("product-price");
    const price_tag = document.createElement("div");
    price_tag.classList.add("price-tag");
    const price_tag_full = document.createElement("div");
    price_tag_full.classList.add("price-tag-full");
    const price_tag_save = document.createElement("div");
    price_tag_save.classList.add("price-tag-save");
    const add_to_cart = document.createElement("div");
    add_to_cart.classList.add("add-to-cart");

    const a_add_to_cart = document.createElement("button");

    a_add_to_cart.setAttribute("id", "add-to-cart");

    // a_add_to_cart.addEventListener("click",function(){

    // })

    const i_cart = document.createElement("i");

    const p_save = document.createElement("p");
    const span_save = document.createElement("span");
    span_save.setAttribute("id", "save-price-box");

    const h4_price = document.createElement("h4");
    h4_price.setAttribute("id", "fullprice");

    const favorite_counter = document.getElementById("favorite_counter");

    // UPDATING CREATED DIVS AND APPENDING CHILD TO THEM

    p_sku.textContent = `Sku:${item.sku}`;
    p_model.textContent = `Model:${item.modelNumber}`;

    a_1.textContent = item.name;
    a_1.classList.add("a_1");

    a_1.addEventListener("click", function () {
      a_1.href = "product.html";
      localStorage.setItem(`product1`, JSON.stringify(item));
    });

    // ///////////////////////////////////////////////////////

    let storedCart = localStorage.getItem("cartarray");
    var renderedCart = JSON.parse(storedCart);

    a_add_to_cart.addEventListener("click", function () {

        if (!cart.includes(item)) {
          a_add_to_cart.style.background = "rgb(255, 115, 0)";
          a_add_to_cart.textContent = "Added in a cart";
          cart.push(item);
          localStorage.setItem("cartarray", JSON.stringify(cart));
          alert("Succesfully added in Cart");
        } else {
          console.log("item je vec u korpi");
        }
        console.log(cart);
    });

    // console.log(renderedCart.includes(item));

    // //////////////////////////////////////////////////////////

    img_product.src = item.image;
    img_product.width = "250 ";
    img_product.height = "250";

    products_img.appendChild(img_product);
    product_description_name.appendChild(a_1);
    product_description_model.appendChild(p_sku);
    product_description_model.appendChild(p_model);

    p_store.appendChild(i_store);
    // p_store.textContent = "Pick up at Store"
    p_store.appendChild(document.createTextNode("Pick up at Store"));
    // videcemo dal ce radit
    p_box.appendChild(i_box);
    p_box.appendChild(document.createTextNode("Pick up at Store"));
    product_description_pickup.appendChild(p_store);
    product_description_pickup.appendChild(p_box);

    product_description.appendChild(product_description_name);
    product_description.appendChild(product_description_model);
    product_description.appendChild(product_description_pickup);

    a_add_to_cart.appendChild(i_cart);
    a_add_to_cart.textContent = "Add to cart";

    add_to_cart.appendChild(a_add_to_cart);

    p_save.appendChild(span_save);
    p_save.textContent = `Was $${item.regularPrice}`;

    price_tag_save.appendChild(p_save);

    h4_price.textContent = `$${item.salePrice}`;

    price_tag_full.appendChild(h4_price);

    price_tag.append(price_tag_full);
    price_tag.append(price_tag_save);

    product_price.append(price_tag);
    product_price.append(add_to_cart);

    list_products_item.appendChild(products_img);
    list_products_item.appendChild(product_description);
    list_products_item.appendChild(product_price);

    listproducts.appendChild(list_products_item);
  });
};

getProducts();

// RENDERING FILTERING PRODUCT AGAIN

const renderFilteredProducts = (filteredArray) => {
  const listproducts = document.querySelector(".list-products");
  listproducts.innerHTML = "";
  filteredArray.forEach((item, index) => {
    const list_products_item = document.createElement("div");
    list_products_item.classList.add("list-products-item");

    const products_img = document.createElement("div");
    products_img.classList.add("product-img");
    const img_product = document.createElement("img");

    // CREATED SOME DIVS AND ELEMENTS TO WORK WITH
    const product_description = document.createElement("div");
    product_description.classList.add("product-description");
    const product_description_name = document.createElement("div");
    product_description_name.classList.add("product-description-name");

    const a_1 = document.createElement("a");

    const product_description_model = document.createElement("div");
    product_description_model.classList.add("product-description-model");
    const product_description_pickup = document.createElement("div");
    product_description_pickup.classList.add("product-description-pickup");

    const p_model = document.createElement("p");
    const p_sku = document.createElement("p");

    const p_store = document.createElement("p");
    const p_box = document.createElement("p");
    // const p_sku = document.createElement("p");

    const i_store = document.createElement("i");
    const i_box = document.createElement("i");

    i_store.classList.add("fa-solid");
    i_store.classList.add("fa-store");

    i_box.classList.add("fa-solid");
    i_box.classList.add("fa-box-open");

    // CREATING DIVS  AND SOME ELEMENTS
    const product_price = document.createElement("div");
    product_price.classList.add("product-price");
    const price_tag = document.createElement("div");
    price_tag.classList.add("price-tag");
    const price_tag_full = document.createElement("div");
    price_tag_full.classList.add("price-tag-full");
    const price_tag_save = document.createElement("div");
    price_tag_save.classList.add("price-tag-save");
    const add_to_cart = document.createElement("div");
    add_to_cart.classList.add("add-to-cart");

    const a_add_to_cart = document.createElement("button");

    a_add_to_cart.setAttribute("id", "add-to-cart");

    // a_add_to_cart.addEventListener("click",function(){

    // })

    const i_cart = document.createElement("i");

    const p_save = document.createElement("p");
    const span_save = document.createElement("span");
    span_save.setAttribute("id", "save-price-box");

    const h4_price = document.createElement("h4");
    h4_price.setAttribute("id", "fullprice");

    const favorite_counter = document.getElementById("favorite_counter");

    // UPDATING CREATED DIVS AND APPENDING CHILD TO THEM

    p_sku.textContent = `Sku:${item.sku}`;
    p_model.textContent = `Model:${item.modelNumber}`;

    a_1.textContent = item.name;
    a_1.classList.add("a_1");

    a_1.addEventListener("click", function () {
      a_1.href = "product.html";
      localStorage.setItem(`product1`, JSON.stringify(item));
    });

    // ///////////////////////////////////////////////////////

    a_add_to_cart.addEventListener("click", function () {
      if (!cart.includes(item)) {
        cart.push(item);
        alert("Succesfully added in Cart");
      } else {
        console.log("item je vec u korpi");
      }
      console.log(cart);
    });

    // //////////////////////////////////////////////////////////

    img_product.src = item.image;
    img_product.width = "250 ";
    img_product.height = "250";

    products_img.appendChild(img_product);
    product_description_name.appendChild(a_1);
    product_description_model.appendChild(p_sku);
    product_description_model.appendChild(p_model);

    p_store.appendChild(i_store);
    // p_store.textContent = "Pick up at Store"
    p_store.appendChild(document.createTextNode("Pick up at Store"));
    // videcemo dal ce radit
    p_box.appendChild(i_box);
    p_box.appendChild(document.createTextNode("Pick up at Store"));
    product_description_pickup.appendChild(p_store);
    product_description_pickup.appendChild(p_box);

    product_description.appendChild(product_description_name);
    product_description.appendChild(product_description_model);
    product_description.appendChild(product_description_pickup);

    a_add_to_cart.appendChild(i_cart);
    a_add_to_cart.textContent = "Add to cart";

    add_to_cart.appendChild(a_add_to_cart);

    p_save.appendChild(span_save);
    p_save.textContent = `Was $${item.regularPrice}`;

    price_tag_save.appendChild(p_save);

    h4_price.textContent = `$${item.salePrice}`;

    price_tag_full.appendChild(h4_price);

    price_tag.append(price_tag_full);
    price_tag.append(price_tag_save);

    product_price.append(price_tag);
    product_price.append(add_to_cart);

    list_products_item.appendChild(products_img);
    list_products_item.appendChild(product_description);
    list_products_item.appendChild(product_price);

    listproducts.appendChild(list_products_item);
  });
};

const sortBy = () => {
  const select_sort = document.getElementById("sortby");

  select_sort.addEventListener("change", function () {
    for (var i = 0; i < select_sort.length; i++) {
      if (select_sort.value === "pricelh") {
        const filteredArray = array.sort((a, b) => a.salePrice - b.salePrice);
        renderFilteredProducts(filteredArray);
      }
      if (select_sort.value === "pricehl") {
        const filteredArray = array.sort((a, b) => b.salePrice - a.salePrice);
        renderFilteredProducts(filteredArray);
      }
      if (select_sort.value === "brandaz") {
        const filteredArray = array.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        renderFilteredProducts(filteredArray);
      }
      if (select_sort.value === "brandza") {
        const filteredArray = array.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        renderFilteredProducts(filteredArray);
      }
      if (select_sort.value === "rating") {
        const filteredArray = array.sort(
          (a, b) => a.customerReviewAverage - b.customerReviewAverage
        );
        renderFilteredProducts(filteredArray);
      }
    }
  });
};

sortBy();

document.getElementById("search").addEventListener("input", () => {
  const search_value = document.getElementById("search").value.toLowerCase();
  const filteredArray = array.filter((item) => {
    return item.name && item.name.toLowerCase().includes(search_value);
  });
  renderFilteredProducts(filteredArray);
});

document
  .getElementById("filter-min-max")
  .addEventListener("click", function () {
    const min = document.getElementById("min").value;
    const max = document.getElementById("max").value;


    if(min === "" && max === "")
    {
      return
    }
    else{

    const filteredArray = array.filter((item) => {
      
      if (item.salePrice >= min && item.salePrice <= max) {
        return item;
      }
    });
    renderFilteredProducts(filteredArray);
  }
  })

document.getElementById("name-search").addEventListener("click", function () {
  const search_value = document
    .getElementById("input-search-brand")
    .value.toLowerCase();
  const filteredArray = array.filter((item) => {
    return item.name && item.name.toLowerCase().includes(search_value);
  });
  renderFilteredProducts(filteredArray);
});
document.getElementById("clear-search").addEventListener("click", function () {
  document.getElementById("input-search-brand").value = "";
  renderFilteredProducts(array);
});

document.getElementById("cart").addEventListener("click", () => {
  localStorage.setItem("cartarray", JSON.stringify(cart));
  window.location.href = "cart.html";

  let storedProduct = localStorage.getItem("cartarray");
  var renderedProduct = JSON.parse(storedProduct);

  console.log(cart);
  // console.log('stored product =>',storedProduct)
  console.log("rendered products =>", renderedProduct);
});

// console.log(cart)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////





const c1 = document.getElementById("price1");

c1.addEventListener("click",function()
{
 if(c1.checked){
  console.log(document.getElementById("price1").value)
  const filteredArray = array.filter((item) => {
    if (item.salePrice <25 ) {
      return item
    }
  }).sort((a,b)=>a.salePrice - b.salePrice)
  renderFilteredProducts(filteredArray);
 }
 else{
  renderProducts()
 }
})
document.getElementById("price2").addEventListener("select",function()
{
  const filteredArray = array.filter((item) => {
    if (item.salePrice >25 && item.salePrice<50 ) {
      return item
    }
  }).sort((a,b)=>a.salePrice - b.salePrice)
  renderFilteredProducts(filteredArray);
 
})
document.getElementById("price3").addEventListener("",function()
{
  const filteredArray = array.filter((item) => {
    if (item.salePrice>50 && item.salePrice <75 ) {
      return item
    }
  }).sort((a,b)=>a.salePrice - b.salePrice)
  renderFilteredProducts(filteredArray);
 
})
document.getElementById("price4").addEventListener("",function()
{
  const filteredArray = array.filter((item) => {
    if (item.salePrice> 75 && item.salePrice <100 ) {
      return item
    }
  }).sort((a,b)=>a.salePrice - b.salePrice)
  renderFilteredProducts(filteredArray);
 
})












var check = document.querySelectorAll(".checked");

check.forEach((element,index )=> {
  
  let min_price 
  let max_price  
 element.addEventListener("click",()=>{


 if(index ===0)
 {
   min_price  = 0
   max_price = 25
 }
 else if(index ===1 )
 {
  min_price = 25;
  max_price= 50
 }
 else if( index === 2)
 {
  min_price = 50;
  max_price = 75;
 }
 else if(index === 3){
  min_price = 75
  max_price = 100
 }
 else if (index === 4 ){
  min_price = 100
  max_price = 150
 }
 else if(index === 5){
  min_price = 150
  max_price = 200
}
  
  if(element.checked ){
    console.log(element.checked)

    const filteredArray = array.filter((item) => {
      if (item.salePrice >min_price && item.salePrice <max_price ) {
        return item
      }
    }).sort((a,b)=>a.salePrice - b.salePrice)

    console.log(array)
    renderFilteredProducts(filteredArray);
   }
   else{
    renderProducts()
   }
 })
 
});


window.addEventListener("load",()=>{
 if(window.innerWidth<600)
 {
  document.getElementById("search").placeholder = "Search for product"
 }
})