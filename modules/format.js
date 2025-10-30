/** Return a simple date like "Jan 15, 2025". */
export function formatDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
