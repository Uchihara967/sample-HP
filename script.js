document.addEventListener("DOMContentLoaded", () => {

  const images = [
    "./img/home_img1.jpg",
    "./img/home_img2.jpg",
    "./img/home_img3.jpg"
  ];

  const heroSection = document.getElementById("hero");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentImageIndex = 0;

  const changeBackgroundImage = () => {
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
  };

  leftArrow.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeBackgroundImage();
  });

  rightArrow.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackgroundImage();
  });

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeBackgroundImage();
  }, 3000);

  changeBackgroundImage();
});
