alert("auth.js loaded");
// ===== AUTH JS (DEBUG-SAFE VERSION) =====

let generatedOTP = "";

function sendOTP() {
  const emailInput = document.getElementById("email");

  if (!emailInput) {
    alert("Email input not found");
    return;
  }

  const email = emailInput.value.trim();

  if (email === "" || !email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }

  // Generate 6-digit OTP
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  console.log("Generated OTP:", generatedOTP); // 👈 CHECK CONSOLE

  // Switch UI
  document.getElementById("emailStep").classList.remove("active");
  document.getElementById("otpStep").classList.add("active");

  alert("OTP generated. Check console (for now).");
}

function verifyOTP() {
  const otpInput = document.getElementById("otp");

  if (!otpInput) {
    alert("OTP input not found");
    return;
  }

  const enteredOTP = otpInput.value.trim();

  if (enteredOTP === generatedOTP) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid OTP");
  }
}

function resendOTP() {
  sendOTP();
}

