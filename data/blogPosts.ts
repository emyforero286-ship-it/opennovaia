export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  keywords: string[];
  author: string;
  content: BlogSection[];
  faq?: BlogFaq[];
  relatedPosts?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "¿Qué es un agente IA para WhatsApp y cómo ayuda a vender más?",
    slug: "que-es-un-agente-ia-para-whatsapp",
    description:
      "Descubre qué es un agente IA para WhatsApp, cómo se diferencia de un chatbot tradicional y cómo puede apoyar ventas, soporte y seguimiento comercial.",
    category: "WhatsApp IA",
    date: "2026-06-11",
    readingTime: "6 min",
    keywords: [
      "agente IA para WhatsApp",
      "automatización WhatsApp",
      "WhatsApp Business con IA",
      "chatbot IA",
      "ventas por WhatsApp"
    ],
    author: "OpenNovaIA",
    content: [
      {
        heading: "Qué es un agente IA para WhatsApp",
        body:
          "Un agente IA para WhatsApp es un asistente inteligente diseñado para mantener conversaciones comerciales, responder preguntas, capturar datos y orientar al cliente hacia el siguiente paso. A diferencia de una respuesta automática simple, puede interpretar intención, contexto y necesidades del usuario."
      },
      {
        heading: "Diferencia frente a un chatbot tradicional",
        body:
          "Un chatbot tradicional suele depender de menús rígidos, palabras clave y flujos cerrados. Un agente IA puede responder con lenguaje natural, adaptar la conversación y mantener una experiencia más cercana a una atención humana bien entrenada.",
        bullets: [
          "Entiende preguntas escritas de diferentes maneras.",
          "Puede calificar prospectos con base en respuestas reales.",
          "Ayuda a guiar la conversación sin depender solo de botones.",
          "Puede integrarse con procesos de ventas, soporte y CRM."
        ]
      },
      {
        heading: "Usos en ventas y soporte",
        body:
          "En ventas, un agente IA puede responder dudas, explicar servicios, pedir datos clave y ayudar a agendar una demo. En soporte, puede resolver preguntas frecuentes, orientar al cliente y derivar a una persona cuando el caso lo requiere."
      },
      {
        heading: "Cómo ayuda a vender más",
        body:
          "La oportunidad no está solo en responder rápido. También está en no perder conversaciones, dar seguimiento, ordenar la información del lead y reducir fricción antes de que el equipo comercial intervenga.",
        bullets: [
          "Reduce chats sin respuesta.",
          "Captura oportunidades incluso fuera de horario.",
          "Da seguimiento a prospectos interesados.",
          "Mejora la calidad de la información antes del cierre."
        ]
      }
    ],
    faq: [
      {
        question: "¿Un agente IA para WhatsApp reemplaza a mi equipo comercial?",
        answer:
          "No necesariamente. Su función principal es reducir trabajo repetitivo, capturar información y ayudar al equipo a enfocarse en conversaciones de mayor valor."
      },
      {
        question: "¿Funciona con WhatsApp Business?",
        answer:
          "Sí. La estrategia está pensada para empresas que usan WhatsApp Business como canal comercial o de atención."
      }
    ],
    relatedPosts: [
      "automatizar-atencion-al-cliente-colombia",
      "agentes-ia-para-ecommerce"
    ]
  },
  {
    title: "Cómo automatizar la atención al cliente en Colombia con agentes IA",
    slug: "automatizar-atencion-al-cliente-colombia",
    description:
      "Guía para pymes colombianas que quieren automatizar atención al cliente con agentes IA, WhatsApp, respuestas rápidas y disponibilidad 24/7.",
    category: "Atención al cliente",
    date: "2026-06-11",
    readingTime: "7 min",
    keywords: [
      "automatizar atención al cliente Colombia",
      "agentes IA Colombia",
      "atención 24/7",
      "IA para pymes",
      "automatización empresarial"
    ],
    author: "OpenNovaIA",
    content: [
      {
        heading: "Por qué la atención rápida importa",
        body:
          "En muchas empresas colombianas, WhatsApp es el primer punto de contacto con clientes y prospectos. Cuando los mensajes se acumulan, aparecen tiempos de espera, respuestas incompletas y oportunidades que se enfrían."
      },
      {
        heading: "Qué puede automatizar un agente IA",
        body:
          "Un agente IA puede encargarse de conversaciones repetitivas y de alto volumen, siempre que tenga información clara del negocio y reglas de escalamiento.",
        bullets: [
          "Preguntas frecuentes sobre servicios, horarios y cobertura.",
          "Captura de datos de contacto e intención de compra.",
          "Orientación inicial antes de derivar a una persona.",
          "Seguimiento de prospectos que aún no toman decisión."
        ]
      },
      {
        heading: "Cómo implementar sin perder calidad",
        body:
          "La automatización debe sentirse útil, no robótica. Para lograrlo, conviene definir tono de marca, preguntas clave, límites del agente y criterios claros para pasar la conversación a un humano."
      },
      {
        heading: "Qué medir después de implementar",
        body:
          "Antes de hablar de resultados, la empresa debe medir el proceso. Las métricas útiles incluyen tiempo de respuesta, leads capturados, conversaciones derivadas y preguntas resueltas sin intervención manual."
      }
    ],
    faq: [
      {
        question: "¿La IA puede atender clientes fuera del horario laboral?",
        answer:
          "Sí. Un agente IA puede responder 24/7 si está configurado con la información y los límites adecuados."
      },
      {
        question: "¿Sirve para empresas pequeñas?",
        answer:
          "Sí. Puede ser especialmente útil cuando el equipo es pequeño y recibe muchas preguntas repetitivas por WhatsApp o web."
      }
    ],
    relatedPosts: [
      "que-es-un-agente-ia-para-whatsapp",
      "agentes-ia-para-clinicas"
    ]
  },
  {
    title: "Agentes IA para clínicas: agenda, recordatorios y atención inicial",
    slug: "agentes-ia-para-clinicas",
    description:
      "Cómo los agentes IA pueden apoyar clínicas, centros médicos, estética y odontología con agendamiento, recordatorios y preguntas frecuentes sin dar consejo médico.",
    category: "Salud",
    date: "2026-06-11",
    readingTime: "6 min",
    keywords: [
      "agentes IA para clínicas",
      "automatización clínicas",
      "agenda con IA",
      "recordatorios pacientes",
      "IA para salud Colombia"
    ],
    author: "OpenNovaIA",
    content: [
      {
        heading: "El reto de atención en clínicas",
        body:
          "Clínicas, centros de estética y consultorios suelen recibir preguntas repetidas sobre horarios, servicios, ubicación, preparación para citas y disponibilidad. Ese volumen consume tiempo operativo y puede retrasar respuestas importantes."
      },
      {
        heading: "Usos seguros de un agente IA",
        body:
          "Un agente IA para clínicas debe enfocarse en información administrativa y orientación general. No debe diagnosticar, formular tratamientos ni reemplazar criterio médico.",
        bullets: [
          "Agendamiento y confirmación de citas.",
          "Recordatorios automáticos.",
          "Preguntas frecuentes administrativas.",
          "Derivación a personal humano cuando el caso requiere criterio profesional."
        ]
      },
      {
        heading: "Cómo mejora la operación",
        body:
          "Bien configurado, el agente puede liberar tiempo del equipo, reducir olvidos en recordatorios y mantener una experiencia más ordenada desde el primer contacto."
      },
      {
        heading: "Métricas recomendadas",
        body:
          "Para evaluar el impacto, conviene medir citas solicitadas, citas confirmadas, tiempo de respuesta, conversaciones derivadas y preguntas frecuentes resueltas."
      }
    ],
    faq: [
      {
        question: "¿Un agente IA puede dar recomendaciones médicas?",
        answer:
          "No. Debe limitarse a información administrativa, orientación general y derivación a profesionales cuando corresponda."
      },
      {
        question: "¿Puede ayudar con recordatorios de citas?",
        answer:
          "Sí. Puede apoyar confirmaciones y recordatorios si el proceso está configurado correctamente."
      }
    ],
    relatedPosts: [
      "automatizar-atencion-al-cliente-colombia",
      "que-es-un-agente-ia-para-whatsapp"
    ]
  },
  {
    title: "Agentes IA para inmobiliarias: califica leads y agenda visitas automáticamente",
    slug: "agentes-ia-para-inmobiliarias",
    description:
      "Cómo una inmobiliaria puede usar agentes IA para responder interesados, calificar leads, hacer seguimiento y agendar visitas sin perder oportunidades.",
    category: "Inmobiliarias",
    date: "2026-06-11",
    readingTime: "6 min",
    keywords: [
      "agentes IA para inmobiliarias",
      "automatización inmobiliaria",
      "calificación de leads",
      "agenda visitas IA",
      "IA para bienes raíces"
    ],
    author: "OpenNovaIA",
    content: [
      {
        heading: "El problema de los leads fríos",
        body:
          "En inmobiliarias, muchos interesados preguntan por precio, ubicación, disponibilidad o requisitos y luego desaparecen. Si el seguimiento tarda demasiado, el lead pierde interés o contacta a otra opción."
      },
      {
        heading: "Qué puede hacer un agente IA inmobiliario",
        body:
          "Un agente IA puede responder preguntas frecuentes, capturar preferencias y ordenar la información antes de que un asesor intervenga.",
        bullets: [
          "Identificar presupuesto, zona y tipo de inmueble.",
          "Responder dudas sobre características y requisitos.",
          "Agendar visitas o llamadas comerciales.",
          "Priorizar interesados con mayor intención."
        ]
      },
      {
        heading: "Seguimiento sin fricción",
        body:
          "La automatización permite mantener contacto con prospectos que aún no están listos para comprar o arrendar, sin depender de recordatorios manuales constantes."
      },
      {
        heading: "Cómo medir el avance",
        body:
          "Las métricas útiles incluyen leads calificados, visitas agendadas, tiempo de primera respuesta y conversaciones derivadas a asesores."
      }
    ],
    faq: [
      {
        question: "¿Puede el agente IA agendar visitas?",
        answer:
          "Sí, puede ayudar a recopilar datos y coordinar el siguiente paso según el flujo definido por la inmobiliaria."
      },
      {
        question: "¿Sirve para arriendos y ventas?",
        answer:
          "Sí. El flujo puede adaptarse a captación, arriendos, venta de inmuebles o atención inicial de interesados."
      }
    ],
    relatedPosts: [
      "que-es-un-agente-ia-para-whatsapp",
      "automatizar-atencion-al-cliente-colombia"
    ]
  },
  {
    title: "Agentes IA para ecommerce: recupera ventas y responde clientes 24/7",
    slug: "agentes-ia-para-ecommerce",
    description:
      "Cómo una tienda online puede usar agentes IA para responder preguntas frecuentes, apoyar pedidos, recuperar carritos y mejorar la postventa.",
    category: "E-commerce",
    date: "2026-06-11",
    readingTime: "7 min",
    keywords: [
      "agentes IA para ecommerce",
      "automatización ecommerce",
      "recuperación de carritos",
      "atención 24/7 ecommerce",
      "IA para tiendas online"
    ],
    author: "OpenNovaIA",
    content: [
      {
        heading: "Por qué ecommerce necesita respuesta rápida",
        body:
          "En una tienda online, las dudas sobre tallas, pagos, tiempos de envío, garantías o estado del pedido pueden frenar una compra. Responder tarde puede significar perder una venta."
      },
      {
        heading: "Casos de uso para tiendas online",
        body:
          "Un agente IA puede actuar como primer punto de atención y ayudar al cliente a avanzar con menos fricción.",
        bullets: [
          "Responder preguntas frecuentes sobre productos.",
          "Orientar sobre pagos, envíos y cambios.",
          "Capturar datos de interesados.",
          "Apoyar seguimiento de pedidos y postventa."
        ]
      },
      {
        heading: "Recuperación de oportunidades",
        body:
          "Cuando un cliente pregunta y no compra, el agente puede ayudar a mantener la conversación activa, resolver objeciones y facilitar el siguiente paso sin saturar al equipo."
      },
      {
        heading: "Qué medir en ecommerce",
        body:
          "Conviene medir preguntas resueltas, leads capturados, conversaciones recuperadas, tiempos de respuesta y derivaciones a soporte humano."
      }
    ],
    faq: [
      {
        question: "¿Un agente IA puede reemplazar mi soporte ecommerce?",
        answer:
          "No necesariamente. Puede encargarse de preguntas repetitivas y derivar casos más complejos al equipo humano."
      },
      {
        question: "¿Puede ayudar con carritos abandonados?",
        answer:
          "Puede apoyar seguimiento conversacional y resolver dudas, siempre que el flujo y los datos estén configurados correctamente."
      }
    ],
    relatedPosts: [
      "que-es-un-agente-ia-para-whatsapp",
      "automatizar-atencion-al-cliente-colombia"
    ]
  }
];

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost) {
  return (post.relatedPosts ?? [])
    .map((slug) => getBlogPost(slug))
    .filter((relatedPost): relatedPost is BlogPost => Boolean(relatedPost));
}
