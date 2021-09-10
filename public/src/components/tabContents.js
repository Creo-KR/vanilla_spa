import Component from "../core/component.js";

export default class TabContents extends Component {
  state = { contents: "", ...this.state };

  async init() {
    this.className = "tab-contents";
  }

  template() {
    return `${this.state.contents}`;
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
