// modules/rendercards.js
import { podcasts } from '../data.js';
import { formatDate } from './format.js';
import { getGenreLookup } from './genres.js';
import { openModal } from './modal/openModal.js';

const genreById = getGenreLookup();

/** Render all podcasts to the #cards container. */
export function renderAll(){ renderCards(podcasts); }

/** Render a list of podcast objects to the #cards container. */
export function renderCards(list){
  const container = document.getElementById('cards');
  container.innerHTML = '';
  for (const p of list){ container.appendChild(createCard(p)); }
}

/** Create a single podcast card element. */
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

  // Open modal on click/keyboard
  card.addEventListener('click', () => openModal(String(p.id), card));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(String(p.id), card); }
  });

  return card;
}
