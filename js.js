const main = document.querySelector('.main')

function createGrid(n) {
  if (n >= 100) {
    alert('Max 100 grids');
    return;
  }
  while (main.firstChild) {
    main.firstChild.remove()
  }
  n = Number(n);
  const scale = 600 / n;
  for (let i = 1; i <= n ** 2; i++) {
    const div = document.createElement('div');
    div.classList.add('child');
    main.appendChild(div);
    div.style.width = scale + 'px';
    div.style.height = scale + 'px';
    div.style.filter = 'brightness(1)';
  }
  const gridDivs = document.querySelectorAll('.child');
  gridDivs.forEach(div => div.addEventListener('mouseenter', changeColor))
}

createGrid(16);

const gridInput = document.querySelector('.gridInput');
gridInput.addEventListener('keydown', updateGrid);

function updateGrid(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    createGrid(this.value);
  }
}

function changeColor(e) {
  this.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const brightness = getComputedStyle(this).getPropertyValue('filter');
  this.style.filter = brightness.split('(')[0] +
    "(" + (brightness.split('(')[1].split(')')[0] - 0.1) + ")";
}




