```
(function(){
  if (typeof ZeroClipboard === 'undefined'){
    var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = '//zeroclipboard.org/javascripts/zc/v2.1.6/ZeroClipboard.js';
    document.getElementsByTagName('head')[0].appendChild(scr);
  }
  var scr = document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = 'http://mpr0xy.github.io/smart_url_copy/smart_url_copy.js';
    document.getElementsByTagName('body')[0].appendChild(scr);  
})();
```

把下面代码添加到收藏夹名字为smart_url_copy
```
javascript:(function(){if (typeof ZeroClipboard === 'undefined'){var scr = document.createElement('script');scr.type = 'text/javascript';scr.src = '//zeroclipboard.org/javascripts/zc/v2.1.6/ZeroClipboard.js';document.getElementsByTagName('head')[0].appendChild(scr);}var scr = document.createElement('script');scr.type = 'text/javascript';scr.src = 'http://mpr0xy.github.io/smart_url_copy/smart_url_copy.js';document.getElementsByTagName('body')[0].appendChild(scr);})();
```

使用时，点击smart_url_copy再点击一下页面任意地方，内容就已经复制到剪切版．