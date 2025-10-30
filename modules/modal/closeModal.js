// modules/modal/closeModal.js

let lastOpener = null;

/**
 * Remember the element that opened the modal (to restore focus later).
 * @param {HTMLElement} el
 */
export function setLastOpener(el){
  lastOpener = el;
}

/**
 * Close and remove the modal overlay if present.
 */
export function closeModal(){
  const overlay = document.querySelector('.modal-overlay');
  if (!overlay) return;
  overlay.remove();
  document.body.style.overflow = ''; // restore scroll

  // restore focus
  if (lastOpener && typeof lastOpener.focus === 'function'){
    lastOpener.focus();
  }
  lastOpener = null;
}
