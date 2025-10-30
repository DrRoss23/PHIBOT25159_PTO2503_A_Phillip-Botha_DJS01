import { renderAll } from './modules/rendercards.js';

/**
 * Phase 1 bootstrap: render podcast previews to the landing page.
 * No filtering or modal behavior is included at this stage.
 */
function start(){
  renderAll();
}

start();
