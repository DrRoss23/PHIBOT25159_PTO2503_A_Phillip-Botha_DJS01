import { podcasts } from '../data.js';
import { formatDate } from './format.js';
import { getGenreLookup } from './genres.js';

const genreById = getGenreLookup();

/**
 * Render all podcasts to the #cards container.
 * User stories covered: list, cover, title, seasons, genres, last updated.
 */
export function renderAll(){
  renderCards(podcasts);
}

/**
 * Render a list of podcast objects to the #cards container.
 * @param {Array<object>} list
 */
export function renderCards(list){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  for (const p of list){
    container.appendChild(createCard(p));
  }
}

/**
 * Create a single podcast card element.
 * @param {object} p
 * @param {number} p.id
 * @param {string} p.title
 * @param {string} p.description
 * @param {number} p.seasons
 * @param {string} p.image
 * @param {number[]} p.genres
 * @param {string} p.updated
 * @returns {HTMLElement}
 */
function createCard(p){
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('role', 'listitem');
  card.tabIndex = 0;

  const img = document.createElement('img');
  img.src = p.image;
  img.alt = `${p.title} cover`;

  const body = document.createElement('div');
  body.className = 'card-body';

  const h3 = document.createElement('h3');
  h3.className = 'card-title';
  h3.textContent = p.title;

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.textContent = `📚 ${p.seasons} ${p.seasons === 1 ? 'season' : 'seasons'} • Updated ${formatDate(p.updated)}`;

  const chips = document.createElement('div');
  chips.className = 'chips';
  for (const id of p.genres){
    const chip = document.createElement('span');
    chip.className = 'chip';
    chip.textContent = genreById[id] ?? 'Unknown';
    chips.appendChild(chip);
  }

  body.append(h3, meta, chips);
  card.append(img, body);

  // Phase 2 will implement modal open. For now, just log for verification.
  card.addEventListener('click', () => console.log('Open modal later for:', p.title));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });

  return card;
}

