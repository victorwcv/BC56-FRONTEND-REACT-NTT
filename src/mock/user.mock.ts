import { UserAPI } from "../types/interfaces/api.interface";

export const mockUserAPI: UserAPI = {
  id: 1,
  username: 'johndoe',
  email: 'johndoe@example.com',
  firstName: 'John',
  lastName: 'Doe',
  gender: 'male',
  image: '/images/johndoe.png',
  accessToken: 'mockAccessToken123',
  refreshToken: 'mockRefreshToken456',
};