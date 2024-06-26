document.addEventListener('DOMContentLoaded', function() {
    const barberos = [
        {
            nombre: 'Juan Pérez',
            foto: 'https://th.bing.com/th/id/OIP.ikfCMrUsLUMvxbmzJg6U0QHaHa?w=1033&h=1033&rs=1&pid=ImgDetMain',
            descripcion: 'Experto en cortes clásicos y modernos.'
        },
        {
            nombre: 'Marcos Diaz',
            foto: 'https://th.bing.com/th/id/OIP.H--h-E6Q-bE3uFy5o977vAHaHa?w=1314&h=1314&rs=1&pid=ImgDetMain',
            descripcion: 'Experto en cortes clásicos y modernos.'
        },
        {
            nombre: 'Fernando Flores',
            foto: 'https://barbershopamoeri.nl/images/team-amoeri/v12_habib.jpeg',
            descripcion: 'Especialista en afeitados y barba.'
        },
        {
            nombre: 'Piero Campos',
            foto: 'https://amoeribarbershop.nl/images/team-amoeri/v17_massimo.jpeg',
            descripcion: 'Especialista en afeitados y barba.'
        },
        {
            nombre: 'Carlos López',
            foto: 'https://th.bing.com/th/id/OIP.QSzQq20Lhi99i6TgG_JWywHaHa?w=1357&h=1357&rs=1&pid=ImgDetMain',
            descripcion: 'Maestro en técnicas tradicionales.'
        },
        {
            nombre: 'Miguel Sánchez',
            foto: 'https://th.bing.com/th/id/OIP.j824HAoqnB8XoXlfU1w7qgHaHa?w=1972&h=1972&rs=1&pid=ImgDetMain',
            descripcion: 'Maestro en técnicas tradicionales.'
        }
       
    ];

    const barberosContainer = document.getElementById('barberos');

    barberos.forEach(barbero => {
        const barberoElement = document.createElement('div');
        barberoElement.className = 'barbero';

        const barberoImg = document.createElement('img');
        barberoImg.src = barbero.foto;
        barberoImg.alt = barbero.nombre;

        const barberoName = document.createElement('h3');
        barberoName.textContent = barbero.nombre;

        const barberoDesc = document.createElement('p');
        barberoDesc.textContent = barbero.descripcion;

        barberoElement.appendChild(barberoImg);
        barberoElement.appendChild(barberoName);
        barberoElement.appendChild(barberoDesc);

        barberosContainer.appendChild(barberoElement);
    });
});
