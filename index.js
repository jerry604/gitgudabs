var engageBtn = document.getElementById('engage');

var columns = document.getElementsByClassName('slots__image-container');

engageBtn.addEventListener('click', () => {
  for (var column of columns) {
    column.classList.remove('spin');
    column.classList.add('spin');
  }

  setTimeout(() => {
    for (var column of columns) {
      column.classList.remove('spin');
      column.style.top = -1 * 180 * Math.floor(Math.random() * Math.floor(6));
    } 
  }, 2000);
});