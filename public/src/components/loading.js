import Component from "../core/component.js";

export default class Loading extends Component {
  async init() {
    this.className = "loading full blur";
  }

  template() {
    return `<h1 class="text">LOADING...</h1>`;
  }

  render() {
    if (this.state.display) {
      this.$target.innerHTML = this.template();
      this.$target.style.display = "block";
    } else {
      this.$target.style.display = "none";
    }
  }
}
