import { useEffect } from "react";
import { useAppState } from "./useAppState";
import { getLocalStore } from "../utils/localStore";
import { TOKEN, REFRESHTOKEN } from "../constants/storage";
import { authenticateUser, refreshTokenAuth } from "../services/auth.service";

export const useGetLocalUser = () => {
  const { dispatch } = useAppState();
  const initialToken = getLocalStore(TOKEN);
  const initialRefreshToken = getLocalStore(REFRESHTOKEN);

  useEffect(() => {

    const authenticate = async () => {
      if (!initialToken || !initialRefreshToken) return;
      console.log("Autenticando al usuario...");
      
      try {
        dispatch({ type: "SET_USER_START" });
        let user = await authenticateUser(initialToken);

        if (!user) {
          const newTokens = await refreshTokenAuth(initialRefreshToken);

          if (newTokens) {
            const { accessToken } = newTokens;
            user = await authenticateUser(accessToken);
          }
        }

        // Si se obtuvo el usuario, actualiza el estado global
        if (user) {
          dispatch({ type: "SET_USER", payload: user });
        } else {
          console.error("No se pudo autenticar al usuario.");
          dispatch({ type: "SET_USER_ERROR", payload: "No se pudo autenticar al usuario." });
        }
      } catch (error) {
        console.error("Error en la autenticación:", error);
        dispatch({ type: "SET_USER_ERROR", payload: "Error en la autenticación." });
      }
    };

    authenticate();
  }, [initialToken, initialRefreshToken, dispatch]);
};
