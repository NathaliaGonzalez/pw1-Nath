function timedCount() {
  var i = 0;
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount()