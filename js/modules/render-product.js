export function RenderProducts() {
  const products = [
    {
      id: 1,
      name: "Bread",
      price: "2.50",
      img: "../../img/default.jpg",
    },
    {
      id: 2,
      name: "Milk",
      price: "4.99",
      img: "../../img/default.jpg",
    },
    {
      id: 3,
      name: "Tomato",
      price: "1.50",
      img: "../../img/default.jpg",
    },
    {
      id: 4,
      name: "Pepper",
      price: "8.99",
      img: "../../img/default.jpg",
    },
  ];

  console.log(document.querySelector("#products-card-template"));

  const template = document.querySelector("#products-card-template");
  const productsList = document.querySelector(".products__list");

  products.forEach((product) => {
    const productElement = template.content.cloneNode(true);

    const image = productElement.querySelector(".product-card__image");
    const title = productElement.querySelector(".product-card__title");
    const price = productElement.querySelector(".product-card__price");
    const edit = productElement.querySelector(".product-card__button--edit");
    const remove = productElement.querySelector(
      ".product-card__button--delete",
    );

    title.textContent = product.name;
    price.textContent = `\$${product.price}`;

    edit.textContent = "edit";
    remove.textContent = "delete";

    image.src = product.img;
    image.alt = product.name;

    //console.log(productsList);
    productsList.appendChild(productElement);
  });
}
