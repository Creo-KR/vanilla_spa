import Component from "../core/component.js";
import { move } from "../core/route.js";

export default class Gnb extends Component {
  init() {
    this.className = "gnb";
  }

  setEvent() {
    this.$target.addEventListener("click", (e) => {
      const $li = e.target;
      if ($li.tagName == "LI") {
        let { path } = $li.dataset;
        move({ path });
      }
    });
  }

  template() {
    return `<ul>
          <li data-path="./" >Main</li>
          <li data-path="./gallery" >Gallery</li>
        </ul>`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
