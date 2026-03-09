import { search } from '../api.js'
import { PageSongs } from './page-songs.js';

customElements.define("page-search-songs", class extends PageSongs {
  static observedAttributes = ['query']

  getTitle() {
    return `Recherche > ${this.getAttribute('query')}`;
  }

  async getSongsData() {
    const query = this.getAttribute('query')
    return search(query)
  }
})

