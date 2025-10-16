document.addEventListener("DOMContentLoaded", () => {
  const frame = document.getElementById("portfolio-video");
  const videoContainer = document.getElementById("video-container");
  const gallery = document.getElementById("events-gallery");
  const items = document.querySelectorAll(".portfolio-left li");

  items.forEach(li => {
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      const video = li.dataset.video;
      const isGallery = li.dataset.gallery === "events";

      // remove highlight
      items.forEach(x => x.classList.remove("active"));
      li.classList.add("active");

      if (isGallery) {
        // Show images, hide video
        videoContainer.style.display = "none";
        gallery.style.display = "grid";
      } else if (video) {
        // Show video, hide images
        gallery.style.display = "none";
        videoContainer.style.display = "block";
        frame.src = video;
      }
    });
  });

  // Highlight the first item on load and show video
  if (items.length > 0) {
    items[0].classList.add("active");
  }
});
