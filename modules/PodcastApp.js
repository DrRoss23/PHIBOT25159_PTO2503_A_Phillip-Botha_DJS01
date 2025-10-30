// modules/PodcastApp.js
import { getPodcasts } from './dataService.js';
import { renderCards } from './renderCards.js';

/**
 * @class PodcastApp
 * Small controller that bootstraps the app.
 * Responsibilities:
 *   - Fetch data (via dataService)
 *   - Render landing cards (via rendercards)
 * Non-responsibilities:
 *   - Modal rendering (handled by modal/ modules)
 *   - Data mutation/network calls (not in DJS01 scope)
 */
export class PodcastApp {
  /**
   * @param {{containerId?: string}} [options]
   */
  constructor(options = {}) {
    /** @type {string} */
    this.containerId = options.containerId ?? 'cards';
  }

  /**
   * Initialize the app: load data and render landing page.
   */
  init() {
    const list = getPodcasts(); // read-only array from data.js
    renderCards(list, this.containerId);
  }
}
