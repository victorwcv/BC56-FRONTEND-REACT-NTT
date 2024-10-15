import { createContext } from "react";
import { InitialState } from "../types/interfaces/initialState.interface";
import { AppAction } from "../types/interfaces/actions.interface";

interface AppContextInterface {
  state: InitialState;
  dispatch: React.Dispatch<AppAction>;
}

// create context
export const AppContext = createContext<AppContextInterface | null>(null);
