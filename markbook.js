(function(){
  
  if (typeof ZeroClipboard === 'undefined'){
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = '//zeroclipboard.org/javascripts/zc/v2.1.6/ZeroClipboard.js';
    scr.onload = script.onreadystatechange = function(){
      if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'){
        loadSmartJs();
      }
    };
    document.getElementsByTagName('head')[0].appendChild(scr);
  }
  else if (window.smart_url_copy){
    window.smart_url_copy.run();
  }
  else{
    loadSmartJs();
  }

  function loadSmartJs(){
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = '//raw.githubusercontent.com/mpr0xy/smart_url_copy/master/smart_url_copy.js';
    document.getElementsByTagName('body')[0].appendChild(scr);
  }
  
})();