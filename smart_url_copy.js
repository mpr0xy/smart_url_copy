var smart_url_copy = function(){
  var title = document.getElementsByTagName('title')[0];
  this.smart_url = title.innerHTML + '\r\n' + location.href;
}

smart_url_copy.prototype.run = function(){
  // 
  var body = document.getElementsByTagName('body')[0];
  var alertDiv = document.createElement("div");
  alertDiv.innerHTML = "点击我复制";
  alertDiv.style.position = "fixed";
  alertDiv.style.top = "20px";
  alertDiv.style.left = "40%";
  alertDiv.style.zIndex = "9999";
  alertDiv.style.backgroundColor = "#019875";
  alertDiv.style.fontSize = "40px";
  alertDiv.style.height = "80px";
  alertDiv.style.padding = "10px";
  body.appendChild(alertDiv);
  var client = new ZeroClipboard(alertDiv);
  client.setText(this.smart_url);
  client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
      client.destroy();
      alertDiv.innerHTML = "复制成功";
      setTimeout(function(){
        body.removeChild(alertDiv);
      }, 5000);
    });
  });
}

window.smart_url_copy = new smart_url_copy();
window.smart_url_copy.run();