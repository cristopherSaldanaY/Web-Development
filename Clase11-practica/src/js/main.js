import { contentProducts } from "./nodes.js";
import { dataProducts } from "../utils/data.js";

console.log(contentProducts);
console.log(dataProducts);

const mappingData = (data) => {
  return data.map(
    (item) =>
      `
    <div class="card">
        <figure class="content-img">
            <img class="image" src="${item.imageProduct}" alt="">
        </figure>
        <h2 class="title-product">${item.title}</h2>
        <p class="description">
            ${item.description}
        </p>
        <p class="price">${item.price}</p>
        <p class="points">${item.points}</p>
        <a href="" class="buy">Comprar</a>
    </div>
    `
  );
};

const insertDOM = () => {
  const template = mappingData(dataProducts);

  return (contentProducts.innerHTML = template.join(" "));
};

insertDOM();
