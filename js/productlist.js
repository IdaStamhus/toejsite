"use strict";
const productListContainer = document.querySelector("main");
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  //   console.log("productsArr", productsArr);
  productListContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log(product);
    productListContainer.innerHTML += `<article class="smallProduct soldOut">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" />
        <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.articletype}|${product.brandname}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discounted_element">
          <p>Now DKK <span></span>,-</p>
          <p class="color_me_red"><span></span>%</p>
        </div>
        <a href="product.html">Read More</a>
      </article>`;
  });
}