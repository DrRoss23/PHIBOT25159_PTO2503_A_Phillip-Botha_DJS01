// modules/modal/focusTrap.js

/**
 * Setup a simple focus trap on a container.
 * @param {HTMLElement} container The element that contains focusable nodes.
 * @returns {() => void} cleanup function to remove listeners.
 */
export function trapFocus(container){
  const focusables = container.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const list = Array.from(focusables).filter(el => !el.hasAttribute('disabled'));
  if (list.length === 0) return () => {};

  function onKeyDown(e){
    if (e.key !== 'Tab') return;
    const first = list[0];
    const last = list[list.length - 1];

    if (e.shiftKey && document.activeElement === first){
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last){
      e.preventDefault();
      first.focus();
    }
  }

  container.addEventListener('keydown', onKeyDown);
  return () => container.removeEventListener('keydown', onKeyDown);
}
