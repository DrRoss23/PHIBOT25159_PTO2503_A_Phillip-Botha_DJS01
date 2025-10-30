import { formatDate } from './format.js';
import { getGenreLookup } from './genres.js';
import { podcasts } from '../data.js';

const genreById = getGenreLookup();

/**
 * Render a list of podcasts to #cards.
 * @param {Array<object>} list
 */
export function renderCards(list){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  for (const p of list){
    container.appendChild(createCard(p));
  }
}

/** Render all podcasts on load. */
export function renderAll(){
  renderCards(podcasts);
}

/** Build one card element. */
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

  card.addEventListener('click', () => console.log('Open modal later for:', p.title));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
  });

  return card;
}
