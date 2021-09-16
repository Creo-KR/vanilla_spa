const routes = {
  "": {
    title: "SPA MAIN",
    description: "Main Page",
    url: "/spa/",
    imageUrl: "/images/01.jpg",
  },

  gallery: {
    title: "SPA GALLERY",
    description: "Gallery Page",
    url: "/spa/gallery",
    imageUrl: "/images/02.jpg",
  },

  note: {
    title: "SPA NOTE",
    description: "Note Page",
    url: "/spa/note",
    imageUrl: "/images/03.jpg",
  },
};

const getMetaData = (path) => {
  path = path.replace(/\/spa\//, "");
  const route = routes[path];
  if (route)
    return `
          <title>${route.title}</title>
          <meta name="title" content="${route.title}" />
          <meta name="description" content="${route.description}" />
          <meta property="og:url" content="${route.url}" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="${route.title}" />
          <meta property="og:description" content="${route.description}" />
          <meta property="og:image" content="${route.imageUrl}" />
          <meta property="twitter:card" content="${route.imageUrl}" />
          <meta property="twitter:url" content="${route.url}" />
          <meta property="twitter:title" content="${route.title}" />
          <meta property="twitter:description" content="${route.description}" />
          <meta property="twitter:image" content="${route.imageUrl}" />
        `;
  else return "";
};

module.exports = { getMetaData };
