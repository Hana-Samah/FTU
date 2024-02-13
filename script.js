const counterElement = document.querySelector('.counter');

// Check if a visit count is stored in localStorage
let count = localStorage.getItem('visitorCount');

// If not, initialize it to 0
if (!count) {
  count = 0;
} else {
  // Otherwise, parse the string to a number
  count = parseInt(count);
}

// Increment the count
count++;

// Update the localStorage
localStorage.setItem('visitorCount', count);

// Display the count
counterElement.innerText =  count;

document.getElementById('go-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor link behavior
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});