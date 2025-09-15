export async function POST({ request }) {
  console.log('=== Inicio del endpoint API ===');
  
  try {
    // Verificar que las variables de entorno existan
    const SECRET_TOKEN = import.meta.env.SECRET_TOKEN_FORM;
    const API_URL = import.meta.env.PUBLIC_API_FORM;
    
    console.log('SECRET_TOKEN existe:', !!SECRET_TOKEN);
    console.log('API_URL:', API_URL);
    
    if (!SECRET_TOKEN || !API_URL) {
      console.error('Variables de entorno faltantes');
      return new Response(JSON.stringify({ 
        message: 'Error de configuración del servidor' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Obtener datos del formulario
    const formData = await request.formData();
    console.log('FormData recibida:', Array.from(formData.entries()));
    
    // Validación anti-spam
    const honeypot = formData.get('hp');
    if (honeypot) {
      console.log('Honeypot activado:', honeypot);
      return new Response(JSON.stringify({ 
        message: 'Error de validación' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log('Enviando a n8n...');
    
    // Enviar a n8n
    const response = await fetch(API_URL, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${SECRET_TOKEN}`
      }
    });
    
    console.log('Respuesta de n8n:', response.status, response.statusText);
    
    if (response.ok) {
      return new Response(JSON.stringify({ 
        message: '¡Mensaje enviado con éxito!' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const errorText = await response.text();
      console.error('Error de n8n:', errorText);
      
      return new Response(JSON.stringify({ 
        message: 'Error al procesar el formulario' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
  } catch (error) {
    console.error('Error completo:', error);
    console.error('Stack trace:', error.stack);
    
    return new Response(JSON.stringify({ 
      message: 'Error interno del servidor',
      error: error.message // Solo para desarrollo
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}