import { createProduct } from "./api/api.js";

const cancelButton = document.querySelector(".add-item__button--cancel");

cancelButton.addEventListener("click", async () => {
  window.location.href = "index.html";
});

const addButton = document.querySelector(".add-item__button--add");

addButton.addEventListener("click", async () => {
  const dataName = document.querySelector(".add-item__input--name");
  const dataPrice = document.querySelector(".add-item__input--price");

  if (!dataName.value || !dataPrice.value) {
    return;
  }

  const res = await createProduct(dataName.value, dataPrice.value);
  if (!res) {
    console.error(`Error: Failed to update instance.`);
    return;
  }

  window.location.href = "index.html";
});
