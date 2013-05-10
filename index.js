/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

module.exports = (function() {
  try { 
    return !!window.WebGLRenderingContext && 
           !!document.createElement('canvas').getContext('experimental-webgl'); 
  } 
  catch(e) { 
    return false; 
  }
})();
