// función para cargar una sección de html e insertarla en un elemento HTML determinado por su id
export const loadHtml = (url, id) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    });
};

// funcion para renderizar los productos filtrados
export const renderFilteredProducts = (filteredProducts, productsEl) => {
  if (filteredProducts.length === 0) {
    const noResults = document.createElement("p");
    noResults.textContent = "No se encontraron resultados";
    productsEl.replaceChildren(noResults);
  } else {
    productsEl.replaceChildren(...filteredProducts);
  }
};
