import styles from "./market.module.css";
import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { getAllProducts } from "../../services/apiCalls";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import { Product } from "../../types/interfaces/product.interface";
import { CommonMessages } from "../../types/enums/commonMessages.enum";

export default function Market() {
  const { listedProducts, setListedProducts} = useAppContext();
  const [message, setMessage] = useState<string>("");
  const productsRef = useRef<Product[]>([]);

  // fetch products
  useEffect(() => {
    setMessage(CommonMessages.LOADING_MESSAGE);
    const fetchProducts = async () => {
      const products = await getAllProducts();
      if (!products) return;
      setListedProducts(products);
      productsRef.current = products;
      setMessage("");
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.market}>
      <SearchBar products={productsRef.current} setmessage={setMessage}/>
      <section id="products" className={styles.products}>
        {listedProducts.length > 0 ? listedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) : (
          <p>{message}</p>
        )}
      </section>
    </div>
  );
}
