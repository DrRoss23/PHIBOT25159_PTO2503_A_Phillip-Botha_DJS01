// modules/dataService.js
import { podcasts, genres, seasons } from '../data.js';

/**
 * Very small "service" that exposes read-only data from data.js.
 * Keeping the surface area tiny makes it easy to mock or replace later.
 */

/** @returns {Array<object>} */
export function getPodcasts() {
  return podcasts;
}

/** @returns {Array<object>} */
export function getGenres() {
  return genres;
}

/**
 * Get season details for a given podcast id.
 * @param {string|number} podcastId
 * @returns {Array<{title:string, episodes:number, subtitle?:string}>}
 */
export function getSeasonsByPodcastId(podcastId) {
  const entry = seasons.find(s => String(s.id) === String(podcastId));
  return entry?.seasonDetails ?? [];
}
