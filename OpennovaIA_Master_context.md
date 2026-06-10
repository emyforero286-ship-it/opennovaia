# OpenNovaIA - Master Context

Ultima actualizacion: 2026-06-09

## Proyecto

OpenNovaIA es una landing page premium para una agencia de Inteligencia Artificial enfocada en automatizacion empresarial mediante agentes de IA.

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
- Automatizacion de ventas, soporte y procesos internos.
- Agentes de IA disponibles 24/7.

## Estilo Visual

La landing ya esta aprobada visualmente.

Lineamientos:

- Estetica premium, moderna y tecnologica.
- Fondo oscuro en Hero.
- Morados profundos, lilas brillantes, fucsia neon y acentos dorados.
- Glassmorphism moderado.
- Bordes luminosos sutiles.
- Sensacion SaaS premium.

Inspiracion:

- OpenAI
- Intercom
- HubSpot
- Salesforce
- Stripe
- Anthropic

Evitar:

- Robots caricaturescos.
- Estetica infantil.
- Diseno gamer.
- Exceso de elementos visuales.
- Redisenar secciones aprobadas sin autorizacion.

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

- No redisenar la landing completa sin autorizacion.
- Hacer cambios incrementales y especificos.

## Hero

Objetivo:

- Comunicar agentes de IA para empresas.
- Mostrar automatizacion, atencion 24/7 y conversion de leads.

Hero izquierdo:

- Badge de agencia de inteligencia artificial.
- Titulo principal.
- Subtitulo orientado a ventas, atencion y procesos.
- Boton primario: Activar mi Agente IA.
- Boton secundario: Ver como funciona.

Hero derecho:

- Celular premium.
- Simulacion de chat empresarial tipo WhatsApp Business.
- Conversaciones con cambio automatico entre industrias.
- Animacion suave y profesional.

Reglas Hero:

- No usar robots caricaturescos.
- No convertir el logo en protagonista.
- No modificar Hero sin instruccion explicita.

## Celular Hero

Estado:

- Refinado como demo visual de chat empresarial.

Debe mantener:

- Header tipo app movil.
- Nombre de empresa.
- Estado online o escribiendo.
- Conversaciones empresariales.
- Mensajes entrantes y salientes.
- Indicador de escribiendo.
- Tabs de industrias visibles.
- Animaciones discretas.

Evitar:

- Mensajes superpuestos.
- Position absolute para mensajes del chat.
- Visual saturado.
- Tarjetas que tapen el celular.

## Pricing

Planes actuales:

### Starter

- Precio: $199.000 COP/mes
- Enfoque: primer empleado IA.
- Boton: Activar mi Agente IA.

### Growth

- Precio: $599.000 COP/mes
- Debe destacar como MAS POPULAR.
- Borde y glow dorado.
- Plan recomendado.

### Elite

- Precio: $1.990.000 COP/mes
- Enfoque: marca blanca y operacion avanzada.
- Estilo morado premium oscuro.

## Testimonios

Estado:

- Fondo claro/lila aprobado.
- Cards premium con borde lila suave.
- Fotos reales como avatar circular.
- Rating visual 5.0 con estrellas SVG doradas.

Clientes actuales:

- Laura Mendez: Gerente Comercial.
- Andres Vidal: Director de Operaciones.

Regla:

- No cambiar fondo claro.
- No oscurecer la seccion.

## SEO

Archivos SEO actuales:

- app/sitemap.ts
- app/robots.ts
- app/opengraph-image.tsx
- app/layout.tsx

Sitemap:

- https://opennovaia.com/sitemap.xml

Robots:

- https://opennovaia.com/robots.txt

Metadata principal:

- Title: OpenNovaIA | Agentes de IA para Automatizar Empresas 24/7
- Description: Automatizamos ventas, atencion al cliente y procesos empresariales mediante agentes de inteligencia artificial disponibles 24/7.

Open Graph:

- Imagen generada por app/opengraph-image.tsx
- Formato 1200x630
- Logo neural/infinito
- Fondo oscuro premium
- Texto OpenNovaIA y subtitulo comercial

## Contacto

Correo oficial:

- hello@opennovaia.com

Regla:

- No conectar WhatsApp personal.
- No incluir numeros personales.
- No usar enlaces wa.me sin autorizacion.

## Deploy

Plataforma objetivo:

- Vercel

Repositorio:

- https://github.com/emyforero286-ship-it/opennovaia

Rama:

- main

Comando build:

- npm run build

Comando dev:

- npm run dev

## Reglas para Codex

Antes de modificar:

1. Leer este archivo.
2. Confirmar que el cambio solicitado no toca secciones no autorizadas.
3. Mantener consistencia visual.
4. No redisenar secciones aprobadas.
5. Hacer cambios pequenos e incrementales.
6. Ejecutar build al finalizar si el usuario lo pide o si el cambio afecta produccion.
7. Corregir errores antes de terminar.
8. Mantener compatibilidad con Vercel.

## Archivos que no deben subirse

No subir:

- node_modules
- .next
- .vercel
- dev-server.log
- dev-server.err.log
- out
- dist

Estos deben permanecer en .gitignore.

## Rutina de Actualizacion Diaria

Usar esta seccion para registrar cambios diarios.

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

### 2026-06-09

- Landing OpenNovaIA preparada para Vercel.
- Repositorio GitHub configurado.
- SEO tecnico basico agregado.
- Sitemap y robots creados.
- Metadata optimizada.
- Open Graph optimizado con identidad neural.
- Seccion Pricing actualizada con planes COP.
- Testimonios mejorados con fotografias y rating visual.

## Pendientes

- Validar despliegue final en Vercel.
- Enviar sitemap en Google Search Console.
- Probar Open Graph en Facebook, LinkedIn y WhatsApp.
- Revisar performance con Lighthouse.
- Definir sistema de captacion de leads.
- Implementar formulario o CRM cuando se autorice.
