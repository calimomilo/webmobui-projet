customElements.define("artist-cover", class extends HTMLElement {
  static observedAttributes = ['cover', 'title', 'id']

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
      <a href="#artists/${this.getAttribute("id")}">
        <img src="${this.getAttribute("cover")}" />
        <div class="artist-list-item-title">${this.getAttribute("title")}</div>
      </a>
     `
  }
})
