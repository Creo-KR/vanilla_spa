export default class Component {
  tagName = "div";
  event = { rendered: false };

  constructor({ parent, initialState, event }) {
    this.parent = parent;
    this.state = initialState;
    this.event = { ...this.event, ...event };

    const setup = async () => {
      await this.init();
      this.$target = document.createElement(this.tagName);
      this.className && (this.$target.className = this.className);
      this.parent.appendChild
        ? this.parent.appendChild(this)
        : this.parent.$target.appendChild(this.$target);
      this.addEvent();
      this.render();
      this.event.rendered && this.event.rendered();
    };
    setup();
  }

  /**
   * not yet created $target.
   */
  async init() {}

  render() {}

  addEvent() {}

  appendChild(child) {
    this.$target.appendChild(child.$target);
  }

  removeChild(child) {
    this.$target.removeChild(child.$target);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  destroy() {
    this.$target.parentNode.removeChild(this.$target);
  }
}
