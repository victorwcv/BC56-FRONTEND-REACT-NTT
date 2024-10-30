import { describe, it, expect, vi } from 'vitest';
import { saveLocalStore, getLocalStore, removeLocalStore, clearLocalStore } from './localStore';

// Mock localStorage
const localStorageMock = {
  setItem: vi.fn(),
  getItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};


beforeAll(() => {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('localStorage functions', () => {
  it('saveLocalStore should call localStorage.setItem with correct arguments', () => {
    saveLocalStore('testKey', 'testValue');
    expect(localStorageMock.setItem).toHaveBeenCalledWith('testKey', 'testValue');
  });

  it('getLocalStore should call localStorage.getItem and return the stored value', () => {
    localStorageMock.getItem.mockReturnValue('storedValue');
    const value = getLocalStore('testKey');
    expect(localStorageMock.getItem).toHaveBeenCalledWith('testKey');
    expect(value).toBe('storedValue');
  });

  it('getLocalStore should return undefined if no key is provided', () => {
    const value = getLocalStore('');
    expect(value).toBeUndefined();
  });

  it('removeLocalStore should call localStorage.removeItem with the correct key', () => {
    removeLocalStore('testKey');
    expect(localStorageMock.removeItem).toHaveBeenCalledWith('testKey');
  });

  it('clearLocalStore should call localStorage.clear', () => {
    clearLocalStore();
    expect(localStorageMock.clear).toHaveBeenCalled();
  });
});
