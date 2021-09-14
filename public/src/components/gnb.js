import Component from "../core/component.js";
import { move } from "../core/route.js";

export default class Gnb extends Component {
  async init() {
    this.className = "gnb";
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      const $li = e.target;
      if ($li.tagName == "LI") {
        move({ path: $li.dataset["path"] });
      }
    });
  }

  template() {
    return `<ul>
          <li data-path="./">Main</li>
          <li data-path="./gallery">Gallery</li>
          <li data-path="./note">Note</li>
        </ul>`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
