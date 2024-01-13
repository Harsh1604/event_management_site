const btn = document.querySelector(".mobile-btn");
const navList = document.querySelector(".nav-list");

btn.addEventListener("click", () => {
  navList.classList.toggle("mobile-view");
});

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const collegeInput = document.getElementById("college");
const genderInput = document.getElementById("gender");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const courseInput = document.getElementById("course");

form.addEventListener("submit", function (event) {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    alert("Registration Successful!");
    resetForm();
  }
});

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === "") {
    displayError("nameError", "Name is required");
    isValid = false;
  } else {
    hideError("nameError");
  }

  if (collegeInput.value.trim() === "") {
    displayError("collegeError", "College name is required");
    isValid = false;
  } else {
    hideError("collegeError");
  }

  if (genderInput.value === "") {
    displayError("genderError", "Please select your gender");
    isValid = false;
  } else {
    hideError("genderError");
  }

  if (emailInput.value.trim() === "") {
    displayError("emailError", "Email is required");
    isValid = false;
  } else {
    hideError("emailError");
  }
  return isValid;
}

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = "";
}

function resetForm() {
  form.reset();
}
