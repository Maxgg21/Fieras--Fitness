const container = document.getElementById('preciosContainer');
      const whatsappBtn = document.getElementById('whatsappBtn');
    
      container.addEventListener('click', (e) => {
        if (e.target.classList.contains('seleccionarBtn')) {
          const card = e.target.closest('.precio-card');
          const precio = card.getAttribute('data-precio');
          const diasTexto = card.querySelector('h5').textContent;
    
          const metodoPago = card.querySelector('input[type="radio"]:checked');
          
          if (!metodoPago) {
            alert('Por favor, seleccioná un método de pago');
            return;
          }
    
          const metodoTexto = card.querySelector(`label[for="${metodoPago.id}"]`).textContent;
    
          const mensaje = `Hola, me interesa su entramiento de ${diasTexto.toLowerCase()} (${metodoTexto}) por $${precio}`;
          const mensajeCodificado = encodeURIComponent(mensaje);
    
          whatsappBtn.href = `https://wa.me/54299155782703?text=${mensajeCodificado}`;
          whatsappBtn.textContent = `Quiero reservar por $${precio}`;
        }
      });