import Component from "../core/component.js";

import { request } from "../core/api.js";
import GalleryItem from "../components/galleryItem.js";
import List from "../components/list.js";
import GalleryViewer from "../components/galleryViewer.js";

export default class GalleryPage extends Component {
  async init() {
    this.className = "page gallery";

    this.state = { items: await request("gallery") };
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      let item = e.target.closest(".gallery-item");
      if (item) {
        let id = item.dataset["id"];

        this.viewer = new GalleryViewer({
          parent: this,
          initialState: this.getItem(id),
          event: { delete: this.deleteItem },
        });
      }
    });
  }

  render() {
    this.$target.innerHTML = "";

    this.$title = document.createElement("h1");
    this.$title.innerText = "Gallery Page";
    this.$target.appendChild(this.$title);

    this.list = new List({ parent: this });

    this.state.items &&
      this.state.items.map((item) => {
        new GalleryItem({ parent: this.list, initialState: item });
      });
  }

  getItem(id) {
    for (let i in this.state.items) {
      if (this.state.items[i].id == id) {
        return this.state.items[i];
      }
    }
    return null;
  }

  deleteItem = (id) => {
    for (let i in this.state.items) {
      if (this.state.items[i].id == id) {
        this.state.items.splice(i, 1);
      }
    }

    this.setState(this.state);
  };
}
