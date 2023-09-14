import load from "./modules/load";
import viewport from "./modules/viewport";

viewport();

window.addEventListener( "DOMContentLoaded", load, {once: true}, true );
window.addEventListener( "resize", viewport );