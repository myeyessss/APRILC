document.addEventListener('DOMContentLoaded', function() {
    const hourglass = document.getElementById('hourglass');
    
    // Animación continua del reloj
    setInterval(() => {
        hourglass.style.animation = 'none';
        void hourglass.offsetWidth; 
        hourglass.style.animation = 'rotateTwice 2s ease-in-out';
    }, 4000);
    
    // Redirección automática después de 10 segundos
    setTimeout(() => {
        window.location.href = "../html/home.html"; 
    }, 5000); 
});