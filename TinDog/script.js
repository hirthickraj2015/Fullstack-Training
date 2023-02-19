// Select the download buttons
const downloadBtns = document.querySelectorAll(".download-btn");

// Add event listeners to each button
downloadBtns.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    // Add the "animate__heartBeat" class to the button
    button.classList.add("animate__heartBeat");
  });

  button.addEventListener("animationend", () => {
    // Remove the "animate__heartBeat" class from the button after the animation is finished
    button.classList.remove("animate__heartBeat");
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the navbar and its toggle button
    const navbar = document.querySelector('.navbar');
    const toggleButton = document.querySelector('.navbar-toggler');
  
    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function() {
      // Toggle the 'collapsed' class on the navbar
      navbar.classList.toggle('collapsed');
    });
  
    // Select the download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
  
    // Add a click event listener to each download button
    downloadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Alert the user that the download is not available yet
        alert('Sorry, the download is not available yet!');
      });
    });
  
    // Select the testimonial carousel indicators
    const carouselIndicators = document.querySelectorAll('#carouselExampleControls .carousel-indicators button');
  
    // Add a click event listener to each carousel indicator
    carouselIndicators.forEach(function(indicator) {
      indicator.addEventListener('click', function() {
        // Remove the 'active' class from all indicators
        carouselIndicators.forEach(function(ind) {
          ind.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked indicator
        this.classList.add('active');
      });
    });
  });
  window.addEventListener('load', function() {

    // Change the text of the navbar brand
    document.querySelector('.navbar-brand').textContent = 'TinDog';
  
    // Add a new feature to the features section
    const featuresSection = document.getElementById('features');
    const newFeature = document.createElement('div');
    newFeature.classList.add('col-lg-4');
    // newFeature.innerHTML = `
    //   <i class="fa-solid fa-paw fa-3x"></i>
    //   <h3 class="feature-text">Cute dogs.</h3>
    //   <p class="feature-subheading">We have the cutest dogs you've ever seen.</p>
    // `;
    featuresSection.appendChild(newFeature);
  
    // Add a click event listener to the download buttons
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        alert('Thank you for downloading TinDog!');
      });
    });
  
  });