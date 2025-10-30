import { genres } from '../data.js';

/**
 * Build { [id]: title } lookup.
 * @returns {{[key:number]: string}}
 */
export function getGenreLookup(){
  const out = {};
  for (const g of genres) out[g.id] = g.title;
  return out;
}
