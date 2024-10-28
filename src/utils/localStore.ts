export const saveLocalStore = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStore = (key: string) => {
  return localStorage.getItem(key);
};