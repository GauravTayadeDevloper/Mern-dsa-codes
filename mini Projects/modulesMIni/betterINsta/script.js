const pics = document.querySelectorAll('.pic');
let draggedDiv = null;

// When dragging starts
pics.forEach(pic => {
  pic.addEventListener('dragstart', function () {
    draggedDiv = this;
    this.style.opacity = '0.5';
  });

  // Reset style when drag ends
  pic.addEventListener('dragend', function () {
    this.style.opacity = '1';
    pics.forEach(p => p.classList.remove('drag-over'));
  });

  // When dragging over another div
  pic.addEventListener('dragover', function (e) {
    e.preventDefault();
    this.classList.add('drag-over');
  });

  // When leaving a div
  pic.addEventListener('dragleave', function () {
    this.classList.remove('drag-over');
  });

  // On drop — swap background images
  pic.addEventListener('drop', function () {
    this.classList.remove('drag-over');

    if (draggedDiv && draggedDiv !== this) {
      const tempBg = this.style.backgroundImage;
      this.style.backgroundImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = tempBg;
    }
  });
});
