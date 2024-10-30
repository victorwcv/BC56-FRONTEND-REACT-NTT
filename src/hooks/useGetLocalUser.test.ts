import { renderHook } from '@testing-library/react';
import { useGetLocalUser } from './useGetLocalUser';
import { getLocalStore } from '../utils/localStore';
import { useNavigate } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('../utils/localStore');
vi.mock('../services/auth.service');
vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
}));

const mockDispatch = vi.fn();

vi.mock('./useAppState', () => ({
  useAppState: vi.fn(() => ({ dispatch: mockDispatch })),
}));

describe('useGetLocalUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should navigate to '/' if there are no tokens", async () => {
    (getLocalStore as jest.Mock).mockReturnValueOnce(null); 
    (getLocalStore as jest.Mock).mockReturnValueOnce(null);
    const mockNavigate = vi.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    renderHook(() => useGetLocalUser());

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'SET_USER_ERROR',
      payload: 'No hay token.',
    });
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

});
