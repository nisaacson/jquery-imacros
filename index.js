module.exports = function(inputURL) {
  iimPlay('CODE: CLEAR');
  if ($ !== undefined) {
    // jquery already loaded
    return true;
  }
  var jqueryURL = inputURL || 'http://code.jquery.com/jquery.min.js'
  var result = loadScriptAtURL(jqueryURL);
  return result;
}


function loadScriptAtURL(url) {

  var request = new XMLHttpRequest();
  var async = false;
  request.open('GET', url, async);

  request.send();
  // because of "false" above, will block until the request is done and status
  // is available. Not recommended, however it works for simple cases.
  if (request.status !== 200) {
    var message = 'an error occurred while loading script at url: ' + url +', status: ' + request.status;
    iimDisplay(message);
    return false;
  }
  eval(request.response);
  return true;
}
