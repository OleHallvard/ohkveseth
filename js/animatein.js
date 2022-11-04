// intro elements
(function () {
  var elements;
  var elementprogress;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".intro-animate-in");
    elementprogress = document.querySelectorAll(".progress-step");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var elementprog = elementprogress[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -400) {
        element.classList.add("intro-animation");
        element.classList.remove("intro-animate-in");
        elementprog.classList.add("color");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
})();

// remove progressbar
(function () {
  var elements;
  var elementprogress;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".remove-progressbar");
    elementprogress = document.querySelectorAll(".progressbar");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var elementprog = elementprogress[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -400) {
        elementprog.classList.add("remove");
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
