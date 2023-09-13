document.addEventListener("DOMContentLoaded", function () {
  const quantity = 15;
  const container = document.querySelector(".container");

  for (let i = 1; i <= quantity; i++) {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.top = `${Math.random() * 100}%`;

    // Assign the drift animation
    firefly.style.animationName = "drift";
    firefly.style.animationDuration = "3s"; // Adjust the duration as needed
    firefly.style.animationIterationCount = "infinite";

    firefly.style.animationDelay = `${Math.random() * 3}s`;

    // Append the firefly to the container
    container.appendChild(firefly);
  }
});
