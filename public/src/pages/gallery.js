import Component from "../core/component.js";

export default class GalleryPage extends Component {
  init() {
    this.className = "page gallery";
  }

  template() {
    return "Gallery Page";
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
