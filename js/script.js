
// function toggleNavbar() {
//     const navbar = document.querySelector('.navbar');
//     navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'block' : 'none';

//     const menuIcon = document.querySelector('.menu-icon');
//     menuIcon.classList.toggle('active', navbar.style.display === 'block');
// }

// function toggleNavbar() {
//     const navbar = document.querySelector('.navbar');
//     navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'block' : 'none';
  
//     const menuIcon = document.querySelector('.menu-icon');
//     menuIcon.classList.toggle('active', navbar.style.display === 'block');
  
//     // Add this part to change the color of the hamburger icon
//     menuIcon.style.color = (navbar.style.display === 'block') ? 'red' : 'blue'; // Change 'red' to your desired color
//   }
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'none' || navbar.style.display === '' ? 'block' : 'none';
  
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active', navbar.style.display === 'block');
  
    menuIcon.style.color = 'blue';
  }
  
  
