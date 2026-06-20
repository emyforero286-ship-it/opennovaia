# OpenNovaIA - Master Context

Última actualización: 2026-06-16

## Proyecto

OpenNovaIA es una plataforma premium de agentes IA para empresas, enfocada en automatizar ventas, atención al cliente y procesos internos mediante agentes inteligentes disponibles 24/7.

Stack actual:

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Compatible con Vercel

Repositorio GitHub:

- https://github.com/emyforero286-ship-it/opennovaia

Dominio principal:

- https://opennovaia.com

## Posicionamiento Actual

OpenNovaIA debe comunicarse como:

- Plataforma premium de agentes IA para empresas.
- Solución de automatización de ventas, atención al cliente y procesos.
- Agentes IA disponibles 24/7.
- Solución orientada a clientes finales.
- Producto comercializado mediante marketing, contenido, SEO, Instagram y automatización.

OpenNovaIA NO debe comunicarse como:

- Una herramienta técnica para desarrolladores.
- Un chatbot genérico.
- Una solución infantil o experimental.
- Un producto orientado a intermediarios.

Mensaje principal:

> Agentes IA listos para vender, atender y automatizar procesos empresariales 24/7.

Mensajes comerciales:

- Más ventas, menos chats perdidos.
- Atención 24/7 sin contratar más personal.
- Automatiza ventas, soporte y seguimiento de clientes.
- Convierte conversaciones en oportunidades reales.

## Identidad Visual

La landing principal está aprobada visualmente.

Lineamientos:

- Estética premium, moderna y tecnológica.
- Fondo oscuro en Hero.
- Morados profundos, lilas brillantes, fucsia neón y acentos dorados.
- Glassmorphism moderado.
- Bordes luminosos sutiles.
- Sensación SaaS premium.

Inspiración:

- OpenAI
- Intercom
- HubSpot
- Salesforce
- Stripe
- Anthropic

Evitar:

- Robots caricaturescos.
- Estética infantil.
- Diseño gamer.
- Exceso de elementos visuales.
- Rediseñar secciones aprobadas sin autorización.

## Paleta Visual

Colores principales:

- Fondo premium: `#09090B`
- Fondo alternativo: `#0F172A`
- Morado principal: `#6D28D9`
- Morado oscuro: `#4C1D95`
- Lila premium: `#A855F7`
- Lila claro: `#C084FC`
- Dorado premium: `#F59E0B`
- Dorado brillante: `#FBBF24`
- Blanco: `#FFFFFF`
- Texto secundario: `#CBD5E1`
- Texto tenue: `#94A3B8`

Gradiente principal:

```css
linear-gradient(135deg, #4C1D95 0%, #6D28D9 35%, #A855F7 70%, #F59E0B 100%)
```

## Branding y Logo

Assets públicos:

- `public/logo.svg`
- `public/logo.png`
- `public/favicon.ico`
- `public/apple-touch-icon.png`

URLs públicas:

- https://opennovaia.com/logo.svg
- https://opennovaia.com/logo.png
- https://opennovaia.com/favicon.ico
- https://opennovaia.com/apple-touch-icon.png

Implementación:

- El logo del Navbar y Footer carga desde `/logo.svg`.
- Se usa `alt="OpenNovaIA Logo"`.
- Se usa `aria-label="OpenNovaIA Logo"`.
- El logo se usa en Organization Schema.
- El logo se usa en Open Graph metadata.
- El logo se usa en Twitter metadata.

## Landing Principal

Ruta:

- `/`

Estructura actual:

- Navbar
- Hero
- FeaturesBar
- AgentsSection
- IndustriesSection
- ProcessSection
- PricingSection
- TestimonialsSection
- CTASection
- Footer

Regla principal:

- No rediseñar la landing completa sin autorización.
- Hacer cambios incrementales y específicos.
- Mantener componentes visuales aprobados.

## Hero

Objetivo:

- Comunicar agentes de IA para empresas.
- Mostrar automatización, atención 24/7 y conversión de leads.

Hero izquierdo:

- Badge de agencia de inteligencia artificial.
- Título principal.
- Subtítulo orientado a ventas, atención y procesos.
- Botón primario: Activar mi Agente IA.
- Botón secundario: Ver cómo funciona.

Hero derecho:

- Celular premium.
- Simulación de chat empresarial tipo WhatsApp Business.
- Conversaciones con cambio automático entre industrias.
- Animación suave y profesional.

Reglas Hero:

- No usar robots caricaturescos.
- No convertir el logo en protagonista.
- No modificar Hero sin instrucción explícita.
- No usar WhatsApp personal ni enlaces `wa.me` sin autorización.

## Pricing Actual

### Starter

Precio:

- `$199.000 COP/mes`

Enfoque:

- Empieza

Subtítulo:

- "Tu primer empleado con IA."

Incluye:

- 1 Agente IA entrenado con tu negocio.
- WhatsApp Business.
- Widget Web.
- CRM Inteligente.
- Captura automática de leads.
- Atención 24/7.
- Base de conocimiento.
- 1.200 créditos mensuales.
- Analítica básica.
- 2 usuarios.
- Soporte por correo.

### Growth

Precio:

- `$599.000 COP/mes`

Enfoque:

- Escala

Subtítulo:

- "El plan ideal para escalar."

Incluye:

- 5 Agentes IA.
- WhatsApp Business.
- Widget Web.
- CRM avanzado.
- Embudos de ventas.
- Seguimiento automático.
- Calificación automática de leads.
- 7.000 créditos mensuales.
- Reportes avanzados.
- Integraciones con Zapier.
- Integraciones con Make.
- Analítica avanzada.
- Soporte prioritario.

### Elite

Precio:

- `$1.990.000 COP/mes`

Enfoque:

- Expande toda tu operación

Subtítulo:

- "IA empresarial sin límites."

Incluye:

- 15 Agentes IA.
- WhatsApp Business.
- Widget Web.
- Instagram.
- Facebook Messenger.
- CRM empresarial.
- Automatizaciones avanzadas.
- Integraciones ilimitadas.
- API empresarial.
- 20.000 créditos mensuales.
- Usuarios ilimitados.
- Dashboard ejecutivo.
- Soporte dedicado.
- Onboarding personalizado.

### Agente adicional

- `$120.000 COP/mes`

## CTA Centralizados

Los CTA principales fueron centralizados hacia la landing principal.

Mapa actual:

- Activar mi Agente IA -> `/#planes`
- Ver planes -> `/#planes`
- Ver cómo funciona -> `/#proceso`
- Agentes IA -> `/#agentes`
- Automatización WhatsApp -> `/#proceso`
- Demo automática -> `/#proceso`
- Proceso -> `/#proceso`
- Casos de éxito -> `/#testimonios`
- Blog se mantiene activo.

Objetivo:

- Mantener la conversión centralizada en la landing principal.
- Evitar dispersar tráfico de CTA principales hacia páginas secundarias.
- Mantener páginas SEO activas para posicionamiento y contenido.

## SEO Actual

Páginas SEO existentes:

- `/`
- `/agentes-ia`
- `/automatizacion-whatsapp`
- `/chatbots-ia`

Páginas comerciales:

- `/demo`
- `/propuesta`
- `/embudo`

Otras rutas públicas:

- `/casos-de-exito`
- `/blog`
- `/blog/[slug]`

Posts actuales del blog:

- `/blog/que-es-un-agente-ia-para-whatsapp`
- `/blog/automatizar-atencion-al-cliente-colombia`
- `/blog/agentes-ia-para-clinicas`
- `/blog/agentes-ia-para-inmobiliarias`
- `/blog/agentes-ia-para-ecommerce`

SEO implementado:

- Metadata optimizada.
- Canonical URLs.
- Open Graph.
- Twitter Cards.
- Sitemap actualizado.
- Robots.txt.
- Schema Organization.
- Schema Service.
- FAQ Schema.
- Enlaces internos SEO.
- FAQ SEO.
- Optimización de contenido.
- Indexación manual en Search Console.

Archivos SEO principales:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/opengraph-image.tsx`
- `components/JsonLd.tsx`

Sitemap:

- https://opennovaia.com/sitemap.xml

Robots:

- https://opennovaia.com/robots.txt

## Auditoría SEO Landing Principal

Score estimado:

- 86/100

Diagnóstico:

- SEO técnico en buen estado.
- No hay problemas graves de estructura.
- H1 único correcto.
- H2/H3 bien organizados.
- Metadata base correcta.
- Schema activo.
- CTA centralizados correctamente hacia la landing.

Mejoras futuras recomendadas:

- Usar una imagen Open Graph 1200x630 más comercial.
- Reforzar texto visible con frases como "automatización empresarial", "inteligencia artificial para empresas" y "atención al cliente con IA".
- Agregar tracking a CTA de correo si se requiere medición completa.
- Evaluar FAQ visible en la landing si no afecta diseño.

## Diagnóstico Search Console

Search Console reportó redirecciones en varias rutas.

Diagnóstico de código:

- No hay redirects configurados en `next.config.mjs`.
- No existe `middleware.ts` propio generando redirecciones.
- No hay redirecciones entre páginas ni hacia la home.
- No hay loops de redirección.
- Las rutas reportadas están incluidas en sitemap y existen en el build.
- `metadataBase`, canonicals y alternates no generan redirecciones HTTP.

Causa probable:

- Normalización de URLs con slash final.
- Diferencias `http`/`https`.
- Diferencias `www`/sin `www`.
- Datos antiguos de Google.

Reglas actuales:

- No modificar redirects.
- No modificar `trailingSlash`.
- Mantener sitemap sin slash final.
- Reenviar sitemap y solicitar indexación cuando corresponda.

## Google Search Console

Estado:

- Search Console configurado.
- Sitemap enviado.

URLs indexadas o enviadas manualmente:

- `/`
- `/agentes-ia`
- `/automatizacion-whatsapp`
- `/chatbots-ia`
- `/demo`

## Google Analytics 4

Propiedad:

- OpenNovaIA Web

Measurement ID:

- `G-G1HCYVBYWT`

Integración:

- `components/GoogleAnalytics.tsx`
- `NEXT_PUBLIC_GA_ID`
- Variable configurada en Vercel.
- Integración en `app/layout.tsx`.
- Analytics funcionando.

Eventos configurados:

- `reserve_demo_click`
- `activate_agent_click`
- `view_plans_click`
- `pricing_section_view`
- `demo_page_view`
- `demo_cta_click`
- `proposal_page_view`
- `proposal_cta_click`
- `funnel_page_view`
- `demo_from_funnel_click`
- `pricing_from_funnel_click`

Pendiente:

- Verificar eventos GA4 en tiempo real.
- Revisar embudos y conversiones dentro de GA4.
- Configurar eventos adicionales cuando el flujo de pago esté definido.

## Google Business Profile

Estado:

- Perfil creado.
- Categoría: Empresa de software.
- Sitio web conectado.
- Servicios configurados.
- Horarios configurados.
- Fotos corporativas agregadas.
- Descripción optimizada.

Pendiente:

- Conseguir primeras reseñas reales.
- Mantener publicaciones y fotos actualizadas.
- Construir autoridad local.

## Embudo Actual

Modelo oficial:

```text
Tráfico
↓
Landing
↓
Demo automática
↓
Precios
↓
Pago
↓
KronoCloud
↓
Activación
```

KronoCloud se mantiene únicamente como parte interna del flujo final.

Objetivo:

- El usuario debe poder llegar desde Instagram, Google, Facebook, Google Business Profile, SEO o referidos.
- Entrar a la landing.
- Entender la oferta.
- Ver el proceso.
- Elegir plan.
- Pagar.
- Activar su cuenta.

El flujo no debe depender de conversaciones manuales como flujo principal.

## Estrategia Actual

Prioridad actual:

1. Marketing orgánico.
2. Reels de Instagram.
3. Historias y encuestas.
4. Threads.
5. Canal de WhatsApp.
6. Cliente piloto.
7. Primer testimonio.
8. Primer caso de éxito.
9. Analizar Analytics y Search Console después de unos días.

NO prioridad:

- Crear más páginas SEO.
- Rediseñar landing.
- Cambiar branding.
- Tocar Vercel sin necesidad.
- Cambiar estructura técnica.
- Modificar redirects sin evidencia real.

## Redes Sociales

Instagram:

- Reels.
- Carruseles.
- Historias.
- Encuestas.

Threads:

- Publicaciones cortas sobre automatización, IA para negocios y atención 24/7.

Canal de WhatsApp:

- Contenido educativo.
- Tips de automatización.
- Casos de uso.
- Novedades de OpenNovaIA.

Temas:

- Automatización.
- Agentes IA.
- Atención 24/7.
- Ventas.
- Productividad.
- Procesos internos.

## Estado General

- Infraestructura: 100%.
- Landing: 100%.
- SEO Técnico: 95%.
- Google Business: 95%.
- Analytics: 95%.
- Embudo: 90%.
- Marketing orgánico: en curso.
- Ventas: pendiente validación real.

## Contacto

Correo oficial:

- hello@opennovaia.com

Reglas:

- No conectar WhatsApp personal.
- No incluir números personales.
- No usar enlaces `wa.me` sin autorización.

## Deploy

Plataforma:

- Vercel

Repositorio:

- https://github.com/emyforero286-ship-it/opennovaia

Rama:

- `main`

Comandos:

- `npm run lint`
- `npm run build`
- `npm run dev`

## Archivos que no deben subirse

No subir:

- `node_modules`
- `.next`
- `.vercel`
- `dev-server.log`
- `dev-server.err.log`
- `out`
- `dist`

Estos deben permanecer en `.gitignore`.

## Reglas para Codex

Antes de modificar:

1. Leer este archivo.
2. Confirmar que el cambio solicitado no toca secciones no autorizadas.
3. Mantener consistencia visual.
4. No rediseñar secciones aprobadas.
5. Hacer cambios pequeños e incrementales.
6. Ejecutar `npm run lint` y `npm run build` después de cambios SEO, tracking, rutas o producción.
7. Corregir errores antes de terminar.
8. Mantener compatibilidad con Vercel.
9. Subir cambios a GitHub cuando el usuario lo indique o cuando sea parte de la tarea.

Reglas actuales:

- No rediseñar la landing principal sin autorización.
- Mantener identidad visual premium morado/lila/dorado.
- No tocar componentes visuales aprobados salvo instrucción explícita.
- Hacer cambios incrementales.
- No crear más páginas SEO masivamente sin validar estrategia.
- Priorizar tráfico, analítica, conversión y ventas reales.

## Historial

### 2026-06-16

- Se actualizaron planes y créditos:
  - Starter: 1.200 créditos mensuales.
  - Growth: 7.000 créditos mensuales.
  - Elite: 20.000 créditos mensuales.
- Se eliminaron referencias visibles a beneficios no autorizados.
- Se centralizaron CTA hacia la landing principal.
- Se corrigieron acentos y ortografía visible:
  - Ver cómo funciona.
  - Diseñamos.
  - intención.
  - aumentó.
  - Laura Méndez.
  - Andrés Vidal.
- Se revisaron errores de redirección de Search Console y no se detectaron problemas reales en el código.
- Se inició fase de marketing orgánico en Instagram, Threads y WhatsApp.
- Se están creando reels, historias y encuestas para generar tráfico.

### 2026-06-13

- MASTER_CONTEXT actualizado después de la implementación del embudo automático.
- Se documentó el modelo comercial basado en marketing y automatización.
- Se documentaron las páginas SEO actuales.
- Se documentaron las páginas comerciales.
- Se documentaron eventos GA4 nuevos y existentes.
- Se actualizó la estrategia: tráfico, Instagram, Analytics, conversión y primeras ventas.

### 2026-06-12

- Google Analytics 4 implementado con `NEXT_PUBLIC_GA_ID`.
- Search Console configurado.
- Sitemap enviado.
- Google Business Profile configurado.
- SEO técnico inicial completado.
- Se pausó la creación masiva de páginas SEO.

### 2026-06-11

- Se creó arquitectura SEO de blog.
- Se creó `/casos-de-exito`.
- Se crearon assets públicos de logo.
- Se mejoró metadata, schema y enlaces internos.

### 2026-06-10

- Se agregaron enlaces internos SEO.
- Se agregaron FAQ SEO y FAQPage JSON-LD.
- Se corrigieron problemas de encoding UTF-8.

### 2026-06-09

- Landing preparada para Vercel.
- Repositorio GitHub configurado.
- Sitemap y robots creados.
- Open Graph optimizado.
- Pricing actualizado con planes COP.
- Testimonios mejorados.

## Pendientes

- Verificar Analytics en tiempo real.
- Analizar Search Console después de nuevos rastreos.
- Generar tráfico desde Instagram.
- Publicar reels, historias y encuestas.
- Activar contenido en Threads.
- Mantener canal de WhatsApp.
- Conseguir cliente piloto.
- Conseguir primer testimonio real.
- Conseguir primer caso de éxito real.
- Conectar flujo final cuando corresponda.
- Conseguir reseñas y autoridad.
- Conseguir backlinks.
- Medir rendimiento de CTAs.
- Evaluar nuevas páginas SEO solo después de validar tráfico y oportunidades reales.
