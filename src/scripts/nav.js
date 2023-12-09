// import Astro from 'astro';

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('Current URL: ', Astro.request.url);
//       const navLinks = document.querySelectorAll(".navbar a");
//       const currentURL = Astro.request.url; // Use Astro's request.url
//       navLinks.forEach(link => {
//         if (link.href === currentURL) {
//           link.classList.add("active");
//         } else {
//           link.classList.remove("active");
//         }
//       });
//     }
//   });
// }, { root: null, rootMargin: "0px 0px 0px 0px", threshold: 0.5 });

// const navLinks = document.querySelectorAll(".navbar a");
// navLinks.forEach(link => observer.observe(link));
