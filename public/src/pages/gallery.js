import Component from "../core/component.js";

import { request } from "../core/api.js";
import GalleryItem from "../components/galleryItem.js";
import List from "../components/list.js";
import ImageViewer from "../components/imageViewer.js";

export default class GalleryPage extends Component {
  async init() {
    this.className = "page gallery";

    this.items = await request("gallery");
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      let item = e.target.closest(".gallery-item");
      if (item) {
        let id = item.dataset["id"];

        this.viewer = new ImageViewer({
          parent: this,
          initialState: this.getItem(id),
        });
      }
    });
  }

  render() {
    this.$title = document.createElement("h1");
    this.$title.innerText = "Gallery Page";
    this.$target.appendChild(this.$title);

    this.list = new List({ parent: this });

    this.items &&
      this.items.map((item) => {
        new GalleryItem({ parent: this.list, initialState: item });
      });
  }

  getItem(id) {
    for (let i in this.items) {
      if (this.items[i].id == id) {
        return this.items[i];
      }
    }
    return null;
  }
}
