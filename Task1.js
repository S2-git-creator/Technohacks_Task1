
document.getElementById("cta-btn").addEventListener("click", function () {
  alert("🎉 Thank you for your interest! Redirecting to purchase page...");
});


function subscribe() {
  let email = document.getElementById("email").value;
  if (email === "") {
    alert("⚠️ Please enter your email!");
  } else {
    alert("✅ Thank you for subscribing, " + email + "!");
    document.getElementById("email").value = "";
  }
}


function openForm(course) {
  document.getElementById("popupForm").style.display = "flex";
  document.getElementById("courseName").innerText = "for " + course;
}


function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}


document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Registered successfully " + document.getElementById("courseName").innerText);
  closeForm();
});

let track = document.querySelector(".course-track");
let currentPosition = 0;
let cardWidth = 320; 

function slideLeft() {
  if (currentPosition < 0) {
    currentPosition += cardWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
}

function slideRight() {
  if (Math.abs(currentPosition) < (track.scrollWidth - track.parentElement.offsetWidth)) {
    currentPosition -= cardWidth;
    track.style.transform = `translateX(${currentPosition}px)`;
  }
}
