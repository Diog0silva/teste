document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const elements = carousel.querySelectorAll('img, video');
    let index = 0;

    elements.forEach((el, i) => {
      el.style.display = i === 0 ? 'block' : 'none';
    });

    setInterval(() => {
    
      elements[index].style.display = 'none';

      index = (index + 1) % elements.length;

      elements[index].style.display = 'block';
    }, 3500); 
  });
});
