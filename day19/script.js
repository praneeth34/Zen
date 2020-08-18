countDown(10, "status");
function countDown(secs, elem) {
  var element = document.getElementById(elem);
  element.innerHTML = `${secs}`;
  element.setAttribute(
    "style",
    "font-family: 'Rubik Mono One', sans-serif;, cursive;font-size:100px;"
  );
  if (secs <= 0) {
    clearTimeout(timer);
    element.innerHTML =
      "<h2><span id='orange'>Happy</span><span id='white'> Independence</span><span id='green'> day</span></h2>";
    element.setAttribute(
      "style",
      "font-family: 'Chewy', cursive;font-size:4em;text-shadow: 2px 2px 4px #000000;"
    );
  }
  secs--;
  var timer = setTimeout("countDown(" + secs + ',"' + elem + '")', 1000);
}
