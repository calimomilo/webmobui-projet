import { getFavorite, toggleFavorite } from "../local-storage.js";
import { playSong } from "../player.js";

export class PageSongs extends HTMLElement {
  static observedAttributes = []
  songs = []
    
  connectedCallback() {
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  render() {
    this.getSongsData()
    .then((songs) => {
      this.songs = songs
      this.innerHTML = `
        <h4>${this.getTitle()}</h4>

        <div class="list">
        </div>
      `

      const list = this.querySelector('.list');

      if (list.length === 0) {
        list.textContent = "Aucun résultat."
      }

      songs.forEach((song) => {
        const songItem = document.createElement('song-item')
        songItem.setAttribute('title', song.title)
        songItem.setAttribute('favorite', getFavorite(song.id) ? 'true' : 'false')
        songItem.addEventListener('play_click', () => playSong(song, songs))
        songItem.addEventListener('favorite_click', () => {
          toggleFavorite(song);
          songItem.setAttribute('favorite', getFavorite(song.id) ? 'true' : 'false');
        })
        list.append(songItem)
      })
    })
  }

  getSongsData() {
    console.log("method not defined in child element");
    return [];
  }

  getTitle() {
    console.log("method not defined in child element");
    return "";
  }
}
