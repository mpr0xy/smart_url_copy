(function(){
  var title = document.getElementsByTagName('title')[0];
  var body = document.getElementsByTagName('body')[0];
  var smart_copy = title.innerHTML + '\r\n' + location.href
  var client = new ZeroClipboard(body);
  client.setText(smart_copy);
  client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
      client.destroy()
    });
  });
})();