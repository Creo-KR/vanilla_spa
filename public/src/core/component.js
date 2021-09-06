export default class Component {
  $target;
  tagName = "div";
  className;
  parent;
  state;

  constructor({ parent, initialState }) {
    this.parent = parent;
    this.state = initialState;
    this.init();
    this.$target = document.createElement(this.tagName);
    this.className && (this.$target.className = this.className);
    parent.appendChild
      ? parent.appendChild(this)
      : parent.$target.appendChild(this.$target);
    this.setEvent();
    this.render();
  }

  init() {}

  render() {}

  setEvent() {}

  appendChild(child) {
    this.$target.appendChild(child.$target);
  }

  removeChild(child) {
    this.$target.removeChild(child.$target);
  }

  setState(newState) {
    console.log("this.state : " + JSON.stringify(this.state));
    console.log("newState : " + JSON.stringify(newState));
    console.log("...this.state : " + JSON.stringify({ ...this.state }));
    console.log("...newState : " + JSON.stringify({ ...newState }));
    console.log(
      "{ ...this.state, ...newState } : " +
        JSON.stringify({ ...this.state, ...newState })
    );
    this.state = { ...this.state, ...newState };
    console.log("new this.state : " + JSON.stringify(this.state));
    this.render();
  }
}
