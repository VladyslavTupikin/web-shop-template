/*
 * Copyright (c) 2026 Vladyslav Tupikin
 * SPDX-License-Identifier: ISC
 */

import { RenderProducts } from "./modules/render-product.js";

// document.body.addEventListener("htmx:afterSwap", (event) => {
//   const productsSection = event.target.querySelector(".products__list");
//   console.log(productsSection);
//   if (!productsSection) {
//     return;
//   }

//   RenderProducts();
// });

document.body.addEventListener("htmx:load", (event) => {
  const productsSection = event.detail.elt.querySelector(".products__list");

  if (!productsSection) {
    return;
  }

  RenderProducts();
});
