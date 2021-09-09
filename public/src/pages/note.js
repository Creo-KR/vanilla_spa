import Tab from "../components/tab.js";
import Component from "../core/component.js";

export default class NotePage extends Component {
  state = {
    data: [
      {
        title: "TAB0",
        contents: this.templateContents(),
      },
    ],
    ...this.state,
  };

  seq = 1;

  async init() {
    this.className = "page note";

    this.load();
  }

  render() {
    this.$target.innerHTML = "";

    this.$title = document.createElement("h1");
    this.$title.innerText = "Note Page";
    this.$target.appendChild(this.$title);

    this.tab = new Tab({
      parent: this,
      initialState: {
        tabs: this.parseTab(),
        buttons: { add: true, remove: true },
      },
      event: { add: this.addTab, remove: this.removeTab },
    });
  }

  save() {
    localStorage["data-note"] = JSON.stringify(this.state);
  }

  load() {
    const data = localStorage["data-note"];
    if (data) this.state = JSON.parse(data);
  }

  parseTab() {
    let tabs = [];
    this.state.data.map((data) => {
      tabs.push({
        name: data.title,
        contents: data.contents,
      });
    });
    return tabs;
  }

  templateContents() {
    return `created on ${new Date().toISOString()}`;
  }

  addTab = () => {
    this.state.data.push({
      title: `TAB${this.seq++}`,
      contents: this.templateContents(),
    });

    this.tab.setState({
      index: this.state.data.length - 1,
      tabs: this.parseTab(),
    });

    this.save();
  };

  removeTab = (index) => {
    this.state.data.splice(index, 1);

    let newState = { tabs: this.parseTab() };

    if (
      this.tab.state.tabs.length - 1 == this.tab.state.index ||
      this.tab.state.index > index
    )
      newState.index = this.tab.state.index - 1;

    this.tab.setState(newState);

    this.save();
  };
}
