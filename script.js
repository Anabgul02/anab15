document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the default form submission
      // You can add code here to handle form submission, e.g., send data to a server
      alert("Form submitted!"); // For demonstration, just display an alert
    });
  });
  