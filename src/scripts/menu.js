
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Add click event listener to hamburger icon
  hamburger.addEventListener('click', function () {
      // Toggle the 'expanded' class on the navigation links
      navLinks.classList.toggle('expanded');
  });
});




