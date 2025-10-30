// modules/modal/openModal.js
import { podcasts, seasons } from '../../data.js';
import { renderModal } from './renderModal.js';
import { trapFocus } from './focusTrap.js';
import { closeModal, setLastOpener } from './closeModal.js';

/**
 * Open modal for a given podcast id.
 * @param {string|number} podcastId
 * @param {HTMLElement} openerEl - element that triggered the modal (for focus restoration)
 */
export function openModal(podcastId, openerEl){
  const pod = podcasts.find(p => String(p.id) === String(podcastId));
  if (!pod) return;

  // seasons: array like [{ id, seasonDetails: [{ title, episodes, subtitle? }, ...] }, ...]
  const seasonsEntry = seasons.find(s => String(s.id) === String(podcastId));
  const seasonList = (seasonsEntry?.seasonDetails || []).map(s => ({
    title: s.title,
    episodes: s.episodes,
    subtitle: s.subtitle || ''
  }));

  const { overlay, closeBtn, firstFocusable } = renderModal(pod, seasonList);
  const root = document.getElementById('modal-root') || document.body;

  // Lock background scroll
  document.body.style.overflow = 'hidden';

  // Mount
  root.appendChild(overlay);

  // Focus management
  setLastOpener(openerEl || null);
  firstFocusable.focus();

  const cleanupTrap = trapFocus(overlay);

  // Close interactions
  function onOverlayClick(e){
    if (e.target?.dataset?.modalOverlay === 'true'){ closeAndCleanup(); }
  }
  function onKey(e){ if (e.key === 'Escape') closeAndCleanup(); }
  function onCloseClick(){ closeAndCleanup(); }

  function closeAndCleanup(){
    cleanupTrap();
    window.removeEventListener('keydown', onKey);
    overlay.removeEventListener('click', onOverlayClick);
    closeBtn.removeEventListener('click', onCloseClick);
    closeModal();
  }

  overlay.addEventListener('click', onOverlayClick);
  window.addEventListener('keydown', onKey);
  closeBtn.addEventListener('click', onCloseClick);
}

