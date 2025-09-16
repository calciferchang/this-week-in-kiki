const hoverElements = document.querySelectorAll(".internal-link");

hoverElements.forEach((element) => {
  const video = element.querySelector("video");

  element.addEventListener("mousemove", (e) => {
    video.style.left =
      Math.min(e.clientX + 10, window.innerWidth - video.offsetWidth - 16) +
      "px";
    video.style.top =
      Math.min(e.clientY + 10, window.innerHeight - video.offsetHeight - 16) +
      "px";
  });

  element.addEventListener("mouseenter", () => {
    video.style.display = "block";
    video.style.position = "fixed";
  });

  element.addEventListener("mouseleave", () => {
    video.style.display = "none";
  });
});
