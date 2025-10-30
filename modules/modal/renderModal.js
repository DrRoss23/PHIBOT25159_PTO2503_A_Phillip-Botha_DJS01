// modules/modal/renderModal.js
import { formatDate } from '../format.js';
import { getGenreLookup } from '../genres.js';

/**
 * Create a modal overlay for a podcast.
 * Matches the intended UI:
 *  - Title in the header
 *  - Intro section: square cover (left) + description (right) on desktop
 *  - Tags + Last updated below intro
 *  - Seasons list with right-aligned episode counts
 *
 * @param {object} podcast
 * @param {Array<{title:string, episodes:number, subtitle?:string}>} seasonList
 * @returns {{overlay:HTMLElement, closeBtn:HTMLButtonElement, firstFocusable:HTMLElement}}
 */
export function renderModal(podcast, seasonList){
  const genres = getGenreLookup();

  // Overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.dataset.modalOverlay = 'true';

  // Modal container
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  // IDs for ARIA labelling
  const titleId = `dialog-title-${podcast.id}`;
  const descId = `dialog-desc-${podcast.id}`;
  modal.setAttribute('aria-labelledby', titleId);
  modal.setAttribute('aria-describedby', descId);

  /* Header */
  const header = document.createElement('div');
  header.className = 'modal__header';

  const h2 = document.createElement('h2');
  h2.className = 'modal__title';
  h2.id = titleId;
  h2.textContent = podcast.title;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'modal__close';
  closeBtn.setAttribute('aria-label', 'Close dialog');
  closeBtn.innerHTML = '×';

  header.append(h2, closeBtn);

  /* Scrollable body */
  const scroll = document.createElement('div');
  scroll.className = 'modal__scroll';

  // Intro grid: cover + description
  const intro = document.createElement('div');
  intro.className = 'intro';

  const media = document.createElement('div');
  media.className = 'intro__media';
  const img = document.createElement('img');
  img.src = podcast.image;
  img.alt = `${podcast.title} cover`;
  media.appendChild(img);

  const descWrap = document.createElement('div');
  descWrap.className = 'intro__desc';

  const descTitle = document.createElement('p');
  descTitle.className = 'intro__desc-title';
  descTitle.textContent = 'Description';

  const desc = document.createElement('p');
  desc.className = 'intro__desc-text';
  desc.id = descId;
  desc.textContent = podcast.description;

  descWrap.append(descTitle, desc);
  intro.append(media, descWrap);

  // Meta (tags + updated)
  const metaBlock = document.createElement('div');
  metaBlock.className = 'meta-block';

  const tags = document.createElement('div');
  tags.className = 'tags';
  for (const id of podcast.genres){
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = genres[id] ?? 'Unknown';
    tags.appendChild(tag);
  }

  const updated = document.createElement('span');
  updated.className = 'updated';
  updated.textContent = `Last updated: ${formatDate(podcast.updated)}`;

  metaBlock.append(tags, updated);

  // Seasons title + list
  const seasonsTitle = document.createElement('p');
  seasonsTitle.className = 'section-title';
  seasonsTitle.textContent = 'Seasons';

  const seasonsPanel = document.createElement('div');
  seasonsPanel.className = 'seasons-panel';

  for (const s of seasonList){
    const row = document.createElement('div');
    row.className = 'season';

    const left = document.createElement('div');
    left.className = 'season__left';

    const t = document.createElement('h3');
    t.className = 'season__title';
    t.textContent = s.title;

    const sub = document.createElement('p');
    sub.className = 'season__subtitle';
    sub.textContent = s.subtitle || ' '; // keeps row height like your mock

    const count = document.createElement('span');
    count.className = 'season__count';
    count.textContent = `${s.episodes} ${s.episodes === 1 ? 'episode' : 'episodes'}`;

    left.append(t, sub);
    row.append(left, count);
    seasonsPanel.appendChild(row);
  }

  // Compose
  scroll.append(intro, metaBlock, seasonsTitle, seasonsPanel);
  modal.append(header, scroll);
  overlay.appendChild(modal);

  // Focus target
  const firstFocusable = closeBtn;

  return { overlay, closeBtn, firstFocusable };
}


