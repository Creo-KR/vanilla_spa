export const move = ({ path, data, title }) => {
  window.history.pushState({ data }, title, path);
};
