function payBill() {
    const name = document.getElementById('name').value;
    const cedula = document.getElementById('cedula').value;
    const invoice = document.getElementById('factura').value;

    if (name && cedula && invoice) {
        // URL del webhook
        const webhookUrl = 'https://your-webhook-url.com';

        // Datos a enviar al webhook
        const data = {
            cedula: cedula
        };

        // Enviar los datos al webhook usando fetch
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text()) // Cambiado de response.json() a response.text()
        .then(responseText => {
            try {
                const data = JSON.parse(responseText);
                document.getElementById('message').textContent = `Pago realizado con éxito para la factura ${invoice}.`;
            } catch (error) {
                // Manejo para respuesta que no es JSON
                document.getElementById('message').textContent = responseText;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('message').textContent = 'Error al realizar el pago. Intente de nuevo.';
        });
    } else {
        document.getElementById('message').textContent = 'Por favor, complete todos los campos.';
    }
}
