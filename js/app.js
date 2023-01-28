// home-slider js
const slides = document.querySelectorAll(".slidee");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const homeElm = document.getElementById("home");
let currentSlide = 0;
let myVar;
prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 2;
  }
  changeSlide();
});
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > 2) {
    currentSlide = 0;
  }
  changeSlide();
});
function changeSlide() {
  slides.forEach((slide, idx) => {
    if (idx === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
function autoSlide() {
  changeSlide();
  if (currentSlide > 2) {
    currentSlide = 0;
  }
  myVar = setTimeout(() => {
    currentSlide++;
    if (currentSlide > 2) {
      currentSlide = 0;
    }
    autoSlide();
  }, 4500);
}
autoSlide();
homeElm.addEventListener("mouseover", () => {
  clearTimeout(myVar);
});
homeElm.addEventListener("mouseout", autoSlide);
// home-slider js end
// counter js
counter();
function counter() {
  const counterElms = document.querySelectorAll(".counterElm");
  counterElms.forEach((counter) => {
    counter.innerText = "0";
    const ceil = counter.getAttribute("data-ceil");
    updateCounter();
    function updateCounter() {
      let currentNum = +counter.innerText;
      let increment = Math.ceil(ceil / 20);
      currentNum = currentNum + increment;
      counter.innerText = currentNum;
      if (currentNum <= ceil) {
        setTimeout(updateCounter, 50);
      } else {
        counter.innerText = ceil;
      }
    }
  });
}
// counter js end
// customers
let current = 0;
let auto;
const customerImgs = document.querySelectorAll(
  ".customers-image-container img"
);
const testimonials = document.querySelectorAll(".testimonial");
const testimonialContainer = document.querySelector(".testimonial-container");
customerImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    current = e.currentTarget.dataset.target;
    changeTestimonial();
  });
});
function changeTestimonial() {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });
  customerImgs.forEach((image) => {
    image.classList.remove("active");
  });
  testimonials[current].classList.add("active");
  customerImgs[current].classList.add("active");
}
function autoTestimonial() {
  changeTestimonial();
  auto = setTimeout(() => {
    current++;
    if (current > 3) {
      current = 0;
    }
    autoTestimonial();
  }, 5000);
}
autoTestimonial();
testimonialContainer.addEventListener("mouseover", () => {
  clearTimeout(auto);
});
testimonialContainer.addEventListener("mouseout", () => {
  autoTestimonial();
});
// customers end
