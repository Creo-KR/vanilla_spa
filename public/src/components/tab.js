import Component from "../core/component.js";
import TabContents from "./tabContents.js";

export default class Tab extends Component {
  state = {
    index: 0,
    tabs: [{ name: "Tab", contents: "" }],
    buttons: { add: false, remove: false },
    ...this.state,
  };

  event = { add: false, remove: false, ...this.event };

  async init() {
    this.className = "tab";
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      let $tabButton = e.target.closest(".tab-button");
      if ($tabButton) {
        if ($tabButton.classList.contains("add")) {
          this.event.add && this.event.add();
        } else {
          let index = $tabButton.dataset["index"] * 1;
          if (e.target.closest(".remove"))
            this.event.remove && this.event.remove(index);
          else this.setState({ index });
        }
      }
    });
  }

  render() {
    this.$target.innerHTML = "";

    this.$tabList = document.createElement("ul");
    this.$tabList.className = "tab-list";
    this.$target.appendChild(this.$tabList);

    if (this.state.index < 0) this.state.index = 0;
    let removeVisible = this.state.buttons.remove && this.state.tabs.length > 1;

    this.state.tabs.map((tab, index) => {
      let $tabButton = document.createElement("li");
      $tabButton.classList.add("tab-button");
      if (this.state.index == index) $tabButton.classList.add("on");
      $tabButton.dataset["index"] = index;

      let html = tab.name;
      if (removeVisible) html += `<span class="remove">✖</span>`;
      $tabButton.innerHTML = html;
      this.$tabList.appendChild($tabButton);
    });

    if (this.state.buttons.add) {
      let $tabButton = document.createElement("li");
      $tabButton.classList.add("tab-button");
      $tabButton.classList.add("add");
      $tabButton.dataset["id"] = "add";
      $tabButton.innerText = "➕";
      this.$tabList.appendChild($tabButton);
    }

    this.contents = new TabContents({
      parent: this,
      initialState: { contents: this.state.tabs[this.state.index].contents },
    });
  }
}
