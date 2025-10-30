import { renderAll } from './modules/rendercards.js';   // your filename is "rendercards.js"
import { initFilter } from './modules/filter.js';

function start(){
  initFilter();
  renderAll();
}
start();