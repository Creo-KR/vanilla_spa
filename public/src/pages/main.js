import Component from "../core/component.js";

export default class MainPage extends Component {
  async init() {
    this.className = "page main";
  }

  template() {
    return "Main Page";
  }

  render() {
    this.$target.innerHTML = this.template();
  }
}
