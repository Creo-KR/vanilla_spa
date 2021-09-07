import Component from "../core/component.js";

export default class ImageViewer extends Component {
  async init() {
    this.className = "image-viewer";
  }

  template() {
    return `<div class="box"><img src="${this.state.imageUrl}"><h1>${this.state.name}</h1></div>`;
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      if (e.target.tagName == "DIV") {
        this.destroy();
      }
    });
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
