import { useEffect } from "react";
import { useAppState } from "./useAppState";
import { getLocalStore } from "../utils/localStore";
import { TOKEN, REFRESHTOKEN } from "../constants/storage";
import { authenticateUser, refreshTokenAuth } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export const useGetLocalUser = () => {
  const { dispatch } = useAppState();
  const navigate = useNavigate();

  useEffect(() => {
    const initialToken = getLocalStore(TOKEN);
    const initialRefreshToken = getLocalStore(REFRESHTOKEN);

    const authenticate = async () => {
      if (!initialToken || !initialRefreshToken) {
        dispatch({ type: "SET_USER_ERROR", payload: "No hay token." });
        navigate("/");
        return;
      }

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

        if (user) {
          dispatch({ type: "SET_USER", payload: user });
        } else {
          console.error("No se pudo autenticar al usuario.");
          dispatch({
            type: "SET_USER_ERROR",
            payload: "No se pudo autenticar al usuario.",
          });
          navigate("/");
        }
      } catch (error) {
        console.error("Error en la autenticación:", error);
        dispatch({
          type: "SET_USER_ERROR",
          payload: "Error en la autenticación.",
        });
        navigate("/");
      }
    };

    authenticate();
  }, []);
};
