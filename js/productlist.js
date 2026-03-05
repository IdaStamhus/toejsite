"use strict";
const productListContainer = document.querySelector("main");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=56&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  //   console.log("productsArr", productsArr);
  productListContainer.innerHTML = "";
  productsArr.forEach((product) => {
    // if (product.soldout) {
    //   console.log("product status: udsolgt");
    // } else {
    //   console.log("product status: på lager");
    // }

    // console.log(product);

    productListContainer.innerHTML += `<article class="smallProduct ${product.soldout ? " soldOut" : ""} ${product.discount ? " discounted" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" />
        <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

         <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.articletype}|${product.brandname}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <div class="discounted_element">
          <p>Now DKK <span>${Math.ceil((product.price / 100) * product.discount)}</span>,-</p>
          <p class="color_me_red"><span>${product.discount}</span>%</p>
        </div>
         <a href="product.html?id=${product.id}">Read More</a>
       </article>`;
  });
}

// ${product.discount ? "<div class='discount'>discounted</div>" : " "}

// const hasDiscount = product.discount > 0;
// const isSoldOut = product.soldout === 1;

//     productListContainer.innerHTML += `<article class="smallProduct ${isSoldOut ? " sold_Out" : ""}">
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" />
//         <p class="soldoutTxt color_me_black_and_red">SOLD OUT</p>

//          <h3>${product.productdisplayname}</h3>
//         <p class="subtle">${product.articletype}|${product.brandname}</p>
//         <p class="price">DKK <span>${product.price}</span>,-</p>
//         <div class="discounted_element">
//         ${
//           hasDiscount
//           ? `<span class="discount_badge">-${product.discount}%</span>
//           <p class="discounted_price"> Now DKK ${Math.round(product.price * (1 - product.discount / 100))} <span></span>,-</p>
//           : ""
//         }

//           <p class="color_me_red"><span></span>%</p>
//         </div>
//          <a href="product.html?id=${product.id}">Read More</a>
//        </article>`;
//   });
// }
