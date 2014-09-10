var smart_url_copy = function(){
  var title = document.getElementsByTagName('title')[0];
  this.smart_url = title.innerHTML + '\r\n' + location.href;
}

smart_url_copy.prototype.run = function(){
  // 
  var body = document.getElementsByTagName('body');
  var alertDiv = document.createElement("div");
  alertDiv.innerHTML = "点击我复制";
  alertDiv.style = "position:fixed;top:10px;right:50px;z-index:9999;outline:#00ff00 solid"
  body.appendChild(alertDiv);
  var client = new ZeroClipboard(alertDiv);
  client.setText(this.smart_url);
  client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
      client.destroy();
      body.removeChild(alertDiv);
    });
  });
}

window.smart_url_copy = new smart_url_copy();
window.smart_url_copy.run();