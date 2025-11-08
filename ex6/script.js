// --- 1. Select DOM Elements ---

// Get the container that holds all the images
let slideContainer = document.querySelector(".slide__container");

// Get all images (including the clones)
// This creates a NodeList (like an array) of all <img> tags inside .slide__container
let images = document.querySelectorAll(".slide__container img");

// Get the navigation buttons
let prevButton = document.querySelector("#prevButton");
let nextButton = document.querySelector("#nextButton");

// --- 2. Initial Setup ---

// Get the width of a single image.
// We use clientWidth to get the actual rendered width (e.g., 600px)
let imgSize = images[0].clientWidth;

// Counter to keep track of which slide we are on.
// We start at 1 because index 0 is the "lastClone".
// Index 1 is the *real* first image.
let counter = 1;

// Set the initial position of the slide container.
// We move it to the left by one image width, so the real first image (at index 1) is visible.
// No transition is needed here, as it's the starting position.
slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";

// --- 3. Next Button Listener ---

nextButton.addEventListener("click", () => {
  // Guard clause: If we are at the end (the firstClone), don't do anything.
  // The 'transitionend' listener will handle the jump.
  // This prevents spam-clicking and breaking the transition.
  if (counter >= images.length - 1) return;
  
  // Move to the next slide
  counter = counter + 1;
  
  // Add a transition effect (0.25s slide)
  slideContainer.style.transition = "0.25s ease-in-out";
  
  // Update the container's position
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});

// --- 4. Previous Button Listener ---

prevButton.addEventListener("click", () => {
  // Guard clause: If we are at the beginning (the lastClone), don't do anything.
  if (counter <= 0) return;
  
  // Move to the previous slide
  counter = counter - 1;
  
  // Add a transition effect (0.25s slide)
  slideContainer.style.transition = "0.25s ease-in-out";
  
  // Update the container's position
  slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
});

// --- 5. TransitionEnd Listener (The "Magic") ---

// This event fires *after* the 0.25s transition (the slide animation) is finished.
slideContainer.addEventListener("transitionend", () => {
  
  // Check if we have landed on the "firstClone" (the fake slide at the end)
  if (images[counter].id === "firstClone") {
    // 1. Turn off the transition (so the jump is instant)
    slideContainer.style.transition = "0s ease-in-out";
    
    // 2. Set the counter to the *real* first slide's index
    // images.length = 5 (in our 3-image example)
    // counter = 4 (index of firstClone)
    // new counter = 5 - 4 = 1 (index of real first slide)
    counter = images.length - counter; // As per the instructions
    // Note: A simpler way is just `counter = 1;` if you know you have 1 clone at the start.
    // But the formula from the assignment is `counter = images.length - counter;`
    // Let's re-check that logic.
    // If counter is 4 (firstClone), images.length is 5. 5 - 4 = 1. Correct.
    
    // 3. Instantly jump to the real first slide's position
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
  }

  // Check if we have landed on the "lastClone" (the fake slide at the beginning)
  if (images[counter].id === "lastClone") {
    // 1. Turn off the transition
    slideContainer.style.transition = "0s ease-in-out";
    
    // 2. Set the counter to the *real* last slide's index
    // images.length = 5
    // counter = 0 (index of lastClone)
    // new counter = 5 - 2 = 3 (index of real last slide)
    counter = images.length - 2;
    
    // 3. Instantly jump to the real last slide's position
    slideContainer.style.transform = "translateX(" + -imgSize * counter + "px)";
  }
});