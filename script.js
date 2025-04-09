// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Change icon based on menu state
  const icon = menuToggle.querySelector('i');
  if (mobileMenu.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Services Carousel
const carousel = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
let slideWidth = 100; // Default to 100% for mobile
let slidesPerView = 1; // Default to 1 for mobile

// Update carousel based on screen size
function updateCarousel() {
  if (window.innerWidth >= 1024) {
    slidesPerView = 3;
    slideWidth = 100 / 3;
  } else if (window.innerWidth >= 640) {
    slidesPerView = 2;
    slideWidth = 50;
  } else {
    slidesPerView = 1;
    slideWidth = 100;
  }
  
  // Update slide widths
  slides.forEach(slide => {
    slide.style.flex = `0 0 ${slideWidth}%`;
  });
  
  // Reset position if needed
  if (currentIndex > slides.length - slidesPerView) {
    currentIndex = slides.length - slidesPerView;
  }
  
  updateCarouselPosition();
}

// Update carousel position
function updateCarouselPosition() {
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Next slide
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - slidesPerView) {
    currentIndex++;
    updateCarouselPosition();
  }
});

// Previous slide
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarouselPosition();
  }
});

// Initialize carousel
updateCarousel();

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // In a real implementation, you would send the form data to a server
  // For this example, we'll just show an alert
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});