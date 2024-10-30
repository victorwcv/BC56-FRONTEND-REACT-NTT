import { vi } from 'vitest'; 
import { loginUser, authenticateUser, refreshTokenAuth } from './auth.service';
import { saveLocalStore } from '../utils/localStore';
import { userMapper } from '../mappers/user.mapper';
import { Endpoints } from '../types/enums/endPoints.enum';


vi.mock('../utils/localStore', () => ({
  saveLocalStore: vi.fn(),
}));


vi.mock('../mappers/user.mapper', () => ({
  userMapper: vi.fn((user) => user),
}));

describe('Authentication Functions', () => {
  beforeEach(() => {
    
    vi.clearAllMocks();
  });

  it('loginUser should save tokens and return user', async () => {
    const mockResponse = {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      image: "https://example.com/images/john_doe.jpg",
      accessToken: "validAccessToken",
      refreshToken: "validRefreshToken",
    };

    
    (global).fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const data = { username: 'test', password: 'test' };

    const user = await loginUser(data);

    
    expect(fetch).toHaveBeenCalledWith(Endpoints.LOGIN, expect.any(Object));
    
    
    expect(saveLocalStore).toHaveBeenCalledWith('user_token', mockResponse.accessToken);
    expect(saveLocalStore).toHaveBeenCalledWith('user_refreshToken', mockResponse.refreshToken);

   
    expect(user).toEqual(userMapper(mockResponse));
  });

  it('authenticateUser should return user when token is valid', async () => {
    const mockResponse = {
      id: 1,
      username: "john_doe",
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      image: "https://example.com/images/john_doe.jpg",
      accessToken: "validAccessToken",
      refreshToken: "validRefreshToken",
    };

    (global).fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const token = 'validToken';

    const user = await authenticateUser(token);

    
    expect(fetch).toHaveBeenCalledWith(Endpoints.AUTHENTICATE, expect.any(Object));
    
    
    expect(user).toEqual(userMapper(mockResponse));
  });

  it('refreshTokenAuth should save new tokens and return them', async () => {
    const mockResponse = {
      accessToken: 'newAccessToken',
      refreshToken: 'newRefreshToken',
    };

    (global).fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: vi.fn().mockResolvedValueOnce(mockResponse),
    });

    const refreshToken = 'validRefreshToken';

    const tokens = await refreshTokenAuth(refreshToken);

    
    expect(fetch).toHaveBeenCalledWith(Endpoints.REFRESH, expect.any(Object));
    
    
    expect(saveLocalStore).toHaveBeenCalledWith('user_token', mockResponse.accessToken);
    expect(saveLocalStore).toHaveBeenCalledWith('user_refreshToken', mockResponse.refreshToken);

    
    expect(tokens).toEqual(mockResponse);
  });
});
