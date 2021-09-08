import Tab from "../components/tab.js";
import Component from "../core/component.js";

export default class NotePage extends Component {
  state = { tabs: [{ name: "TAB0", contents: "first tab" }], ...this.state };

  seq = 1;

  async init() {
    this.className = "page note";

    const data = localStorage["data-note"];
    if (data) this.state = JSON.parse(data);
  }

  template() {
    return "Note Page";
  }

  render() {
    this.$target.innerHTML = "";

    this.$title = document.createElement("h1");
    this.$title.innerText = "Note Page";
    this.$target.appendChild(this.$title);

    this.tab = new Tab({
      parent: this,
      initialState: {
        tabs: this.state.tabs,
        buttons: { add: true, remove: true },
      },
      event: { add: this.addTab, remove: this.removeTab },
    });
  }

  addTab = () => {
    this.state.tabs.push({
      name: `TAB${this.seq++}`,
      contents: `created on ${new Date().toISOString()}`,
    });
    this.tab.setState({ index: this.state.tabs.length - 1 });

    localStorage["data-note"] = JSON.stringify(this.state);
  };

  removeTab = (index) => {
    this.state.tabs.splice(index, 1);

    let newState = {};
    if (this.tab.state.index >= index)
      newState.index = this.tab.state.index - 1;

    this.tab.setState(newState);

    localStorage["data-note"] = JSON.stringify(this.state);
  };
}
