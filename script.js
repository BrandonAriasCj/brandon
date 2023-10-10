document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscription-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        // Aquí puedes agregar la lógica para procesar el formulario, como enviar los datos a un servidor.
        
        // En este ejemplo, simplemente mostraremos un mensaje de confirmación.
        message.textContent = `Gracias por suscribirte, ${nombre} (${email})`;
        form.reset();
    });
});
