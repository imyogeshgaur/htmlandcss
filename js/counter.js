function animateValue(id, start, end, duration) {
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.innerHTML = current + "+";
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}
animateValue("value1", 0, 100, 8000);
animateValue("value2", 0, 200, 8000);
animateValue("value3", 0, 600, 8000);
