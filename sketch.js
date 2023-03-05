    const tab = document.querySelector(".tab");

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');

   var dots = document.querySelectorAll('.dots');
  dots.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });

     var dots1 = document.querySelectorAll('.dots-1');
  dots1.forEach(function(dot) {
    dot.classList.toggle('hidden');
  });

}

function closeMenu() {
  const menu = document.querySelector('.menu');
  const hamburger = document.querySelector('.hamburger');
  const lines = document.querySelectorAll('.line');
  hamburger.classList.remove('active')
  menu.classList.remove('active');
  lines.forEach(line => line.classList.remove('active'));
}

