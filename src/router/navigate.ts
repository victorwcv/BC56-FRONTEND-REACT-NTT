export const navigateTo = (url: string) => {
  window.history.pushState(null, "", url);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};
