// intro elements
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".intro-animate-in");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -400) {
        element.classList.add("intro-animation");
        element.classList.remove("intro-animate-in");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// project thumbs
(function () {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();
