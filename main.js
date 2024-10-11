import { getAllProducts, getCategories } from "./js/apiCalls";
import { createNewProductCard } from "./js/createNewProductCard";
import { loadHtml, renderFilteredProducts } from "./js/utils";

// cargar secciones principales al index.html desde la carpeta 'html'
loadHtml("./html/header.html", "header");
loadHtml("./html/main.html", "main");
loadHtml("./html/footer.html", "footer");

// obtener las categorías desde la api
const categories = await getCategories();

// renderizar las categorías
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category.slug;
  option.textContent = category.name;
  document.querySelector("#search-select").appendChild(option);
});

// obtener la sección de productos
const productsEl = document.getElementById("products");

// mostrar un mensaje de carga
const loadingMessage = document.createElement("p");
loadingMessage.textContent = "Cargando productos...";
productsEl.appendChild(loadingMessage);

// obtener todos los productos desde la api
const allProductsFromApi = await getAllProducts();

// eliminar el mensaje de carga
productsEl.removeChild(loadingMessage);

// renderizar todos los productos
allProductsFromApi.products.forEach((product) => {
  const figure = createNewProductCard(product);
  productsEl.appendChild(figure);
});

// obtener todos los productos renderizados en el DOM en una lista.
const productsList = document.querySelectorAll(".products .product");

// filtrar los productos de acuerdo al input
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
  if (!value) {
    productsEl.replaceChildren(...productsList);
    return;
  }

  const filteredProducts = Array.from(productsList).filter((product) => {
    return product
      .querySelector(".product__description h2")
      .textContent.toLowerCase()
      .startsWith(value.toLowerCase());
  });

  renderFilteredProducts(filteredProducts, productsEl);
});

// filtrar los productos de acuerdo al select
const searchSelect = document.querySelector("#search-select");
searchSelect.addEventListener("change", (event) => {
  const value = event.target.value;
  if (!value) {
    productsEl.replaceChildren(...productsList);
    return;
  }

  const filteredProducts = Array.from(productsList).filter((product) => {
    return (
      product
        .querySelector(".product__description__categories p")
        .textContent.toLowerCase() === value.toLowerCase()
    );
  });

  renderFilteredProducts(filteredProducts, productsEl);
});

//  botón para agregar al carrito de compras
document.querySelectorAll(".product__button").forEach((button) => {
  button.addEventListener("click", () => {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = Number(cartCount.textContent) + 1;
  });
});
