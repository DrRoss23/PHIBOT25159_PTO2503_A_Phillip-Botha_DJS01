/**
 * Return a simple, human-readable date like "Jan 15, 2025".
 * @param {string} iso - ISO 8601 date string.
 * @returns {string}
 */
export function formatDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

