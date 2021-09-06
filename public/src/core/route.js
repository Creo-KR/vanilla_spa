export const move = ({ path, data, title }) => {
  if (getPath() != path.replace(/[./]+/, ""))
    window.history.pushState({ data }, title, path);
  window.dispatchEvent(new Event("popstate"));
};

export const getPath = () => window.location.pathname.replace(/\/spa\//, "");
