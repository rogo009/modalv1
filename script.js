// get modal window
const modal = document.getElementById("modal");
// get open modal button
const modalBtn = document.getElementById('modalBtn');

// get modal close button
// const closeBtn = document.getElementById();

// add listener to the modal button
modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

