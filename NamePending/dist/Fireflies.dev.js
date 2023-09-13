"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var quantity = 15;
  var container = document.querySelector(".container");

  for (var i = 1; i <= quantity; i++) {
    var firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.left = "".concat(Math.random() * 100, "%");
    firefly.style.top = "".concat(Math.random() * 100, "%"); // Assign the drift animation

    firefly.style.animationName = "drift";
    firefly.style.animationDuration = "3s"; // Adjust the duration as needed

    firefly.style.animationIterationCount = "infinite";
    firefly.style.animationDelay = "".concat(Math.random() * 3, "s"); // Append the firefly to the container

    container.appendChild(firefly);
  }
});
//# sourceMappingURL=Fireflies.dev.js.map
