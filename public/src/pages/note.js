import Tab from "../components/tab.js";
import Component from "../core/component.js";

export default class NotePage extends Component {
  state = {
    data: [
      {
        title: "TAB0",
        isEditable: false,
        contents: "",
      },
    ],
    ...this.state,
  };

  seq = 1;

  async init() {
    this.className = "page note";

    this.load();
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      let button = e.target.closest(".note-button");
      if (button) {
        this.edit(e);
      }
    });
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

  edit(e) {
    let data = this.state.data[this.tab.state.index];
    data.isEditable = !data.isEditable;

    if (!data.isEditable) {
      let noteText = e.target
        .closest(".tab-contents")
        .querySelector("textarea").value;
      data.contents = noteText;

      this.save();
    }

    this.tab.state.tabs[this.tab.state.index].contents =
      this.templateContents(data);
    this.tab.setState();
  }

  parseTab() {
    let tabs = [];
    this.state.data.map((data) => {
      tabs.push({
        name: data.title,
        contents: this.templateContents(data),
      });
    });
    return tabs;
  }

  templateContents({ isEditable, contents }) {
    return isEditable
      ? `<div><a class="note-button edit">✔</a></div><div class="note-contents"><textarea>${contents}</textarea></div>`
      : `<div><a class="note-button edit">🖊</a></div><div class="note-contents"><p>${contents}</p></div>`;
  }

  addTab = () => {
    this.state.data.push({
      title: `TAB${this.seq++}`,
      contents: `created on ${new Date().toISOString()}`,
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
