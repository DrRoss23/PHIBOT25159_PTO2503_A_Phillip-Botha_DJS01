import { genres } from '../data.js';

/**
 * Build a simple genre lookup: { [id]: "Genre Name" }.
 * Using a plain object keeps it beginner-friendly.
 * @returns {{[key:number]: string}}
 */
export function getGenreLookup(){
  const out = {};
  for (const g of genres) out[g.id] = g.title;
  return out;
}

