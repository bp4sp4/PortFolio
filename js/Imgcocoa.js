document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".work__article_imgs");
  const popup = document.getElementById("imagePopup2");
  const popupImage = document.getElementById("popupImage2");
  const overlay = document.getElementById("overlay2");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      const src = this.getAttribute("src");
      popupImage.setAttribute("src", src);
      popup.style.display = "block";
      overlay.style.display = "block";
    });
  });

  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
