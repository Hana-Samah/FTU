// Check if the user's browser supports local storage
if (typeof(Storage) !== "undefined") {
  // Get the current date
  let today = new Date();
  // Get the stored counter for today's date, or set it to 0 if it doesn't exist
  let dailyCounter = localStorage.getItem(today.toISOString().split("T")[0]) || 0;
  // Increment the counter
  dailyCounter++;
  // Store the updated counter for today's date
  localStorage.setItem(today.toISOString().split("T")[0], dailyCounter);
  // Display the counter on the web page
  document.getElementById("dailyCounter").innerHTML = dailyCounter;
} else {
  document.getElementById("dailyCounter").innerHTML = "Local storage is not supported by your browser.";
}
//////////////////////////////////////////////////////////////////
const counterElement = document.getElementById('counter');
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
/////////////////////////////////////////////////////////////////
document.getElementById('go-to-top').addEventListener('click', function(e) {
e.preventDefault(); // Prevent default anchor link behavior
window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});