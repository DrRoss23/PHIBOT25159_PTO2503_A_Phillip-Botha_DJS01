import { podcasts } from '../data.js';
import { getGenreLookup } from './genres.js';
import { renderCards } from './rendercards.js';

/** Fill the genre dropdown and wire filtering. */
export function initFilter(){
  const select = document.getElementById('genreFilter');
  const lookup = getGenreLookup();

  // Add options
  for (const id in lookup){
    const opt = document.createElement('option');
    opt.value = id;
    opt.textContent = lookup[id];
    select.appendChild(opt);
  }

  // Filter behavior
  select.addEventListener('change', () => {
    if (select.value === 'all') { renderCards(podcasts); return; }
    const id = Number(select.value);
    renderCards(podcasts.filter(p => p.genres.includes(id)));
  });
}
