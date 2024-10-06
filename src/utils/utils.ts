// función para cargar una sección de html e insertarla en un elemento HTML determinado por su id
export const loadHtml = (url: string, id: string) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = data;
      } else {
        console.error(`Element with id '${id}' not found.`);
      }
    });
};

// funcion para renderizar los productos filtrados
export const renderFilteredProducts = (
  filteredProducts: Element[],
  productsEl: HTMLElement | null
) => {
  if (!productsEl) {
    return;
  }

  if (filteredProducts.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No se encontraron resultados";
    productsEl.replaceChildren(noResults);
  } else {
    productsEl.replaceChildren(...filteredProducts);
  }
};
