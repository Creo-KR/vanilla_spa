import { getPath } from "./route.js";

import Component from "./component.js";

import Loading from "../components/loading.js";
import Gnb from "../components/gnb.js";

import MainPage from "../pages/main.js";
import GalleryPage from "../pages/gallery.js";
import NotePage from "../pages/note.js";

export default class App extends Component {
  state = { path: "", ...this.state };

  routes = {
    main: MainPage,
    gallery: GalleryPage,
    note: NotePage,
  };

  async init() {
    this.tagName = "main";
    this.className = "App";
  }

  addEvent() {
    window.onpopstate = (e) => {
      this.setState({ path: getPath() });
    };
  }

  onPageRendered = () => {
    setTimeout(() => {
      this.loading.setState({ display: false });
    }, 200);
  };

  render() {
    this.loading
      ? this.loading.setState({ display: true })
      : (this.loading = new Loading({
          parent: this,
          initialState: { display: true },
        }));

    this.gnb || (this.gnb = new Gnb({ parent: this }));

    this.page && this.removeChild(this.page);

    const page = this.routes[this.state.path] || this.routes.main;

    this.page = new page({
      parent: this,
      event: { rendered: this.onPageRendered },
    });
  }
}
