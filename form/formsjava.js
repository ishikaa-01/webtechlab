function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Validate required fields
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert('Please fill in all required fields.');
      return false;
    }
  
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate phone number format (e.g., 123-45-678)
    const phonePattern = /^\d{4}\d{2}\d{4}$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number (e.g., 123-45-678).');
      return false;
    }
  
    return true;
  }
  
  function submitForm() {
    if (validateForm()) {
      const confirmed = confirm('Are you sure you want to submit the form?');
  
      if (confirmed) {
        // In a real scenario, you can submit the form data to the server here
        showResponse('Form submitted successfully!');
        resetForm();
      }
    }
  }
  
  function resetForm() {
    document.getElementById('contactForm').reset();
  }
  
  function showResponse(message) {
    alert(message);
  }

  function resetForm() {
    document.getElementById('contactFsorm').reset();
  }