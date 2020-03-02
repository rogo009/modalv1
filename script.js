// get modal window
const modal = document.getElementById("modal");
// get open modal button
const modalBtn = document.getElementById('modalBtn');

// add listener to the modal button
modalBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "block";
}

