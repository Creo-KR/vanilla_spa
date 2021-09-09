import Component from "../core/component.js";

export default class TabContents extends Component {
  state = { contents: "", ...this.state };

  async init() {
    this.className = "tab-contents";
  }

  template() {
    return `<p>
              ${this.state.contents}
            </p>`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
