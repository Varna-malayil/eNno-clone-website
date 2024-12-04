$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000, // Change the time as per your need
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
            },
            768: {
                items: 2 // Show 2 items on medium screens
            },
            992: {
                items: 3 // Show 3 items on large screens
            }
        }
    });
});
  
  
  /-----for nav bar shadow--------/
  const navbar = document.querySelector('nav.fixed-top');
  
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  
  
  
  // portfolio

 // Wait for the DOM to load before adding event listeners
 document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.navbar-nav .nav-item');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    // Function to show or hide items based on the filter
    function filterGallery(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block'; // Show item
            } else {
                item.style.display = 'none'; // Hide item
            }
        });
    }
  
    // Event listeners for filter buttons
    filterItems.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = filter.getAttribute('data-filter');
            filterGallery(category);
        });
    });
  });