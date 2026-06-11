# OpenNovaIA - Master Context

Última actualización: 2026-06-11

## Proyecto

OpenNovaIA es una landing page premium para una agencia de Inteligencia Artificial enfocada en automatización empresarial mediante agentes de IA.

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
- Automatización de ventas, soporte y procesos internos.
- Agentes de IA disponibles 24/7.
- No comunicar OpenNovaIA como "otro chatbot".

Mensaje principal:

> Agentes IA listos para vender y atender por WhatsApp, web y CRM, con despliegue rápido, soporte local y control total.

Mensajes comerciales:

- Más ventas, menos chats perdidos.
- Atención 24/7 sin contratar más personal.
- Automatiza ventas, soporte y seguimiento de clientes.
- Convierte conversaciones en oportunidades reales.

## Branding y Logo

Assets públicos creados:

- `public/logo.svg`
- `public/logo.png`

URLs públicas:

- https://opennovaia.com/logo.svg
- https://opennovaia.com/logo.png

Implementación:

- El logo del Navbar y Footer carga desde `/logo.svg` usando `next/image`.
- Se agregó `alt="OpenNovaIA Logo"`.
- Se agregó `aria-label="OpenNovaIA Logo"`.
- El logo se usa en Organization Schema.
- El logo se usa en Open Graph metadata.
- El logo se usa en Twitter metadata.
- No existe manifest web app actualmente.

Uso recomendado:

- Usar `https://opennovaia.com/logo.png` como imagen oficial en WhatsApp Channel, perfiles sociales y plataformas que requieran PNG.
- Usar `https://opennovaia.com/logo.svg` para SEO, schema, branding web y assets vectoriales.

## Estilo Visual

La landing principal ya está aprobada visualmente.

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

## Paleta Visual OpenNovaIA

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

## Landing Principal

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

## Páginas Actuales

Rutas principales:

- `/`
- `/agentes-ia`
- `/automatizacion-whatsapp`
- `/casos-de-exito`

Páginas SEO creadas/optimizadas:

- `app/agentes-ia/page.tsx`
- `app/automatizacion-whatsapp/page.tsx`
- `app/casos-de-exito/page.tsx`

Enlaces internos SEO:

- La landing principal enlaza hacia `/agentes-ia`.
- La landing principal enlaza hacia `/automatizacion-whatsapp`.
- `/agentes-ia` enlaza hacia `/automatizacion-whatsapp` y `/`.
- `/automatizacion-whatsapp` enlaza hacia `/agentes-ia` y `/`.
- `/casos-de-exito` enlaza hacia `/`, `/agentes-ia` y `/automatizacion-whatsapp`.
- El Footer enlaza hacia `/casos-de-exito`.

## Página Casos de Éxito

Ruta:

- `/casos-de-exito`

Archivo:

- `app/casos-de-exito/page.tsx`

Objetivo:

- Aumentar confianza, autoridad y conversión mostrando casos piloto, escenarios de implementación y estructura de prueba social.
- Preparar la página para publicar futuros casos reales de clientes cuando existan datos verificables.

Regla editorial:

- No inventar clientes reales.
- No usar testimonios falsos.
- No afirmar resultados reales si no existen.
- Usar lenguaje prudente como "casos piloto", "escenarios de implementación", "resultados esperados", "casos modelo" y "próximamente publicaremos casos reales".

Secciones creadas:

- Hero con CTA a demo y planes.
- Sección de confianza con métricas orientativas.
- Casos modelo para e-commerce, clínica/salud e inmobiliaria.
- Sección "Cómo medimos el éxito".
- Sección de transparencia: "Resultados reales, no promesas vacías".
- CTA final para solicitar demo.

Schema agregado:

- WebPage Schema.
- BreadcrumbList Schema.
- ItemList Schema para casos modelo.

## Pricing

Moneda principal recomendada:

- Pesos colombianos COP.

Motivo:

- Genera más confianza local.
- Evita dudas por TRM.
- Facilita la decisión de compra.
- Los precios en dólares pueden mostrarse solo como equivalencia secundaria.

### Starter

- Precio: `$199.000 COP/mes`.
- Incluye 1 agente IA.
- Enfoque: primer empleado IA.
- Ideal para freelancers, independientes, negocios pequeños, consultores y microempresas digitales.
- Botón: Activar mi Agente IA.

Incluye:

- Agente IA entrenado con el negocio.
- WhatsApp Business.
- Widget web.
- CRM inteligente.
- Captura automática de leads.
- Atención 24/7.
- Base de conocimiento.
- Analítica básica.
- 2 usuarios.
- Soporte por correo.

### Growth / Medium

- Precio: `$599.000 COP/mes`.
- Incluye 5 agentes IA.
- Debe destacar como MÁS POPULAR.
- Borde y glow dorado.
- Plan recomendado y más promocionado.
- Ideal para pymes, startups, clínicas, academias, e-commerce y empresas en crecimiento.

Incluye:

- WhatsApp + widget web.
- CRM avanzado.
- Embudos de venta.
- Seguimiento automático.
- Calificación automática de leads.
- Reportes avanzados.
- Integraciones con Zapier y Make.
- Soporte prioritario.

### Elite / Pro

- Precio base recomendado: `$1.990.000 COP/mes`.
- Enfoque: marca blanca, operación avanzada y nivel empresarial.
- Ideal para empresas medianas, grandes, operaciones complejas y clientes que necesitan API, soporte dedicado y control avanzado.
- Estilo morado premium oscuro.

Decisión pendiente:

- Cantidad final de agentes IA.
- En el estudio original se recomendaban 10 agentes IA.
- En propuesta posterior se evaluó usar 15 agentes IA.

### Agente adicional

- Precio definido: `$120.000 COP/mes` por agente adicional.

## Recomendación Comercial

- Growth/Medium debe ser el plan más promocionado.
- Starter sirve como entrada accesible.
- Pro/Elite debe proyectar nivel empresarial y premium.
- Evitar competir solo por precio.
- Vender resultados, no solo características técnicas.

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

## SEO Técnico

Archivos SEO actuales:

- `app/sitemap.ts`
- `app/robots.ts`
- `app/opengraph-image.tsx`
- `app/layout.tsx`
- `components/JsonLd.tsx`

Sitemap:

- https://opennovaia.com/sitemap.xml

Robots:

- https://opennovaia.com/robots.txt

Metadata principal:

- Title: OpenNovaIA | Agentes de IA para Automatizar Empresas 24/7
- Description: Automatizamos ventas, atención al cliente y procesos empresariales mediante agentes de inteligencia artificial disponibles 24/7.

Open Graph:

- Metadata actualizada con `/logo.svg`.
- También existe `app/opengraph-image.tsx` como imagen generada 1200x630.
- Estética: fondo oscuro premium, logo neural/infinito, texto OpenNovaIA y subtítulo comercial.

Twitter Cards:

- Metadata actualizada con `/logo.svg`.

Schema:

- Organization Schema actualizado con `https://opennovaia.com/logo.svg`.
- Service Schema activo para agentes IA.
- FAQPage JSON-LD específico para `/agentes-ia`.
- FAQPage JSON-LD específico para `/automatizacion-whatsapp`.
- WebPage, BreadcrumbList e ItemList JSON-LD específico para `/casos-de-exito`.

Google Search Console:

- Ya se solicitó indexación de `/agentes-ia`.
- Ya se solicitó indexación de `/automatizacion-whatsapp`.

Verificaciones recientes:

- `npm run lint`: pasó.
- `npm run build`: pasó.
- Push a GitHub completado en `origin/main`.

## Estudio de Mercado Colombia

Enfoque inicial:

- OpenNovaIA se enfocará inicialmente en Colombia.

Oportunidad principal:

- Vender agentes IA para WhatsApp, web y CRM.

Sectores prioritarios:

- E-commerce
- Fintech
- Atención al cliente/BPO
- Salud
- Educación
- Inmobiliarias
- Clínicas
- Academias/cursos online

Posicionamiento recomendado:

- Premium.
- Profesional.
- Confiable.
- Orientado a resultados empresariales.

## Canal de WhatsApp

Descripción aprobada:

```text
🤖 Open Nova IA | Automatización Inteligente para Empresas

Descubre cómo vender más, atender mejor y ahorrar tiempo con agentes de Inteligencia Artificial. 🚀

💬 IA para WhatsApp
📈 Automatización de ventas
⚡ Atención 24/7
🏆 Estrategias de crecimiento
🎯 Casos reales y novedades exclusivas

Únete a las empresas que están construyendo el futuro con IA.

🔥 Mientras tú lees esto, otras empresas ya están automatizando con IA.

¿La tuya será la siguiente?

🚀 Descubre cómo los agentes de IA pueden transformar tu negocio:

🌐 https://opennovaia.com
```

## Contacto

Correo oficial:

- hello@opennovaia.com

Regla:

- No conectar WhatsApp personal.
- No incluir números personales.
- No usar enlaces `wa.me` sin autorización.

## Deploy

Plataforma objetivo:

- Vercel

Repositorio:

- https://github.com/emyforero286-ship-it/opennovaia

Rama:

- `main`

Comando build:

- `npm run build`

Comando dev:

- `npm run dev`

## Commits Recientes

- `d4fd8c8` Add FAQ SEO sections
- `309dda7` feat: create public logo assets for branding and SEO

## Próximos Pasos Recomendados

- Crear blog SEO en `/blog`.
- Crear Google Business Profile.
- Crear LinkedIn Company Page.
- Usar `https://opennovaia.com/logo.png` como imagen oficial en WhatsApp Channel y perfiles sociales.
- Conseguir primeros casos piloto y testimonios.
- Reemplazar casos modelo de `/casos-de-exito` por casos reales cuando existan datos verificables.
- Validar despliegue final en Vercel.
- Probar Open Graph en Facebook, LinkedIn y WhatsApp.
- Revisar performance con Lighthouse.
- Definir sistema de captación de leads.
- Implementar formulario o CRM cuando se autorice.

Primeros artículos recomendados:

- Qué es un agente de IA para WhatsApp.
- Cómo automatizar atención al cliente en Colombia.
- Agentes IA para clínicas.
- Agentes IA para inmobiliarias.
- Agentes IA para ecommerce.

## Reglas para Codex

Antes de modificar:

1. Leer este archivo.
2. Confirmar que el cambio solicitado no toca secciones no autorizadas.
3. Mantener consistencia visual.
4. No rediseñar secciones aprobadas.
5. Hacer cambios pequeños e incrementales.
6. Ejecutar build al finalizar si el usuario lo pide o si el cambio afecta producción.
7. Corregir errores antes de terminar.
8. Mantener compatibilidad con Vercel.

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

## Rutina de Actualización Diaria

Usar esta sección para registrar cambios diarios.

Formato sugerido:

```md
### YYYY-MM-DD

- Cambio realizado:
- Archivos modificados:
- Build:
- Deploy:
- Pendientes:
```

## Historial

### 2026-06-11

- Se creó la página SEO `/casos-de-exito` con casos modelo, métricas prudentes, sección de transparencia y CTA final.
- Se agregó schema WebPage, BreadcrumbList e ItemList para `/casos-de-exito`.
- Se agregó `/casos-de-exito` al sitemap y al Footer como enlace interno SEO.
- MASTER_CONTEXT actualizado con avances recientes de branding, SEO, estructura comercial, assets públicos, páginas actuales, estrategia Colombia y próximos pasos.
- Se documentaron los assets públicos `public/logo.svg` y `public/logo.png`.
- Se documentaron FAQ SEO, enlaces internos, schema y metadata con logo público.

### 2026-06-10

- Se agregaron enlaces internos SEO entre `/`, `/agentes-ia` y `/automatizacion-whatsapp`.
- Se agregaron FAQ SEO en `/agentes-ia` y `/automatizacion-whatsapp`.
- Se agregó FAQPage JSON-LD específico por ruta.
- Se crearon assets públicos de logo para branding y SEO.

### 2026-06-09

- Landing OpenNovaIA preparada para Vercel.
- Repositorio GitHub configurado.
- SEO técnico básico agregado.
- Sitemap y robots creados.
- Metadata optimizada.
- Open Graph optimizado con identidad neural.
- Sección Pricing actualizada con planes COP.
- Testimonios mejorados con fotografías y rating visual.

## Pendientes

- Crear `/blog`.
- Crear Google Business Profile.
- Crear LinkedIn Company Page.
- Publicar casos reales en `/casos-de-exito` cuando existan resultados verificables.
- Probar URLs públicas de logo después del redeploy:
  - https://opennovaia.com/logo.svg
  - https://opennovaia.com/logo.png
- Probar Open Graph/Twitter Cards después del redeploy.
- Ejecutar auditoría Lighthouse en producción.
- Definir sistema de captación de leads.
- Implementar formulario o CRM cuando se autorice.
