function navigateToPage2() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
  }
  
  function navigateToPage3() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
  }
  
  function chooseAvatar() {
    // Add logic to choose an avatar image
    // ...
  }
  
  function navigateToPage4() {
    const location = document.getElementById('location').value;
    // Perform any necessary validation or processing
    // ...
    document.getElementById('page3').classList.add('hidden');
    document.getElementById('page4').classList.remove('hidden');
  }
  
  function navigateToPage5() {
    const location = document.getElementById('location').value;
    // Perform any necessary validation or processing
    // ...
    document.getElementById('page4').classList.add('hidden');
    document.getElementById('page5').classList.remove('hidden');
  }
  
  function createAccount(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('terms-checkbox').checked;
  
    // Perform any necessary validation or processing
    // ...
  
    if (termsChecked) {
      // Redirect the user to the desired page after successful account creation
      window.location.href = "success.html";
    } else {
      alert("Please agree to the terms and conditions to create an account.");
    }
  }