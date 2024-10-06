import { loadHtml, renderFilteredProducts } from "./utils/utils";
import { createNewProductCard } from "./components/productCard";
import { getCategories, getAllProducts } from "./services/api";

async function initApp() {
  // cargar secciones principales al index.html desde la carpeta 'html'
  loadHtml("../html/header.html", "header");
  loadHtml("../html/main.html", "main");
  loadHtml("../html/footer.html", "footer");

  // obtener las categorías desde la api
  const categories = await getCategories();

  const selectEl = document.querySelector("#search-select");

  // renderizar las categorías
  categories?.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.slug;
    option.textContent = category.name;
    selectEl?.appendChild(option);
  });

  // obtener la sección de productos
  const productsEl = document.getElementById("products");

  // mostrar un mensaje de carga
  const loadingMessage = document.createElement("p");
  loadingMessage.textContent = "Cargando productos...";
  productsEl?.appendChild(loadingMessage);

  // obtener todos los productos desde la api
  const allProducts = await getAllProducts();

  // eliminar el mensaje de carga
  productsEl?.removeChild(loadingMessage);

  // renderizar todos los productos
  allProducts?.forEach((product) => {
    const figure = createNewProductCard(product);
    productsEl?.appendChild(figure);
  });

  // obtener todos los productos renderizados en el DOM en una lista.
  const nodeList = document.querySelectorAll(".products .product");
  const productsList = Array.from(nodeList);

  // filtrar los productos de acuerdo al input
  const searchInput = document.querySelector("#search-input");
  const searchInputEventFunction = (event: Event) => {
    const inputEvent = event as InputEvent;
    const value = (inputEvent.target as HTMLInputElement).value;
    if (!value) {
      productsEl?.replaceChildren(...productsList);
      return;
    }

    const filteredProducts = productsList.filter((product) => {
      const productElement = product as HTMLElement;
      const description = productElement.querySelector(
        ".product__description h2"
      );
      return description?.textContent
        ?.toLowerCase()
        .startsWith(value.toLowerCase());
    });

    renderFilteredProducts(filteredProducts, productsEl);
  };

  searchInput?.addEventListener("input", searchInputEventFunction);

  // filtrar los productos de acuerdo al select
  const searchSelect = document.querySelector("#search-select");

  const searchByCategorySelectEventFunction = (event: Event) => {
    const selectEvent = event as InputEvent;
    const value = (selectEvent.target as HTMLInputElement).value;
    if (!value) {
      productsEl?.replaceChildren(...productsList);
      return;
    }

    const filteredProducts = productsList.filter((product) => {
      const productElement = product as HTMLElement;
      const description = productElement.querySelector(
        ".product__description__categories p"
      );
      return description?.textContent?.toLowerCase() === value.toLowerCase();
    });

    renderFilteredProducts(filteredProducts, productsEl);
  };

  searchSelect?.addEventListener("change", searchByCategorySelectEventFunction);

  // lógica para resetear el select al hacer focus en el input
  const resetSelect = (selectElement: HTMLSelectElement) => {
    selectElement.value = "";
  };

  searchInput?.addEventListener("focus", () => {
    resetSelect(searchSelect as HTMLSelectElement);
    productsEl?.replaceChildren(...productsList);
  });

  //  botón para agregar al carrito de compras
  document.querySelectorAll(".product__button").forEach((button) => {
    button.addEventListener("click", () => {
      const cartCount = document.getElementById("cart-count") as HTMLElement;
      cartCount.textContent = (Number(cartCount.textContent) + 1).toString();
    });
  });
}

initApp();
