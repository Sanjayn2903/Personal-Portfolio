
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navbar-links");

  if (!hamburger || !navLinks) {
    console.error("Element not found! Check IDs in your HTML.");
    return;
  }

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");

    // Prevent scrolling when menu is open
    document.body.style.overflow = navLinks.classList.contains("active")
      ? "hidden"
      : "";

    // Accessibility update
    hamburger.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("active")
    );
  });

  document.querySelectorAll(".navbar__links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
});


//ecommerce project
function openProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.add("show"); // Add class to trigger CSS animation
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("show"); // Remove class to hide modal
  document.body.style.overflow = ""; // Restore scroll
}

// Close modal when clicking outside the modal-content
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};

//blog app
function openBlogModal() {
  const modal = document.getElementById("blogModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  const modal = document.getElementById("blogModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Optional: Close when clicking outside modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("blogModal");
  if (event.target === modal) {
    closeBlogModal();
  }
});

//contact app
function openContactModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Close modal on clicking outside content
window.addEventListener("click", function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    closeContactModal();
  }
});


//weather--app

function openWeatherModal() {
  const modal = document.getElementById("weatherModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeWeatherModal() {
  const modal = document.getElementById("weatherModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("weatherModal");
  if (event.target === modal) {
    closeWeatherModal();
  }
});

//taxi-booking

function openTaxiModal() {
  const modal = document.getElementById("taxiModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeTaxiModal() {
  const modal = document.getElementById("taxiModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("taxiModal");
  if (event.target === modal) {
    closeTaxiModal();
  }
});


//car parking

function openParkingModal() {
  const modal = document.getElementById("parkingModal");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeParkingModal() {
  const modal = document.getElementById("parkingModal");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("parkingModal");
  if (event.target === modal) {
    closeParkingModal();
  }
});


//contact


// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   emailjs.sendForm("service_hkq6tvs", "template_clb7c4o", this)
//     .then(() => {
//       alert("Message sent successfully!");
//       this.reset(); // Reset form after success
//     }, (error) => {
//       alert("Failed to send message. Please try again.");
//       console.error("EmailJS Error:", error);
//     });
// });

// document.getElementById("contact-form").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Send main contact message to you
//   emailjs.sendForm("service_hkq6tvs", "template_clb7c4o", this)
//     .then(() => {
//       alert("Message sent successfully!");
//       this.reset(); // Reset form after success

//       // Prepare data for reply email to the user
//       const formData = new FormData(this);
//       const from_name = formData.get("from_name");   // Adjust field names as per your form inputs
//       const email = formData.get("email");

//       // Send reply email to user
//       emailjs.send("service_hkq6tvs", "template_0u7a9dj", {
//         to_name: from_name,
//         to_email: email,
//         // add any other dynamic template params your reply template needs
//       })
//       .then(() => {
//         console.log("Reply email sent to user successfully.");
//       })
//       .catch((err) => {
//         console.error("Failed to send reply email:", err);
//       });

//     }, (error) => {
//       alert("Failed to send message. Please try again.");
//       console.error("EmailJS Error:", error);
//     });
// });

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_hkq6tvs", "template_clb7c4o", this)
    .then(() => {
      // alert("Message sent successfully!");
      showToast("✅ Message sent successfully!");
      
      // Grab the form data AFTER the email has been sent (to keep it intact)
      const from_name = this.elements["from_name"].value;
      const email = this.elements["email"].value;

      // Send reply email to user
      emailjs.send("service_hkq6tvs", "template_0u7a9dj", {
        to_name: from_name,
        to_email: email,
      }).then(() => {
        console.log("Reply email sent to user successfully.");
      }).catch((error) => {
        console.error("Failed to send reply email:", error);
      });

      this.reset(); // Reset form after success

    }, (error) => {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});

const sendButton = document.querySelector('.button');

sendButton.addEventListener('click', handleClick);

function handleClick() {
  const buttonText = this.querySelector('.button-text');
  const sendIcon = this.querySelector('.icon-send');
  const iconCheck = this.querySelector('.icon-check');

  // Begin loading animation
  sendIcon.style.transform = `scale(0.5) translateX(-200px)`;
  buttonText.textContent = 'Sending';
  buttonText.classList.add('loading');
  buttonText.style.transform = `translateX(-10px)`;

  // Simulate delay for sending
  setTimeout(() => {
    buttonText.style.transform = `translateY(80px)`;
    buttonText.classList.remove('loading');

    sendIcon.style.transition = `1000ms ease 230ms`;
    sendIcon.style.transform = `scale(2) translateX(120px)`;

    sendIcon.addEventListener("transitionend", showSentText, { once: true });
  }, 2000);

  function showSentText() {
    iconCheck.style.opacity = `1`;
    iconCheck.style.transform = `translateY(0px)`;

    buttonText.classList.add('notransition');
    buttonText.style.transform = `translateY(-80px)`;
    buttonText.textContent = 'Sent';
    buttonText.offsetHeight;
    buttonText.classList.remove('notransition');
    buttonText.style.transform = `translateY(0px)`;

    sendButton.classList.add('success'); // ✅ Turn green

    // Reset after 3 seconds
    setTimeout(() => {
      resetButton();
    }, 5000);
  }

  function resetButton() {
    buttonText.textContent = 'Send';
    buttonText.style.transform = 'none';
    sendIcon.style.transform = 'none';
    iconCheck.style.opacity = '0';
    iconCheck.style.transform = 'translateY(-80px)';
    sendButton.classList.remove('success');
    sendButton.addEventListener('click', handleClick, { once: true });
  }

  // Prevent multiple clicks
  sendButton.removeEventListener('click', handleClick);
}


function openCertifications() {
    document.getElementById("certificationModal").classList.add("show");
  }

  function closeCertifications() {
    document.getElementById("certificationModal").classList.remove("show");
  }

  // Optional: Close when clicking outside modal
  window.onclick = function (event) {
    const modal = document.getElementById("certificationModal");
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  };
 function showToast(message = "📥 Downloaded") {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  //hide certficate button
  const moreDetails = document.getElementById('moreDetails');
const certBtnGroup = document.getElementById('certBtnGroup');

moreDetails.addEventListener('toggle', () => {
  certBtnGroup.style.display = moreDetails.open ? 'none' : 'block';
});


document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      } else {
        entry.target.classList.remove('animate');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(
    '.fade-in, .fade-out, .slide-in-left, .slide-in-right, .zoom-in, .rotate-in, .flip-in'
  ).forEach(el => observer.observe(el));
});
