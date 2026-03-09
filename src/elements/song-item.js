customElements.define('song-item', class extends HTMLElement {
  static observedAttributes = ['favorite', 'title']

  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    const icon = this.getAttribute('favorite') == 'true' ? 'favorite' : 'favorite_border'

    this.innerHTML = `
      <div class="list-item-title">${this.getAttribute('title')}</div>
      <div class="list-item-actions">
        <button type="button" class="icon-button favorite-button ">
          <span class="material-icons">${icon}</span>
        </button>
        <button type="button" class="icon-button play-button">
          <span class="material-icons">play_arrow</span>
        </button>
      </div>`

    // const playEvent = new CustomEvent('play_click');
    // const favEvent = new CustomEvent('favorite_click');

    this.querySelector('.play-button').addEventListener('click', () => this.dispatchEvent(new CustomEvent('play_click')))
    this.querySelector('.favorite-button').addEventListener('click', () => this.dispatchEvent(new CustomEvent('favorite_click')))
  }
})
