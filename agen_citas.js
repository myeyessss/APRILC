document.addEventListener('DOMContentLoaded', () => {
    const progressSteps = document.querySelectorAll('.progress-step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentStep = 1; // Inicializamos el paso actual en 1

    // Función para actualizar los círculos de progreso
    function updateProgressCircles() {
        progressSteps.forEach((step, index) => {
            const stepNumber = parseInt(step.dataset.step); // Obtenemos el número de paso del atributo data-step

            if (stepNumber <= currentStep) {
                step.classList.add('current'); // Añade la clase 'current' si el paso es el actual o ya pasado
            } else {
                step.classList.remove('current'); // Quita la clase 'current' si el paso aún no ha llegado
            }
        });

        // Habilitar/Deshabilitar botones
        if (currentStep === 1) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (currentStep === progressSteps.length) { // Si estamos en el último paso
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Event listeners para los botones
    nextBtn.addEventListener('click', () => {
        if (currentStep < progressSteps.length) { // Asegura que no se exceda el número de pasos
            currentStep++;
            updateProgressCircles();
            // Aquí puedes añadir la lógica para mostrar la siguiente sección del formulario
            console.log('Avanzando al paso:', currentStep);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 1) { // Asegura que no baje de 1
            currentStep--;
            updateProgressCircles();
            // Aquí puedes añadir la lógica para mostrar la sección anterior del formulario
            console.log('Volviendo al paso:', currentStep);
        }
    });

    // Inicializar el estado de los círculos al cargar la página
    updateProgressCircles();
});