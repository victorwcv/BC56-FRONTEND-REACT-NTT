import { userMapper } from "../mappers/user.mapper";
import { Endpoints } from "../types/enums/endPoints.enum";
import { UserAPI } from "../types/interfaces/api.interface";
import { LoginUser, User } from "../types/interfaces/user.interface";
import { saveLocalStore } from "../utils/localStore";
import { REFRESHTOKEN, TOKEN } from "../constants/storage";

// Call to authenticate user
export const loginUser = async (data: LoginUser): Promise<User | undefined> => {
  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
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
    console.error(error);
  }
};

export const authenticateUser = async (
  token: string
): Promise<User | undefined> => {
  if (!token) return;

  const fetchConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(Endpoints.AUTHENTICATE, fetchConfig);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const user: UserAPI = await res.json();
    return userMapper(user);
  } catch (error) {
    console.error(error);
  }
};

export const refreshTokenAuth = async (
  refreshToken: string
): Promise<{ accessToken: string; refreshToken: string } | undefined> => {
  if (!refreshToken) return;

  const fetchConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  };
  try {
    const res = await fetch(Endpoints.REFRESH, fetchConfig);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const newTokens = await res.json();
    const { accessToken, refreshToken } = newTokens;
    saveLocalStore(TOKEN, accessToken);
    saveLocalStore(REFRESHTOKEN, refreshToken);
    return newTokens;
  } catch (error) {
    console.error(error);
  }
};
