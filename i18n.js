(() => {
  const english = {
    'Soluciones':'Solutions','Cómo trabajamos':'How we work','Proyectos':'Projects','Solicitar asesoría':'Request a consultation',
    'Soluciones activas 24/7':'Solutions active 24/7','Seguridad que ves.':'Security you can see.','Control que sientes.':'Control you can feel.',
    'Integramos videovigilancia, control de acceso, redes, automatización y energía solar para proteger y optimizar hogares y empresas.':'We integrate video surveillance, access control, networks, automation, and solar energy to protect and optimize homes and businesses.',
    'Hablar con un asesor':'Talk to an advisor','Explorar soluciones':'Explore solutions','Monitoreo':'Monitoring','CCTV conectado':'CCTV connected','Acceso protegido':'Access secured','Red estable':'Network stable','DESCUBRE':'DISCOVER',
    'VIDEOVIGILANCIA':'VIDEO SURVEILLANCE','CONTROL DE ACCESO':'ACCESS CONTROL','REDES':'NETWORKS','AUTOMATIZACIÓN':'AUTOMATION','ENERGÍA SOLAR':'SOLAR ENERGY',
    'Un solo equipo. Todo conectado.':'One team. Everything connected.','Tecnología que trabaja':'Technology that works','en conjunto.':'together.','Diseñamos ecosistemas completos, fáciles de usar y preparados para crecer contigo.':'We design complete ecosystems that are easy to use and ready to grow with you.',
    'Protección visual':'Visual protection','Videovigilancia inteligente':'Smart video surveillance','Cámaras para hogar · CCTV empresarial · monitoreo multisucursal · acceso remoto':'Home cameras · business CCTV · multi-location monitoring · remote access',
    'Entradas seguras':'Secure entry','Control de acceso':'Access control','Videoporteros, alarmas y gestión de accesos para saber siempre quién entra.':'Video doorbells, alarms, and access management so you always know who enters.',
    'Infraestructura':'Infrastructure','Redes y cableado':'Networks and cabling','Cableado estructurado y conectividad estable para todos tus sistemas.':'Structured cabling and stable connectivity for all your systems.',
    'Eficiencia':'Efficiency','Energía solar':'Solar energy','Instalación y mantenimiento de paneles solares para reducir costos.':'Solar panel installation and maintenance to reduce costs.',
    'Continuidad':'Continuity','Soporte técnico':'Technical support','Diagnóstico, mantenimiento preventivo, reparación y configuración remota.':'Diagnostics, preventive maintenance, repairs, and remote configuration.',
    'Precisión de principio a fin':'Precision from start to finish','Un sistema diseñado alrededor de ti.':'A system designed around you.','No vendemos equipos aislados. Entendemos tu espacio, detectamos riesgos y construimos una solución clara, confiable y fácil de operar.':'We do not sell isolated equipment. We understand your space, identify risks, and build a clear, reliable solution that is easy to operate.',
    'Diagnóstico':'Assessment','Escuchamos tus necesidades y revisamos el espacio.':'We listen to your needs and evaluate the space.','Diseño':'Design','Seleccionamos la tecnología adecuada para tu proyecto.':'We select the right technology for your project.','Instalación':'Installation','Configuramos, probamos y te enseñamos a usar el sistema.':'We configure, test, and teach you how to use the system.','Soporte':'Support','Seguimos contigo para mantener todo funcionando.':'We stay with you to keep everything working.',
    'Confianza en cada conexión':'Confidence in every connection','Protección sin':'Protection without','complicaciones.':'complications.','Control desde cualquier lugar':'Control from anywhere','Consulta cámaras y administra tus sistemas directamente desde tu celular.':'View cameras and manage your systems directly from your phone.',
    'Tecnología actual':'Modern technology','Equipos modernos, correctamente configurados y listos para crecer.':'Modern equipment, properly configured and ready to grow.','Atención personalizada':'Personalized service','Soluciones adaptadas a cada hogar, empresa y presupuesto.':'Solutions tailored to every home, business, and budget.','Respaldo técnico':'Technical backup','Acompañamiento, mantenimiento y respuesta cuando más lo necesitas.':'Support, maintenance, and a response when you need it most.',
    'Energía integrada':'Integrated energy','Proyectos solares':'Solar projects','que reducen costos.':'that reduce costs.','Parte de nuestra solución integral incluye energía limpia para hogares y empresas de Baja California.':'Part of our complete solution includes clean energy for homes and businesses in Baja California.',
    'Residencial':'Residential','Instalación solar':'Solar installation','Eficiencia':'Efficiency','Energía limpia':'Clean energy','Comercial':'Commercial','Solución a medida':'Tailored solution','Proyecto terminado':'Completed project',
    'Sistema de gran capacidad':'High-capacity system','Generación propia':'Own generation','Integración':'Integration','Diseño residencial':'Residential design','Ingeniería':'Engineering','Protección eléctrica':'Electrical protection','Tecnología':'Technology','Conversión inteligente':'Smart conversion','Detalle técnico':'Technical detail','Montaje profesional':'Professional mounting','Equipamiento':'Equipment','Inversores solares':'Solar inverters','Energía confiable':'Reliable energy','Solución urbana':'Urban solution','Capacidad':'Capacity','Producción optimizada':'Optimized output','Innovación':'Innovation','Paneles bifaciales':'Bifacial panels','Estructura':'Structure','Instalación a la medida':'Custom installation','Monitoreo':'Monitoring','Control de energía':'Energy control',
    'Estamos listos':'We are ready','Protege lo que importa.':'Protect what matters.','Empieza hoy.':'Start today.','Cuéntanos sobre tu hogar o negocio. Te ayudaremos a encontrar una solución clara y adecuada.':'Tell us about your home or business. We will help you find a clear, suitable solution.','CONTACTO DIRECTO':'DIRECT CONTACT','Correo':'Email','Atención en Baja California':'Service in Baja California',
    'Seguridad · Redes · Automatización · Energía':'Security · Networks · Automation · Energy','Proceso':'Process','Contacto':'Contact','© 2026 ASD. Todos los derechos reservados.':'© 2026 ASD. All rights reserved.'
  };

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = node.nodeValue;
    const trimmed = value.trim();
    if (trimmed && node.parentElement?.tagName !== 'SCRIPT') nodes.push({ node, value, trimmed });
  }
  const toggle = document.querySelector('#languageToggle');
  const originalTitle = document.title;
  const description = document.querySelector('meta[name="description"]');
  const originalDescription = description.content;
  const whatsappLinks = Array.from(document.querySelectorAll('a[href*="wa.me/"]')).map(link => ({ link, base: link.href.split('?')[0] }));
  const emailLinks = Array.from(document.querySelectorAll('a[href^="mailto:"]')).map(link => ({ link, email: link.getAttribute('href').replace(/^mailto:/, '').split('?')[0] }));

  function updateContactLinks(language) {
    const isEnglish = language === 'en';
    const whatsappMessage = isEnglish
      ? 'Hello, I would like more information and a quote.\n\nI am interested in: [video surveillance / access control / networks / automation / solar energy]\nMy name is:\nMy city is:'
      : 'Hola, me gustaría recibir información y solicitar una cotización.\n\nEstoy interesado en: [videovigilancia / control de acceso / redes / automatización / energía solar]\nMi nombre es:\nMi ciudad es:';
    const subject = isEnglish
      ? 'Information and quote request - ASD'
      : 'Solicitud de información y cotización - ASD';
    const emailBody = isEnglish
      ? 'Hello ASD,\n\nI would like more information and a quote.\n\nI am interested in: [video surveillance / access control / networks / automation / solar energy]\nMy name is:\nMy city is:\n\nThank you.'
      : 'Hola ASD,\n\nMe gustaría recibir información y una cotización.\n\nEstoy interesado en: [videovigilancia / control de acceso / redes / automatización / energía solar]\nMi nombre es:\nMi ciudad es:\n\nGracias.';

    whatsappLinks.forEach(({ link, base }) => { link.href = `${base}?text=${encodeURIComponent(whatsappMessage)}`; });
    emailLinks.forEach(({ link, email }) => { link.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`; });
  }

  function setLanguage(language) {
    const isEnglish = language === 'en';
    window.currentLanguage = language;
    document.documentElement.lang = language;
    nodes.forEach(item => { item.node.nodeValue = isEnglish && english[item.trimmed] ? item.value.replace(item.trimmed, english[item.trimmed]) : item.value; });
    document.title = isEnglish ? 'ASD | Digital Security Advisors' : originalTitle;
    description.content = isEnglish ? 'Digital security, video surveillance, automation, networks, and solar energy in Baja California.' : originalDescription;
    toggle.setAttribute('aria-label', isEnglish ? 'Cambiar idioma a español' : 'Switch language to English');
    toggle.querySelectorAll('span').forEach(span => span.classList.toggle('active', span.textContent.toLowerCase() === language));
    updateContactLinks(language);
    try { localStorage.setItem('asd-language', language); } catch (_) {}
  }

  toggle.addEventListener('click', () => setLanguage(window.currentLanguage === 'es' ? 'en' : 'es'));
  let saved = 'es';
  try { saved = localStorage.getItem('asd-language') || 'es'; } catch (_) {}
  setLanguage(saved);
})();
