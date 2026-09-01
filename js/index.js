/*
 * Copyright (c) 2026 Vladyslav Tupikin
 * SPDX-License-Identifier: ISC
 */

import { RenderProducts } from "./modules/render-product.js";
import { getProducts, deleteProduct, updateProduct } from "./api/api.js";

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

document.addEventListener("click", async (event) => {
  const buttonEdit = event.target.closest(".product-card__button--edit");

  if (!buttonEdit) {
    return;
  }

  const dialog = document.querySelector(".form-dialog");
  dialog.showModal();

  const buttonCancel = document.querySelector(".form__button--close");
  buttonCancel.addEventListener("click", () => {
    dialog.close();
  });

  const buttonSubmit = document.querySelector(".form__button--update");
  buttonSubmit.addEventListener("click", async () => {
    const dataName = document.querySelector(".form__input--name");
    const dataPrice = document.querySelector(".form__input--price");

    const article = buttonEdit.closest(".product-card");

    // Update instance from the Backend side via PATCH request
    const res = await updateProduct(
      article.dataset.productId,
      dataName.value,
      dataPrice.value,
    );

    if (!res) {
      console.error(
        `Error: Failed to update instance ${article.dataset.productId}`,
      );
      return;
    }
  });
});
