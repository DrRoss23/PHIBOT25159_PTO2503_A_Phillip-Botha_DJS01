// modules/uiHelpers.js

/**
 * Query a single element.
 * @param {string} sel
 * @param {ParentNode} [scope=document]
 * @returns {Element|null}
 */
export function qs(sel, scope = document) {
  return scope.querySelector(sel);
}

/**
 * Remove all children of a node.
 * @param {HTMLElement} el
 */
export function clear(el) {
  if (el) el.innerHTML = '';
}

/**
 * Create an element with optional class and text.
 * @param {keyof HTMLElementTagNameMap} tag
 * @param {string} [className]
 * @param {string} [text]
 * @returns {HTMLElement}
 */
export function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}
