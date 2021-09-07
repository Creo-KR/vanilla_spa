import Component from "../core/component.js";

export default class ImageViewer extends Component {
  async init() {
    this.className = "image-viewer full blur";
  }

  template() {
    return `<div class="box"><img src="${this.state.imageUrl}"><h1>${this.state.name}</h1></div>`;
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      if (e.target.className.indexOf("image-viewer") > -1) {
        this.destroy();
      }
    });
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
