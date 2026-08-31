/*
 * Copyright (c) 2026 Vladyslav Tupikin
 * SPDX-License-Identifier: ISC
 */

export function RenderProducts(product) {
  if (!product) {
    console.error("Could not get products list from the server.");
    return;
  }

  const template = document.querySelector("#products-card-template");
  const productsList = document.querySelector(".products__list");

  const productElement = template.content.cloneNode(true);

  const image = productElement.querySelector(".product-card__image");
  const title = productElement.querySelector(".product-card__title");
  const price = productElement.querySelector(".product-card__price");
  const edit = productElement.querySelector(".product-card__button--edit");
  const remove = productElement.querySelector(".product-card__button--delete");

  const article = productElement.querySelector(".product-card");
  article.dataset.productId = product.id;

  title.textContent = product.name;
  price.textContent = `\$${product.price}`;

  edit.textContent = "edit";
  remove.textContent = "delete";

  image.src = product.img;
  image.alt = product.name;

  productsList.appendChild(productElement);
}
