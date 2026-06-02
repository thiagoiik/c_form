/**
 * ============================================================================
 * THIAGO - NEO-BRUTALIST DIGITAL CARD & SPA MOCKUP (app.js)
 * ============================================================================
 * 
 * Este archivo contiene comentarios y guías estructuradas de implementación.
 * Siguiendo las instrucciones del usuario, no hemos cargado código ejecutable activo,
 * pero aquí describimos las funciones interactivas diseñadas específicamente para
 * complementar el estilo de alto contraste y retro-moderno de esta propuesta.
 * 
 * ----------------------------------------------------------------------------
 * INDICE DE FUNCIONALIDADES PROPUESTAS PARA IMPLEMENTAR CON JAVASCRIPT:
 * ----------------------------------------------------------------------------
 * 
 * 1. EFECTO DE COMPRESIÓN FÍSICA EN BOTONES (TACTILE BUTTONS):
 *    - En el estilo Neo-Brutalista, los elementos tienen sombras rígidas desplazadas.
 *    - Al hacer clic, el botón debe trasladarse físicamente hacia su sombra, dando
 *      una sensación táctil de "presionar un botón mecánico".
 *    
 *    Ejemplo de implementación lógica:
 *    ```javascript
 *    const neoButtons = document.querySelectorAll('.neo-btn, .neo-submit-btn');
 * 
 *    neoButtons.forEach(btn => {
 *        btn.addEventListener('mousedown', () => {
 *            // En CSS, esto empuja el botón a la coordenada exacta de su sombra
 *            btn.style.transform = 'translate(4px, 4px)';
 *            btn.style.boxShadow = '0px 0px 0px #0d0d0d';
 *        });
 * 
 *        btn.addEventListener('mouseup', () => {
 *            btn.style.transform = 'translate(-2px, -2px)';
 *            btn.style.boxShadow = '6px 6px 0px #0d0d0d';
 *        });
 * 
 *        btn.addEventListener('mouseleave', () => {
 *            btn.style.transform = 'translate(0px, 0px)';
 *            btn.style.boxShadow = '4px 4px 0px #0d0d0d';
 *        });
 *    });
 *    ```
 * 
 * 2. NOTIFICACIONES AL ESTILO NEO-BRUTALISTA (SOLID TOASTS):
 *    - Banner de notificación rectangular rígido, con fondo amarillo brillante o naranja,
 *      borde negro grueso de 3px y sombra sólida de 4px que entra saltando desde arriba.
 * 
 *    Ejemplo de implementación lógica:
 *    ```javascript
 *    function showNeoToast(message) {
 *        const toast = document.createElement('div');
 *        toast.className = 'neo-toast';
 *        toast.innerHTML = `
 *            <span style="font-weight: 800; font-family: 'Space Grotesk';">AVISO:</span>
 *            <span>${message}</span>
 *        `;
 *        
 *        // Aplicar estilos Neo-Brutalistas en línea
 *        Object.assign(toast.style, {
 *            position: 'fixed',
 *            top: '-100px',
 *            left: '50%',
 *            transform: 'translateX(-50%)',
 *            backgroundColor: '#fde68a', // Amarillo Neo
 *            border: '3px solid #0d0d0d',
 *            borderRadius: '10px',
 *            padding: '12px 24px',
 *            boxShadow: '4px 4px 0px #0d0d0d',
 *            zIndex: '1000',
 *            display: 'flex',
 *            gap: '10px',
 *            alignItems: 'center',
 *            transition: 'top 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
 *        });
 * 
 *        document.body.appendChild(toast);
 * 
 *        // Animación de entrada: Salto hacia abajo
 *        setTimeout(() => toast.style.top = '30px', 10);
 * 
 *        // Salida tras unos segundos
 *        setTimeout(() => {
 *            toast.style.top = '-100px';
 *            setTimeout(() => toast.remove(), 400);
 *        }, 3500);
 *    }
 *    ```
 * 
 * 3. CONTROL DE FILTROS EN HABILIDADES (SKILL CATEGORY CHIPS):
 *    - Permitir filtrar las tecnologías pulsando en botones de categorías superiores.
 *    - Oculta y revela las píldoras individuales con un efecto de "salto" Neo-Brutal.
 * 
 *    Ejemplo de implementación lógica:
 *    ```javascript
 *    const skillChips = document.querySelectorAll('.neo-pill');
 *    
 *    // Función para destacar una tecnología al pasar el mouse por encima
 *    skillChips.forEach(chip => {
 *        chip.addEventListener('mouseenter', () => {
 *            chip.style.backgroundColor = '#bae6fd'; // Sky Blue
 *            chip.style.transform = 'translate(-2px, -2px) rotate(-1.5deg)';
 *        });
 *        chip.addEventListener('mouseleave', () => {
 *            chip.style.backgroundColor = '#ffffff';
 *            chip.style.transform = 'none';
 *        });
 *    });
 *    ```
 * 
 * 4. INTERACTUAR CON EL LOGO O EL AVATAR:
 *    - Hacer que el avatar salte con una rotación juguetona de 360 grados al hacerle clic.
 * 
 *    Ejemplo de implementación lógica:
 *    ```javascript
 *    const avatar = document.querySelector('.neo-avatar-img');
 *    
 *    avatar.addEventListener('click', () => {
 *        avatar.animate([
 *            { transform: 'scale(1) rotate(0deg)' },
 *            { transform: 'scale(1.1) rotate(-15deg)', offset: 0.3 },
 *            { transform: 'scale(0.9) rotate(15deg)', offset: 0.6 },
 *            { transform: 'scale(1.05) rotate(-5deg)', offset: 0.8 },
 *            { transform: 'scale(1) rotate(0deg)' }
 *        ], {
 *            duration: 600,
 *            easing: 'ease-in-out'
 *        });
 *    });
 *    ```
 * 
 * ============================================================================
 */
