document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("portfolio-video");
  const items = document.querySelectorAll(".portfolio-left li");

  items.forEach(li => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      const url = li.dataset.video;
      if (!url) return;

      frame.src = url;

      // remove highlight
      items.forEach(x => x.classList.remove("active"));
      li.classList.add("active");
    });
  });

  // Highlight the first item on load (IVEY)
  if (items.length > 0) {
    items[0].classList.add("active");
  }
});
