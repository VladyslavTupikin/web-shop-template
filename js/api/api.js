/*
 * Copyright (c) 2026 Vladyslav Tupikin
 * SPDX-License-Identifier: ISC
 */

const serverAddr = "http://192.168.88.18:5000";

export async function getProducts() {
  let response;

  try {
    const getAllProducts = "products";
    response = await axios.get(`${serverAddr}/${getAllProducts}`);
  } catch (err) {
    console.error(`Error: getProducts: ${err.message}`);
    return;
  }

  return response.data;
}

export async function deleteProduct(id) {
  let response;

  try {
    const deleteProductQuery = `products/${id}`;
    response = await axios.delete(`${serverAddr}/${deleteProductQuery}`);
  } catch (err) {
    console.error(`Error: deleteProduct: ${err.message}`);
    return;
  }

  return response.data;
}

export async function updateProduct(id, name, price) {
  let response;

  try {
    const deleteProductQuery = `products/${id}`;
    response = await axios.patch(`${serverAddr}/${deleteProductQuery}`, {
      name,
      price,
    });
  } catch (err) {
    console.error(`Error: deleteProduct: ${err.message}`);
    return;
  }

  return response.data;
}
