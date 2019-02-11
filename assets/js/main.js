document.querySelectorAll('.input:read-only').forEach(function (el) {
  el.addEventListener('click', function(e) {
    e.stopPropagation();
    e.target.readOnly = false;
  });
});

document.querySelector('body').addEventListener('click', function(e) {
  document.querySelectorAll('.input').forEach(function (el) {
    el.readOnly = true;
  });
});

document.querySelectorAll('.input').forEach(function (el) {
  el.style.width = ((el.value.length + 1) * 9.5) + 'px';
});
