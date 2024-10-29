export const saveLocalStore = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStore = (key: string) => {
  if (!key) return;
  return  localStorage.getItem(key);
};

export const removeLocalStore = (key: string) => {
  localStorage.removeItem(key);
}

export const clearLocalStore = () => {
  localStorage.clear();
}