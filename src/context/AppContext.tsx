import { useContext, createContext, useState, ReactNode } from "react";
import { type Product } from "../types/interfaces/product.interface";

// interface for the context
interface IAppContext {
  cartProducts: Product[];
  listedProducts: Product[];
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setListedProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// create context
const AppContext = createContext<IAppContext | null>(null);

// custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext debe ser usado dentro de un AppContextProvider"
    );
  }

  return context;
};

// context provider
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [listedProducts, setListedProducts] = useState<Product[]>([]);

  return (
    <AppContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        listedProducts,
        setListedProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
