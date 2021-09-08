import Tab from "../components/tab.js";
import Component from "../core/component.js";

export default class NotePage extends Component {
  async init() {
    this.className = "page note";

    const data = localStorage["data-note"];
    if (data) this.state = { data: JSON.parse(data) };
  }

  template() {
    return "Note Page";
  }

  render() {
    this.$target.innerHTML = "";

    this.$title = document.createElement("h1");
    this.$title.innerText = "Note Page";
    this.$target.appendChild(this.$title);

    this.tab = new Tab({ parent: this, initialState: {} });
  }
}
