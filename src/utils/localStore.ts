export const saveLocalStore = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStore = (key: string) => {
  if (!key) return;
  return  localStorage.getItem(key);
};