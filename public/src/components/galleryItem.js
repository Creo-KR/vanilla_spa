import Component from "../core/component.js";

export default class GalleryItem extends Component {
  async init() {
    this.tagName = "li";
    this.className = "gallery-item";
  }

  template() {
    return `<img src="${this.state.imageUrl}"><h1>${this.state.name}</h1>`;
  }

  render() {
    this.$target.dataset["id"] = this.state.id;
    this.$target.innerHTML = this.template();
  }
}
