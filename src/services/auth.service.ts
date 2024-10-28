import { userMapper } from "../mappers/user.mapper";
import { Endpoints } from "../types/enums/endPoints.enum";
import { UserAPI } from "../types/interfaces/api.interface";
import { LoginUser, User } from "../types/interfaces/user.interface";
import { saveLocalStore } from "../utils/localStore";
import { REFRESHTOKEN, TOKEN } from "../constants/storage";



// Call to authenticate user
export const loginUser = async (data: LoginUser): Promise<User | null> => {
  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }
  try {
    const res = await fetch(Endpoints.LOGIN, fetchConfig);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const user: UserAPI = await res.json();
    const { accessToken, refreshToken } = user;
    saveLocalStore(TOKEN, accessToken);
    saveLocalStore(REFRESHTOKEN, refreshToken);
    return userMapper(user);
  } catch (error) {
    throw error;
  }
};
