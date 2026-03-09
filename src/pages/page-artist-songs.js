import { getSongs } from '../api.js'
import { PageSongs } from './page-songs.js';

customElements.define("page-artist-songs", class extends PageSongs {
  static observedAttributes = ['artist-id']

  getTitle() {
    return `Artistes > ${this.songs[0].artist.name}`;
  }

  async getSongsData() {
    const artistId = this.getAttribute('artist-id')
    return getSongs(artistId)
  }
})
