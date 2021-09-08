import Component from "../core/component.js";

export default class GalleryViewer extends Component {
  state = { id: 0, name: "", imageUrl: "", ...this.state };
  event = { delete: false, ...this.event };

  async init() {
    this.className = "gallery-viewer full blur";
  }

  template() {
    return `<div class="box">
                <div>
                  <a class="button back">⬅</a>
                  <a class="button delete">🗑</a>
                </div>
              <img src="${this.state.imageUrl}">
              <h1>${this.state.name}</h1>
            </div>`;
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      if (e.target.classList.contains("gallery-viewer")) {
        this.destroy();
      } else if (e.target.classList.contains("back")) {
        this.destroy();
      } else if (e.target.classList.contains("delete")) {
        this.destroy();
        this.event.delete(this.state.id);
      }
    });
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
