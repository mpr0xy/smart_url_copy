这个收藏夹工具用来复制当前页面url时带上标题

```
(function(){
  
  if (typeof ZeroClipboard === 'undefined'){
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = '//zeroclipboard.org/javascripts/zc/v2.1.6/ZeroClipboard.js';
    scr.onload = scr.onreadystatechange = function(){
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
```

把下面代码添加到收藏夹名字为smart_url_copy
```
javascript:(function(){if(typeof ZeroClipboard==='undefined'){var scr=document.createElement('script');scr.type='text/javascript';scr.src='//zeroclipboard.org/javascripts/zc/v2.1.6/ZeroClipboard.js';scr.onload=scr.onreadystatechange=function(){if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){loadSmartJs()}};document.getElementsByTagName('head')[0].appendChild(scr)}else if(window.smart_url_copy){window.smart_url_copy.run()}else{loadSmartJs()}function loadSmartJs(){var scr=document.createElement('script');scr.type='text/javascript';scr.src='//raw.githubusercontent.com/mpr0xy/smart_url_copy/master/smart_url_copy.js';document.getElementsByTagName('body')[0].appendChild(scr)}})();
```

使用时，点击收藏夹上的smart_url_copy,页面上会显示出来一个按钮，按照提示点击即可，内容就已经复制到剪切版.