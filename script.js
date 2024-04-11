// JavaScript for Dribbble Signup Form

// Function to create account
function createAccount(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Form validation and submission logic here
  // Example: 
  // Check if fields are filled
  // If filled, submit the form
  // If not, show error messages
  
  // If account creation is successful, navigate to the next step
  navigateToPage2();
}

// Function to upload avatar
function uploadAvatar(event) {
  // Avatar upload logic here
  
  // If avatar upload is successful, navigate to the next step
  navigateToPage3();
}

// Function to navigate to page 2
function navigateToPage2() {
  // Hide current page
  document.getElementById('page1').classList.add('hidden');
  
  // Show page 2
  document.getElementById('page2').classList.remove('hidden');
}

// Function to navigate to page 3
function navigateToPage3() {
  // Hide current page
  document.getElementById('page2').classList.add('hidden');
  
  // Show page 3
  document.getElementById('page3').classList.remove('hidden');
}
