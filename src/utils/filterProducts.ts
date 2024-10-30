import { type Product } from "../types/interfaces/product.interface";

export const filterProducts = (
  products: Product[],
  category: string,
  searchTerm: string 
) : Product[] => {

  let filtered = products;
  
  if(category && category !== "all"){
    filtered = filtered.filter((product) => product.category === category);
  }

  if(searchTerm){
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filtered;
};
