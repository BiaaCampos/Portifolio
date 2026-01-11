// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll('.links-div');

//   links.forEach(link => {
//     link.addEventListener('click', function(e) {
//       e.preventDefault(); 

//       const targetId = this.getAttribute('href').substring(1); 
//       const targetSection = document.getElementById(targetId);

//       targetSection.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     });
//   });
// });