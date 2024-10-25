import { useReducer, ReactNode } from "react";
import { AppContext } from "./appContext";
import { appReducer, initialState } from "./appReducer";

type Props = { children: ReactNode };

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
