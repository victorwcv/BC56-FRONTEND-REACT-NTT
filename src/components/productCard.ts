import { Product } from "../types/productTypes";

export const createNewProductCard = (product : Product) => {
  // Crear el elemnto 'figure'
  const figureEl = document.createElement("figure");
  figureEl.classList.add("product");
  figureEl.id = product.id.toString();

  // Crear el elemento 'img' para la imagen
  const img = document.createElement("img");
  img.src = product.image || "/images/no-image-placeholder.jpg";
  img.alt = product.title;
  img.classList.add("product__image");
  img.id = `product-image-${product.id}`;

  // Crear el elemento 'figcaption' para la descripción
  const figcaptionEl = document.createElement("figcaption");
  figcaptionEl.classList.add("product__description");

  // Crear el elemento 'h2' para el título
  const title = document.createElement("h2");
  title.textContent = product.title;
  title.id = `product-title-${product.id}`;

  // Crear el elemento 'p' para la descripción
  const description = document.createElement("p");
  description.textContent = product.description;
  description.id = `product-description-${product.id}`;

  // Crear el elemento 'div' para las categorías
  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("product__description__categories");

  // Crear el elemento 'h3' para el título "Categorias:"
  const categoriesTitle = document.createElement("h3");
  categoriesTitle.textContent = "Categorias:";

  // Crear el elemento 'p' para las categorías
  const categoriesText = document.createElement("p");
  categoriesText.textContent = product.category;
  categoriesText.id = `product-category-${product.id}`;

  // Añadir los elementos al elemento 'div'
  categoriesContainer.appendChild(categoriesTitle);
  categoriesContainer.appendChild(categoriesText);

  // Crear el elemento 'h3' para el precio
  const price = document.createElement("h3");
  price.classList.add("product__description__price");
  price.textContent = "Precio: S/.";

  // Crear el 'span' para el precio dinámico
  const priceSpan = document.createElement("span");
  priceSpan.id = `product-price-${product.id}`;
  priceSpan.textContent = product.price.toString();

  // Añadir el 'span' al 'h3'
  price.appendChild(priceSpan);

  // Crear el elemento 'button'
  const button = document.createElement("button");
  button.classList.add("product__button");
  button.innerHTML = `
    <svg fill="currentColor" width="80px" height="80px" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg">
      <path d="M12.711 9.182a1.03 1.03 0 0 1-1.03 1.03H7.53v4.152a1.03 1.03 0 0 1-2.058 0v-4.152H1.318a1.03 1.03 0 1 1 0-2.059h4.153V4.001a1.03 1.03 0 0 1 2.058 0v4.152h4.153a1.03 1.03 0 0 1 1.029 1.03z"/>
    </svg>
    Agregar al carrito
  `;

  // Agregar todos los elementos al figcaption
  figcaptionEl.appendChild(title);
  figcaptionEl.appendChild(description);
  figcaptionEl.appendChild(categoriesContainer);
  figcaptionEl.appendChild(price);
  figcaptionEl.appendChild(button);

  // Agregar la imagen y el figcaption al figure
  figureEl.appendChild(img);
  figureEl.appendChild(figcaptionEl);

  return figureEl;
};
