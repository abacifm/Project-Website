// this will be the image slider on the home page section
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
var timer; // initialize timer variable
const interval = 3000; // duration(speed) of the slider

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].classList.remove('active');
  }

  currentImg = (n !== undefined) ? n : (currentImg + 1) % imgs.length; // update the index number

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].classList.add('active');
}

function startSlider() {
  timer = setInterval(changeSlide, interval);
}

function stopSlider() {
  clearInterval(timer);
}

changeSlide(); // Start the slideshow immediately
startSlider(); // Set interval for automatic changes
