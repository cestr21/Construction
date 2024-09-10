// Select modal elements
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImage');
const closeModal = document.querySelector('.lightbox-close');

// Get all the gallery items
const galleryItems = document.querySelectorAll('.gallery-item a');

// Add event listeners to open the lightbox modal on click
galleryItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    modal.style.display = 'flex'; // Show the modal
    modalImg.src = this.href; // Set the image source to the clicked image
  });
});

// Add event listener to close the modal
closeModal.addEventListener('click', function () {
  modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside the image
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none'; // Hide the modal
  }
});
