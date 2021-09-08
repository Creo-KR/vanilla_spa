import Component from "../core/component.js";

export default class Tab extends Component {
  state = { index: 0, tabs: [{ name: "Tab1", contents: "" }], ...this.state };
  async init() {
    this.className = "tab";
  }

  addEvent() {
    this.$target.addEventListener("click", (e) => {
      let $tabButton = e.target.closest(".tab-button");
      if ($tabButton) {
        console.log($tabButton.dataset["tabIndex"]);
      }
    });
  }

  render() {
    this.$target.innerHTML = "";

    this.$tabList = document.createElement("ul");
    this.$tabList.className = "tab-list";
    this.$target.appendChild(this.$tabList);

    this.state.tabs.map((tab, index) => {
      let $tab = document.createElement("li");
      $tab.classList.add("tab-button");
      $tab.classList.add("on");
      $tab.dataset["tabIndex"] = index;
      $tab.innerText = tab.name;
      this.$tabList.appendChild($tab);
    });
  }
}
