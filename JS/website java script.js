
document.addEventListener("DOMContentLoaded", function() {
    const track = document.querySelector(".carousel-track");
    const prev = document.querySelector(".carousel-prev");
    const next = document.querySelector(".carousel-next");
    let index = 0;

    next.addEventListener("click", function() {
        if (index < 9) { 
            index++;
            track.style.transform = `translateX(-${index * 320}px)`;
        }
    });

    prev.addEventListener("click", function() {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * 320}px)`;
        }
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting immediately

        // Check if all fields are filled
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comments = document.getElementById('comments').value;

        if (name && email && comments) {
            // Show the "Thank You" message and hide the form
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        } else {
            alert('Please fill in all fields before submitting.');
        }
    });
});



function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
  }

  function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "1" && password === "1") {
      window.location.href = "act4.html";
    } else {
      alert("Please enter 1 as your username and password");
    }
  }

  function handleRegister(event) {
    event.preventDefault();
    alert("Registered successfully! Redirecting to home page...");
    window.location.href = "act4.html";
  }