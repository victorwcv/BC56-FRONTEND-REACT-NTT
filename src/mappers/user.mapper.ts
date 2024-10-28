import {type UserAPI} from "../types/interfaces/api.interface";
import {type User} from "../types/interfaces/user.interface";

export const userMapper = (user: UserAPI): User => {
  const { id, username,  email, firstName, lastName, gender, image } = user;
  return {
    id,
    username,
    email,
    firstName,
    lastName,
    gender,
    image
  };
}