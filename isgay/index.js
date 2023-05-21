const numeroAleatorio = Math.random();
import Swal from "sweetalert2";

const botao = document.querySelector('.btn');

botao.addEventListener('click', () => {
    console.log('Funcionou!');
    fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image'
      })
});

