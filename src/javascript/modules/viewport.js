/**
 * Viewport
 * Measures & Sets VH & VW CSS Variables To Get Accurate Window Measurments Across All Browsers To Handle Compensating For Browser Or OS UI
 */

 import debounce from "./debounce";

 const dimensions = () => {
     let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
     let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     let vh = height * 0.01;
     let vw = width * 0.01;
     document.documentElement.style.setProperty( "--vh", `${vh}px` );
     document.documentElement.style.setProperty( "--vw", `${vw}px` );
 }
 
 const viewport = debounce( dimensions, 100 );
 
 export default viewport;