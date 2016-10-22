if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    	.register('./sw.js')
    	.then(function() { console.log('Registramos el SW, wiii'); })
    	.catch(function(e){ console.log("error",e); });
  }