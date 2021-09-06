import App from "./core/app.js";
import { getPath } from "./core/route.js";

const app = new App({
  parent: { $target: document.body },
  initialState: { path: getPath() },
});
