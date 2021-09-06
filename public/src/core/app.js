import { request } from "./api.js";
import Component from "./component.js";

import MainPage from "../pages/main.js";
import Gnb from "../components/gnb.js";
import GalleryPage from "../pages/gallery.js";
import { getPath } from "./route.js";
import Loading from "../components/loading.js";

export default class App extends Component {
  init() {
    this.tagName = "main";
    this.className = "App";

    window.onpopstate = (e) => {
      this.setState({ path: getPath() });
    };
  }

  render() {
    this.loading ||
      (this.loading = new Loading({
        parent: this,
        initialState: { display: true },
      }));

    this.gnb || (this.gnb = new Gnb({ parent: this }));

    this.page && this.removeChild(this.page);

    switch (this.state.path) {
      case "gallery":
        this.page = new GalleryPage({ parent: this });
        break;
      default:
        this.page = new MainPage({ parent: this });
    }

    this.loading.setState({ display: false });
  }
}
