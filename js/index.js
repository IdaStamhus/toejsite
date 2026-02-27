// console.log("Hello, World!");
// const categoryContainer = document.querySelector(".cta-grid container");

// fetch("https://kea-alt-del.dk/t7/api/categories")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// //   productlist

// ("use strict");

// const productContainer = document.querySelector("main");
// fetch("https://kea-alt-del.dk/t7/api/products")
//   .then((response) => response.json())
//   .then((data) => {
//     showProducts(data);
//   });

// function showProducts(productsArr) {
//     productContainer.innerHTML = "";
//     productsArr.forEach((product) => {
//        console.log ("prodcut, product.id);

// productContainer.innerHTML += <article class="smallProduct soldOut">
//         <img src="imgs/brun-tee_result.webp" alt="product image" />
//         <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

//         <h3>Oversize Fit T-shirt</h3>
//         <p class="subtle">Tshirts | Covert</p>
//         <p class="price">DKK <span>800</span>,-</p>
//         <div class="discounted_element">
//           <p>Now DKK <span></span>,-</p>
//           <p class="color_me_red"><span></span>%</p>
//         </div>
//         <a href="product.html">Read More</a>
//       </article>

//        });

//     }
"use strict";
const productListContainer = document.querySelector("main");
fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

// function showProducts(productsArr) {
//   //   console.log("productsArr", productsArr);
//   productListContainer.innerHTML = "";
//   productsArr.forEach((product) => {
//     console.log(product);
//     productListContainer.innerHTML += `<article class="smallProduct soldOut">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" />
//         <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

//         <h3>${product.productdisplayname}</h3>
//         <p class="subtle">${product.articletype}|${product.brandname}</p>
//         <p class="price">DKK <span>${product.price}</span>,-</p>
//         <div class="discounted_element">
//           <p>Now DKK <span></span>,-</p>
//           <p class="color_me_red"><span></span>%</p>
//         </div>
//         <a href="product.html">Read More</a>
//       </article>`;
//   });
// }
