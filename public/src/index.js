import App from "./core/app.js";

const path = window.location.pathname.replace(/\/html\//, "");
const $body = document.body;
const app = new App({ $parent: $body, initialState: path });
