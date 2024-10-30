import { userMapper } from './user.mapper';
import { type UserAPI } from "../types/interfaces/api.interface";
import { type User } from "../types/interfaces/user.interface";
import { mockUserAPI } from "../mock/user.mock";

describe('userMapper', () => {
  it('should correctly map a UserAPI object to a User object', () => {
   

    const expectedUser: User = {
      id: 1,
      username: 'johndoe',
      email: 'johndoe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      image: '/images/johndoe.png',
    };

    const result = userMapper(mockUserAPI);
    expect(result).toEqual(expectedUser);
  });

  it('should handle missing optional properties by setting them as undefined in User', () => {

    const mockUserAPI2 = {
      id: 2,
      username: 'janedoe',
      email: 'janedoe@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      gender: undefined,
      image: undefined,
    } as unknown as UserAPI;
    

    const expectedUser = {
      id: 2,
      username: 'janedoe',
      email: 'janedoe@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      gender: undefined,
      image: undefined,
    };

    const result = userMapper(mockUserAPI2);
    expect(result).toEqual(expectedUser);
  });
});
