const shapes = document.querySelectorAll('.shape');

function changeShape(event) {
  event.target.style.backgroundColor = '#f44336';
}

function resetShape(event) {
  event.target.style.backgroundColor = '#8bc34a';
}

shapes.forEach(shape => {
  shape.addEventListener('mouseenter', changeShape);
  shape.addEventListener('mouseleave', resetShape);
});
