let images = [];
let currentIndex = 0;

window.onload = () => {
  images = document.querySelectorAll(".gallery img");

  // Download button
  document.getElementById("downloadBtn").onclick = function () {
    let imgSrc = document.getElementById("lightbox-img").src;
    let a = document.createElement("a");
    a.href = imgSrc;
    a.download = "image.jpg";
    a.click();
  };
};

/* LIGHTBOX OPEN */
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;

  images = document.querySelectorAll(".gallery img");
  currentIndex = Array.from(images).indexOf(img);
}

/* CLOSE */
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* NEXT / PREV */
function changeImage(step) {
  currentIndex += step;

  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;

  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* FILTER */
function filterImages(category) {
  let boxes = document.querySelectorAll(".img-box");

  boxes.forEach(box => {
    if (category === "all" || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

/* SEARCH */
function searchImages() {
  let input = document.getElementById("search").value.toLowerCase();
  let boxes = document.querySelectorAll(".img-box");

  boxes.forEach(box => {
    let img = box.querySelector("img").src.toLowerCase();
    if (img.includes(input)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}

/* LIKE BUTTON */
function likeImage(btn) {
  if (btn.style.color === "red") {
    btn.style.color = "white";
  } else {
    btn.style.color = "red";
  }
}

/* KEYBOARD NAVIGATION */
document.addEventListener("keydown", (e) => {
  if (document.getElementById("lightbox").style.display === "flex") {
    if (e.key === "ArrowRight") changeImage(1);
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "Escape") closeLightbox();
  }
});
