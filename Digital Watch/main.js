window.addEventListener('load', () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carouselContent = document.querySelector('.carousel-content');
  const images = document.querySelectorAll('.carousel img');

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img) => (img.style.display = 'none'));
    images[index].style.display = 'block';
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);

  showImage(currentIndex);
});
