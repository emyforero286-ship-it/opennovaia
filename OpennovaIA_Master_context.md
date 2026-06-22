# OpenNovaIA - Master Context

Ultima actualizacion: 2026-06-22

## Proyecto

OpenNovaIA es una plataforma premium de agentes IA para empresas, enfocada en automatizar ventas, atencion al cliente y procesos internos mediante agentes inteligentes disponibles 24/7.

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

## Estado Oficial Actual

La landing principal esta aprobada visualmente y no debe redisenarse sin autorizacion explicita.

Estado del proyecto:

- Infraestructura: 100%
- Landing principal: 100%
- SEO tecnico inicial: estable
- Google Business Profile: configurado
- Google Analytics 4: funcionando
- Embudo automatico: implementado
- Planes conectados a Mercado Pago: implementado
- Navbar preparada para clientes existentes y nuevos clientes
- Estrategia de cliente piloto: iniciada
- Ventas: pendiente validacion real con trafico y cliente piloto

## Posicionamiento

OpenNovaIA debe comunicarse como:

- Plataforma premium de agentes IA para empresas.
- Solucion de automatizacion de ventas, atencion al cliente y procesos.
- Agentes IA disponibles 24/7.
- Solucion orientada a clientes finales.
- Producto comercializado mediante marketing, contenido, SEO, Instagram, Threads, Canal de WhatsApp y automatizacion.

OpenNovaIA NO debe comunicarse como:

- Una herramienta tecnica para desarrolladores.
- Un chatbot generico.
- Una solucion infantil o experimental.
- Un producto centrado en configuraciones tecnicas complejas.

Mensaje principal:

> Agentes IA listos para vender, atender y automatizar procesos empresariales 24/7.

Mensajes comerciales:

- Mas ventas, menos chats perdidos.
- Atencion 24/7 sin contratar mas personal.
- Automatiza ventas, soporte y seguimiento de clientes.
- Convierte conversaciones en oportunidades reales.
- No vendemos IA. Vendemos tiempo, productividad y crecimiento.

## Identidad Visual

Lineamientos:

- Estetica premium, moderna y tecnologica.
- Hero oscuro con morados profundos, lilas, fucsia y acentos dorados.
- Glassmorphism elegante.
- Bordes luminosos sutiles.
- Sensacion SaaS premium.
- Look profesional, limpio y confiable.

Inspiracion:

- OpenAI
- Intercom
- HubSpot
- Salesforce
- Stripe

Evitar:

- Aspecto infantil.
- Robots caricaturescos como protagonista.
- Diseno gamer.
- Exceso de elementos visuales.
- Cambios de branding sin validacion.

Paleta base:

- Morado profundo.
- Lila premium.
- Fucsia neon.
- Dorado elegante.
- Negro profundo.

## Landing Principal

Ruta:

- /

Secciones actuales:

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

Regla:

No modificar diseno, colores, layout, espaciados, responsive ni componentes aprobados salvo instruccion explicita.

## Navbar

Estado actual:

- Existe boton `Acceder`.
- `Acceder` apunta a `https://opennovaia.kronocloud.com/login`.
- `Acceder` abre en una nueva pestana con `target="_blank"` y `rel="noopener noreferrer"`.
- `Acceder` esta destinado a clientes existentes.
- Existe boton `Registrarse`.
- `Registrarse` apunta al checkout principal de Mercado Pago del plan Growth.
- `Registrarse` abre en una nueva pestana con `target="_blank"` y `rel="noopener noreferrer"`.
- `Registrarse` esta destinado a nuevos clientes.

Orden actual:

```text
[Acceder] [Registrarse]
```

Reglas:

- `Acceder` es secundario y para clientes existentes.
- `Registrarse` es el CTA principal y debe conducir a compra.
- No conectar `Acceder` a rutas internas inexistentes.
- No conectar `Registrarse` a demo ni a anchors internos mientras el checkout Growth sea el flujo vigente.
- Mantener el diseno visual actual de la Navbar.

## Hero

Objetivo:

Mostrar agentes IA trabajando para empresas y guiar al usuario hacia el proceso de compra automatico.

Estructura:

- Izquierda: badge, titulo, descripcion y CTA.
- Derecha: celular premium con conversacion empresarial tipo WhatsApp Business.
- Animaciones: mensajes entrando, indicador escribiendo, cambio de conversacion, estado online y movimiento sutil.

Reglas:

- No usar robots caricaturescos como protagonista.
- No convertir el Hero en una pieza centrada en el logo.
- No conectar numeros personales.
- No usar enlaces directos a WhatsApp personal.

## CTA y Conversion

OpenNovaIA utiliza demostracion automatica y compra digital. El usuario debe poder entender la oferta, ver la demostracion cuando aplique, revisar planes, pagar y avanzar hacia la activacion sin depender de reuniones manuales.

El modelo actual NO utiliza "Agendar Demo" como CTA principal.

Flujo comercial oficial:

```text
Trafico
->
Landing
->
Checkout
->
Demo automatica cuando aplique
->
Mercado Pago
->
Activacion
```

CTAs actuales:

Landing principal:

- Registrarse -> checkout Growth de Mercado Pago
- Acceder -> https://opennovaia.kronocloud.com/login
- Ver demostracion -> /demo cuando aplique

Navbar:

- Acceder -> https://opennovaia.kronocloud.com/login
- Registrarse -> checkout Growth de Mercado Pago

Pagina demo:

- Ver planes -> /#planes
- Activar mi Agente IA -> /#planes

Casos de exito:

- Ver demostracion -> /demo

Reglas:

- Centralizar la conversion en compra, demostracion automatica y activacion.
- Mantener los CTA principales alineados con checkout, proceso y demostracion automatica.
- No crear dependencias de contacto humano como flujo principal.
- No modificar botones visualmente si solo se requiere cambiar destino o texto.

## Mercado Pago

Los planes de OpenNovaIA estan conectados a Mercado Pago mediante suscripciones.

Planes conectados:

- Plan Starter: Mercado Pago Subscription.
- Plan Growth: Mercado Pago Subscription.
- Plan Elite: Mercado Pago Subscription.

Estado actual:

- Los botones principales de las tarjetas de precios abren el checkout correspondiente de cada plan.
- El boton `Registrarse` de la Navbar reutiliza el checkout principal de Growth.
- Los checkouts externos deben abrir en nueva pestana.

Reglas:

- Los botones de compra deben abrir el checkout correspondiente en una pestana nueva.
- Mantener `target="_blank"` y `rel="noopener noreferrer"` en enlaces externos de pago.
- Mantener el tracking GA4 existente en los botones de activacion.
- El flujo de compra ya no depende de contacto manual.

## Pricing Oficial Vigente

Mantener el diseno visual aprobado de `PricingSection`.

Starter:

- Precio: $199.000 COP/mes
- Agentes incluidos: 1 Agente IA
- Creditos: 1.200 creditos mensuales
- Mensaje comercial: Tu primer empleado con IA

Growth:

- Precio: $599.000 COP/mes
- Agentes incluidos: 5 Agentes IA
- Creditos: 7.000 creditos mensuales
- Mensaje comercial: El plan ideal para escalar
- Estado: plan destacado y mas importante comercialmente

Elite:

- Precio: $1.990.000 COP/mes
- Agentes incluidos: 15 Agentes IA
- Creditos: 20.000 creditos mensuales
- Mensaje comercial: IA empresarial sin limites

Reglas de pricing:

- Growth debe seguir siendo la tarjeta destacada.
- No cambiar estilos, colores, animaciones ni estructura salvo instruccion explicita.
- Mantener enfoque en resultados: ventas, atencion, productividad y automatizacion.
- Mantener unicamente la version comercial actual de los planes.
- No documentar beneficios antiguos que ya no forman parte de la oferta vigente.

## Eliminaciones y Funcionalidades No Vigentes

Estado:

- Los botones `Comprar Agente Adicional` fueron eliminados de Starter, Growth y Elite.
- No existe CTA secundario de compra de agentes adicionales en las tarjetas.
- No existen placeholders activos para esa funcionalidad en PricingSection.
- Las tarjetas de precios deben mostrar solo su CTA principal vigente.

Regla:

- No documentar ni mostrar funcionalidades futuras que no esten listas para uso actual.

## Paginas Publicas Actuales

Landing principal:

- /

Paginas SEO:

- /agentes-ia
- /automatizacion-whatsapp
- /chatbots-ia

Paginas comerciales:

- /demo
- /propuesta
- /embudo

Blog:

- /blog
- /blog/agentes-ia-para-clinicas
- /blog/agentes-ia-para-ecommerce
- /blog/agentes-ia-para-inmobiliarias
- /blog/que-es-un-agente-ia-para-whatsapp

Otras rutas publicas:

- /casos-de-exito
- /sitemap.xml
- /robots.txt
- /opengraph-image
- /icon.svg
- /logo.svg
- /logo.png
- /favicon.ico
- /apple-touch-icon.png

No existe dashboard, login, panel interno ni aplicacion web dentro del proyecto publico actual.

## SEO

Estado:

- Auditoria SEO landing principal: 86/100.
- SEO tecnico considerado estable para la fase actual.
- Sitemap funcionando.
- Robots funcionando.
- Metadata funcionando.
- Canonical URLs configuradas.
- Open Graph funcionando.
- Twitter Cards funcionando.
- Blog activo.
- Enlaces internos SEO implementados.
- FAQ SEO implementado en paginas relevantes.
- Schema.org implementado.

Schema activo:

- Organization
- Service
- FAQ Schema en paginas SEO

Pausas estrategicas:

- Se pauso la creacion masiva de paginas SEO.
- La prioridad futura no es crear mas URLs, sino mejorar contenido, autoridad, backlinks y conversion.

## Google Search Console

Estado:

- Search Console configurado.
- Sitemap enviado.
- Indexacion manual solicitada para URLs principales.
- Se investigaron errores de redireccion reportados por Google Search Console.
- No se encontraron redirects en configuracion de Next.js.
- No se encontro `middleware.ts` generando redirecciones.
- No se encontraron loops problematicos.
- Las URLs revisadas funcionan correctamente.

Diagnostico:

- La causa probable de los reportes es normalizacion de URLs o datos historicos de Google.
- No realizar cambios de redirects ni `trailingSlash` sin evidencia real.
- Evitar tocar configuracion de redirecciones si las URLs publicas responden correctamente.

## Google Analytics 4

Propiedad:

- OpenNovaIA Web

Measurement ID:

- G-G1HCYVBYWT

Integracion:

- `components/GoogleAnalytics.tsx`
- `NEXT_PUBLIC_GA_ID`
- Variable configurada en Vercel
- `.env.example` actualizado
- Analytics funcionando

Eventos configurados:

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

- Verificar calidad de datos con trafico real.
- Configurar eventos de pago cuando el flujo lo permita.
- Medir conversion desde redes sociales.

## Google Business Profile

Estado:

- Perfil creado para OpenNovaIA.
- Categoria: Empresa de software.
- Sitio web conectado: https://opennovaia.com
- Servicios configurados.
- Horarios configurados.
- Fotos corporativas agregadas.
- Descripcion optimizada.
- Areas de servicio configuradas para Colombia y ciudades principales.

Pendiente:

- Conseguir primeras resenas.
- Publicar actualizaciones periodicas.
- Medir trafico desde el perfil.

## Pagina /demo

Objetivo:

Actuar como vendedor automatico y demostracion comercial.

Debe explicar:

- Problema.
- Solucion.
- Beneficios.
- Funcionamiento.
- Resultado esperado.
- Camino hacia planes.

Reglas:

- No depender de reuniones humanas.
- No usar numeros personales.
- No usar enlaces directos a WhatsApp personal.
- Guiar hacia /#planes.

## Pagina /propuesta

Objetivo:

Presentar beneficios, implementacion y planes como apoyo al proceso de decision.

Uso:

- Refuerzo comercial.
- Explicacion clara de valor.
- Soporte para usuarios que necesitan revisar la oferta con mas detalle.

## Pagina /embudo

Objetivo:

Documentar el embudo automatico de marketing y venta.

Flujo oficial:

```text
Trafico
->
Landing
->
Demo automatica
->
Precios
->
Pago
->
Activacion
```

Principio:

OpenNovaIA debe vender mediante marketing, contenido, demostracion automatica, medicion y pago digital.

## Marketing Actual

Prioridades:

1. Instagram Reels.
2. Historias de Instagram.
3. Threads.
4. Canal de WhatsApp.
5. Formularios para clientes piloto.

Contenido recomendado:

- Automatizacion.
- Ventas.
- Atencion al cliente.
- Productividad.
- Tiempo ahorrado.

Evitar:

- Hablar unicamente de tecnologia.
- Hablar unicamente de IA.
- Contenido excesivamente tecnico.

Principio:

> No vendemos IA. Vendemos tiempo, productividad y crecimiento.

## Cliente Piloto

Estado:

- Se inicio busqueda de clientes piloto.
- Se creo formulario de validacion.
- Profesora del colegio virtual contactada como posible cliente piloto.
- Objetivo actual: recopilar feedback real antes de escalar.

## Contacto

Correo oficial:

- hello@opennovaia.com

Reglas:

- No incluir numeros personales.
- No conectar botones a WhatsApp personal.
- Usar correo oficial si se requiere contacto visible.

## Historial

Historial anterior:

- CTAs actualizados al flujo de demostracion automatica.
- Se reemplazo el lenguaje de agenda manual por demostracion automatica.
- Tracking `demo_cta_click` implementado.
- Correcciones ortograficas visibles realizadas.
- CTAs centralizados hacia landing principal.
- Planes conectados a Mercado Pago.
- Diagnostico de Search Console realizado.
- Estrategia actual enfocada en marketing organico.

Entrada 2026-06-22:

- Integracion de Mercado Pago en planes.
- Incorporacion de botones `Acceder` y `Registrarse` en Navbar.
- `Acceder` configurado para clientes existentes.
- `Registrarse` conectado al checkout Growth.
- Cambio de CTAs de demo hacia flujo automatico.
- Inicio de estrategia de clientes piloto.
- Inicio de estrategia de contenido en Instagram, Threads y Canal de WhatsApp.
- Eliminacion de botones `Comprar Agente Adicional`.

## Estrategia Actual

Prioridad maxima:

1. Conseguir formularios completados.
2. Conseguir cliente piloto.
3. Publicar contenido constantemente.
4. Analizar Analytics.
5. Optimizar conversion.
6. Conseguir primeras ventas.

No prioridad:

- Mas paginas SEO.
- Redisenar la landing.
- Cambios de branding.
- Cambios de infraestructura.
- Modificaciones innecesarias de Vercel.

## Redes Sociales

Instagram:

- Reels.
- Carruseles.
- Historias.

Threads:

- Ideas cortas.
- Opiniones sobre automatizacion.
- Aprendizajes de clientes piloto.
- Contenido ligero y frecuente.

Canal de WhatsApp:

- Distribucion de contenido.
- Educacion de prospectos.
- Seguimiento no invasivo.

Temas:

- Automatizacion empresarial.
- Agentes IA.
- Atencion 24/7.
- Ventas.
- Productividad.
- Antes/despues de procesos manuales.
- Errores comunes en atencion al cliente.

## Deploy

Plataforma:

- Vercel

Dominio:

- opennovaia.com

Reglas:

- Mantener compatibilidad con Vercel.
- Validar build antes de cambios importantes.
- No subir `node_modules`, `.next`, `.vercel`, logs ni carpetas de salida.

## Reglas para Codex

Antes de modificar:

1. Leer este archivo.
2. Mantener consistencia visual.
3. No redisenar secciones aprobadas.
4. Hacer cambios pequenos e incrementales.
5. Ejecutar `npm run lint` y `npm run build` despues de cambios de codigo o SEO.
6. Corregir errores antes de terminar.
7. Subir cambios a GitHub cuando el usuario lo indique o cuando sea parte de la tarea.

Reglas visuales:

- No modificar diseno aprobado sin autorizacion.
- No cambiar colores globales.
- No cambiar layout general.
- No alterar responsive.
- No tocar secciones aprobadas si la tarea es puntual.

Reglas comerciales:

- Mantener flujo automatico.
- Mantener conversion hacia checkout, demostracion automatica y activacion.
- Mantener Mercado Pago como flujo de compra vigente.
- No introducir dependencias de contacto manual como flujo principal.
- No mostrar funcionalidades que no esten listas para uso actual.

## Pendientes

- Verificar eventos GA4 con trafico real.
- Optimizar pagina /demo segun comportamiento de usuarios.
- Generar trafico desde Instagram, Threads y Canal de WhatsApp.
- Conseguir formularios completados.
- Conseguir cliente piloto.
- Recopilar feedback real antes de escalar.
- Conseguir primeras conversiones.
- Validar Mercado Pago con compras reales.
- Conectar flujo final de activacion cuando corresponda.
- Conseguir primeras resenas.
- Conseguir autoridad y backlinks.
- Crear contenido organico de forma constante.

