/*
 * Copyright (c) 2026 Vladyslav Tupikin
 * SPDX-License-Identifier: ISC
 */

import { RenderProducts } from "./modules/render-product.js";
import { getProducts, deleteProduct } from "./api/api.js";

document.body.addEventListener("htmx:load", (event) => {
  const productsSection = event.detail.elt.querySelector(".products__list");

  if (!productsSection) {
    return;
  }

  const render = async () => {
    // Retrieve products JSON list from backend via GET request
    const products = await getProducts();

    if (products) {
      products.forEach((product) => {
        RenderProducts(product);
      });
    }
  };

  render();
});

document.addEventListener("click", async (event) => {
  const buttonDelete = event.target.closest(".product-card__button--delete");

  if (!buttonDelete) {
    return;
  }

  // Find exact product card instance where button belongs
  const article = buttonDelete.closest(".product-card");

  // Remove instance from the Backend side via DELETE request
  const res = await deleteProduct(article.dataset.productId);
  if (!res) {
    console.error(
      `Error: Failed to delete instance ${article.dataset.productId}`,
    );
    return;
  }

  // Remove product card instance from the Web Page
  article.remove();
});
