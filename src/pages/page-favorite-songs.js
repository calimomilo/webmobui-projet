import { getFavorites } from '../local-storage.js';
import { PageSongs } from './page-songs.js';

customElements.define("page-favorite-songs", class extends PageSongs {

  getTitle() {
    return `Favoris`;
  }

  async getSongsData() {
    return getFavorites();
  }
  
})
