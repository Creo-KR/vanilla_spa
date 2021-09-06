export default class Component {
  $target;
  tagName = "div";
  className;
  state;

  constructor({ $parent, initialState }) {
    this.state = initialState;
    this.init();
    this.$target = document.createElement(this.tagName);
    this.className && (this.$target.className = this.className);
    $parent.appendChild(this.$target);
    this.setEvent();
    this.render();
  }

  init() {}

  render() {}

  setEvent() {}

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}
