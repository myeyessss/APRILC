document.addEventListener('DOMContentLoaded', function() {
            const hourglass = document.querySelector('.hourglass');
            
            // Reinicia la animación cada 4 segundos
            setInterval(() => {
                hourglass.style.animation = 'none';
                void hourglass.offsetWidth; // Truco para reiniciar animación
                hourglass.style.animation = 'rotateTwice 2s ease-in-out 2';
            }, 4000);
            
            });