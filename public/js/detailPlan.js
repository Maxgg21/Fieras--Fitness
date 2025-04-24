const container = document.getElementById('preciosContainer');
const planUnico = document.getElementById('planUnico');
const whatsappBtn = document.getElementById('whatsappBtn');

function configurarBoton(card, precio, descripcion) {
  const metodoPago = card.querySelector('input[type="radio"]:checked');

  if (!metodoPago) {
    alert('Por favor, seleccioná un método de pago');
    return;
  }

  const metodoTexto = card.querySelector(`label[for="${metodoPago.id}"]`).textContent;

  const mensaje = `Hola, me interesa su entrenamiento de ${descripcion.toLowerCase()} (${metodoTexto}) por $${precio}`;
  const mensajeCodificado = encodeURIComponent(mensaje);

  whatsappBtn.href = `https://wa.me/54299155782703?text=${mensajeCodificado}`;
  whatsappBtn.textContent = `Quiero reservar por $${precio}`;
}

// Caso plan con días (varios)
if (container) {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seleccionarBtn')) {
      const card = e.target.closest('.precio-card');
      const precio = card.getAttribute('data-precio');
      const diasTexto = card.querySelector('h5').textContent;
      configurarBoton(card, precio, diasTexto);
    }
  });
}

// Caso plan único
if (planUnico) {
  planUnico.addEventListener('click', (e) => {
    if (e.target.classList.contains('seleccionarBtn')) {
      const card = e.target.closest('.precio-card');
      const precio = card.getAttribute('data-precio');
      const descripcion = card.querySelector('h5')?.textContent || "acceso único";
      configurarBoton(card, precio, descripcion);
    }
  });
}