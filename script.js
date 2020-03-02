// get modal window
const modal = document.getElementById("modal");
// get open modal button
const modalBtn = document.getElementById("modalBtn").addEventListener("click", openModal);

// get modal close button, by ID instead of class name + using bracket notation, works the same
// const closeBtn = document.getElementsByClassName('closeBtn')[0];
const closeBtn = document.getElementById("closeBtn").addEventListener("click", closeModal);

// event listener
window.addEventListener("click", outsideClick);

// function
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

// function to exit on window click;
function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
