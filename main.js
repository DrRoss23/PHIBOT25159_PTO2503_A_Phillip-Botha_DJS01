// main.js
import { PodcastApp } from './modules/PodcastApp.js';

/**
 * Phase 3: bootstrap via a tiny controller class.
 * Keeps entrypoint readable and follows SRP.
 */
function start() {
  const app = new PodcastApp({ containerId: 'cards' });
  app.init();
}

start();
