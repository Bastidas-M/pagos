function payBill() {
    const name = document.getElementById('name').value;
    const cedula = document.getElementById('cedula').value;
    const invoice = document.getElementById('factura').value;

    if (name && cedula && invoice) {
        document.getElementById('message').textContent = `Pago realizado con éxito para la factura ${invoice}.`;
    } else {
        document.getElementById('message').textContent = 'Por favor, complete todos los campos.';
    }
}
