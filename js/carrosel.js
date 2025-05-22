document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
      const imagens = JSON.parse(carousel.getAttribute('data-imagens'));
      let index = 0;
      const imgElement = carousel.querySelector('img');

      setInterval(() => {
        index = (index + 1) % imagens.length;
        imgElement.src = imagens[index];
      }, 3500); // troca a cada 3 segundos
    });
  });