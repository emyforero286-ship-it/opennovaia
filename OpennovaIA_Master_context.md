# OpenNovaIA - Master Context

Última actualización: 2026-06-13

## Proyecto

OpenNovaIA es una agencia premium de Inteligencia Artificial enfocada en automatización empresarial mediante agentes de IA para ventas, atención al cliente, soporte y procesos internos.

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

## Identidad de Marca

Nombre:

- OpenNovaIA

Submarca:

- Neural Intelligence

Posicionamiento:

- Agencia premium de IA para empresas.
- Plataforma de agentes IA para vender, atender y automatizar procesos.
- Automatización de ventas, soporte y operaciones.
- Agentes de IA disponibles 24/7.
- No comunicar OpenNovaIA como "otro chatbot".

Mensaje principal:

> Agentes IA listos para vender, atender y automatizar procesos empresariales 24/7.

Mensajes comerciales:

- Más ventas, menos chats perdidos.
- Atención 24/7 sin contratar más personal.
- Automatiza ventas, soporte y seguimiento de clientes.
- Convierte conversaciones en oportunidades reales.

## Estilo Visual

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

## Celular Hero

Estado:

- Refinado como demo visual de chat empresarial.

Debe mantener:

- Header tipo app móvil.
- Nombre de empresa.
- Estado online o escribiendo.
- Conversaciones empresariales.
- Mensajes entrantes y salientes.
- Indicador de escribiendo.
- Tabs de industrias visibles.
- Animaciones discretas.

Evitar:

- Mensajes superpuestos.
- `position: absolute` para mensajes del chat.
- Visual saturado.
- Tarjetas que tapen el celular.

## SEO

### Páginas SEO existentes

- `/`
- `/agentes-ia`
- `/automatizacion-whatsapp`
- `/chatbots-ia`

### Páginas comerciales

- `/demo`
- `/propuesta`
- `/embudo`

### Otras rutas públicas

- `/casos-de-exito`
- `/blog`
- `/blog/[slug]`

Posts actuales del blog:

- `/blog/que-es-un-agente-ia-para-whatsapp`
- `/blog/automatizar-atencion-al-cliente-colombia`
- `/blog/agentes-ia-para-clinicas`
- `/blog/agentes-ia-para-inmobiliarias`
- `/blog/agentes-ia-para-ecommerce`

### SEO implementado

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

### Estado SEO

- SEO técnico considerado completado para fase inicial.
- Se pausó la creación masiva de páginas SEO.
- Prioridad futura: contenido, autoridad y backlinks.

## Google Search Console

Estado:

- Search Console configurado.
- Sitemap enviado.

URLs indexadas manualmente:

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

## Embudo de Ventas

IMPORTANTE:

El modelo comercial fue actualizado.

Ya NO se usa como flujo principal:

- Venta consultiva.
- Seguimiento manual.
- Propuesta personalizada manual.
- Llamada obligatoria.

Nuevo modelo oficial:

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

OpenNovaIA debe vender mediante marketing y automatización.

Objetivo:

- El usuario debe poder llegar desde Instagram, Google, Facebook, Google Business Profile, SEO o referidos.
- Entrar a la landing.
- Entender la oferta.
- Ver la demo automática.
- Elegir plan.
- Pagar.
- Activar su cuenta en KronoCloud.

El flujo NO debe depender de que una persona de OpenNovaIA hable manualmente con el cliente.

## Página /demo

Ruta:

- `/demo`

Objetivo:

- Actuar como vendedor automático.

Debe explicar:

- Problema.
- Solución.
- Beneficios.
- Funcionamiento.
- Resultado esperado.
- CTA.

Regla:

- Debe vender la demo y el valor de OpenNovaIA sin depender de reuniones humanas.

Analytics:

- `demo_page_view`
- `reserve_demo_click`
- `demo_cta_click`

## Página /propuesta

Ruta:

- `/propuesta`

Objetivo:

- Presentar beneficios, implementación y planes.

Uso:

- Apoyar el proceso de decisión.
- Servir como página comercial reutilizable después de una interacción, campaña o lead interesado.

Analytics:

- `proposal_page_view`
- `proposal_cta_click`

## Página /embudo

Ruta:

- `/embudo`

Objetivo:

- Documentar el embudo automático.

Flujo oficial:

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

Analytics:

- `funnel_page_view`
- `demo_from_funnel_click`
- `pricing_from_funnel_click`
- `activate_agent_click`

Regla:

- Mantener esta página alineada con el modelo automático.
- No volver al flujo anterior basado en venta consultiva manual.

## Pricing

Moneda principal:

- Pesos colombianos COP.

### Starter

- Precio: `$199.000 COP/mes`.
- Enfoque: primer empleado IA.
- Botón: Activar mi Agente IA.

Incluye:

- 1 Agente IA entrenado con tu negocio.
- WhatsApp Business.
- Widget Web.
- CRM Inteligente.
- Captura automática de leads.
- Atención 24/7.
- Base de conocimiento.
- Hasta 2.500 créditos mensuales.
- Analítica básica.
- 2 usuarios.
- Soporte por correo.

### Growth

- Precio: `$599.000 COP/mes`.
- Debe destacar como MÁS POPULAR.
- Plan recomendado.
- Borde y glow dorado.
- Botón: Activar mi Agente IA.

Incluye:

- 5 Agentes IA.
- WhatsApp + Widget Web.
- CRM avanzado.
- Embudos de ventas.
- Seguimiento automático.
- Calificación automática de leads.
- Hasta 8.000 créditos mensuales.
- Hasta 10 subclientes.
- Reportes avanzados.
- Integración con Zapier y Make.
- Correo con tu marca.
- Soporte prioritario.

### Elite

- Precio: `$1.990.000 COP/mes`.
- Enfoque: marca blanca, operación avanzada y nivel empresarial.
- Botón: Activar mi Agente IA.

Incluye:

- 15 Agentes IA.
- WhatsApp.
- Widget Web.
- Instagram.
- Facebook Messenger.
- CRM empresarial.
- Marca blanca completa.
- Logo personalizado.
- Colores personalizados.
- Dominio propio.
- 40.000 créditos mensuales.
- Subclientes ilimitados.
- API empresarial.
- Soporte dedicado.
- Onboarding personalizado.

### Agente adicional

- `$120.000 COP/mes`.

## Testimonios

Estado:

- Fondo claro/lila aprobado.
- Cards premium con borde lila suave.
- Fotos reales como avatar circular.
- Rating visual 5.0 con estrellas SVG doradas.

Clientes actuales:

- Laura Méndez: Gerente Comercial.
- Andrés Vidal: Director de Operaciones.

Regla:

- No cambiar fondo claro.
- No oscurecer la sección.
- No modificar testimonios sin instrucción explícita.

## Estrategia Actual

Prioridad:

1. Generar tráfico.
2. Publicar contenido en Instagram.
3. Analizar Analytics.
4. Mejorar conversión.
5. Conseguir primeras ventas.

NO prioridad:

- Crear muchas más páginas SEO.
- Rediseñar landing.
- Cambiar branding.
- Modificar estructura principal.

## Redes Sociales

Instagram:

Objetivo:

- Reels.
- Carruseles.
- Historias.

Temas:

- Automatización.
- Agentes IA.
- Atención 24/7.
- Ventas.
- Productividad.

## Estado General

- Infraestructura: 100%.
- Landing: 100%.
- SEO Técnico: 95%.
- Google Business: 95%.
- Analytics: 95%.
- Embudo: 90%.
- Ventas: pendiente validación real.

## Próximos Pasos

- Verificar eventos GA4.
- Optimizar página `/demo`.
- Generar tráfico desde Instagram.
- Conseguir primeras conversiones.
- Conectar flujo final con KronoCloud cuando corresponda.
- Conseguir reseñas y autoridad.
- Conseguir backlinks.
- Analizar comportamiento real de usuarios.
- Medir clics en CTAs y visitas a precios.

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

### 2026-06-13

- MASTER_CONTEXT actualizado después de la implementación del embudo automático.
- Se documentó que el modelo comercial cambió de venta consultiva manual a marketing y venta automatizada.
- Se documentaron las páginas SEO actuales: `/`, `/agentes-ia`, `/automatizacion-whatsapp`, `/chatbots-ia`.
- Se documentaron las páginas comerciales: `/demo`, `/propuesta`, `/embudo`.
- Se documentaron eventos GA4 nuevos y existentes.
- Se documentó el estado de Search Console, Google Business Profile y Analytics.
- Se actualizó la estrategia actual: tráfico, Instagram, Analytics, conversión y primeras ventas.

### 2026-06-12

- Google Analytics 4 implementado con `NEXT_PUBLIC_GA_ID`.
- Search Console configurado.
- Sitemap enviado.
- Google Business Profile configurado.
- SEO técnico inicial completado.
- Se documentó la pausa en creación masiva de páginas SEO.

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
- Optimizar página `/demo`.
- Generar tráfico desde Instagram.
- Conseguir primeras conversiones.
- Conectar flujo final con KronoCloud cuando corresponda.
- Conseguir primeras reseñas en Google Business Profile.
- Conseguir backlinks.
- Crear contenido social de forma constante.
- Medir rendimiento de CTAs.
- Evaluar nuevas páginas SEO solo después de validar tráfico y oportunidades reales.
