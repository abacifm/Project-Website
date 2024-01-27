document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelector('.slides');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;
  let slideInterval;

  // Function to show the current slide
  function showSlide(index) {
      const offset = -index * 100 + '%';
      slides.style.transform = 'translateX(' + offset + ')';
  }

  // Function to show the next slide
  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.children.length;
      showSlide(currentIndex);
  }

  // Event listener for the previous button
  prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
      showSlide(currentIndex);
  });

  // Event listener for the next button
  nextBtn.addEventListener('click', showNextSlide);

  // Auto slide every 5000 milliseconds (5 seconds)
  slideInterval = setInterval(showNextSlide, 5000);

  // Pause the auto slide when mouse enters the slider
  slides.addEventListener('mouseenter', function () {
      clearInterval(slideInterval);
  });

  // Resume auto slide when mouse leaves the slider
  slides.addEventListener('mouseleave', function () {
      slideInterval = setInterval(showNextSlide, 5000);
  });
});
