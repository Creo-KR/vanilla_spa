import { request } from "./api.js";
import Component from "./component.js";

import MainPage from "../pages/main.js";
import Gnb from "../components/gnb.js";
import GalleryPage from "../pages/gallery.js";

export default class App extends Component {
  init() {
    this.tagName = "main";
    this.className = "App";

    window.onpopstate = (e) => {
      this.state = window.location.pathname.replace(/\/html\//, "");
      this.render();
    };
  }

  render() {
    this.gnb || (this.gnb = new Gnb({ $parent: this.$target }));

    this.page && this.$target.removeChild(this.page.$target);
    console.log(this.state);
    switch (this.state) {
      case "gallery":
        this.page = new GalleryPage({ $parent: this.$target });
        break;
      default:
        this.page = new MainPage({ $parent: this.$target });
    }
  }
}
