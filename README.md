# 🎬 CineChronicle — Guía Cronológica Cinematográfica

**CineChronicle** es una plataforma web estática de alto rendimiento desarrollada con **Astro 7**, **Alpine.js** y **Vanilla CSS**, diseñada para amantes del cine que desean explorar el orden cronológico interno perfecto de sus sagas y universos cinemáticos favoritos.

---

## 🚀 Tecnologías y Arquitectura

- **Core Framework:** [Astro v7.1.3](https://astro.build/) (Modo `static` ultra-rápido, 0 KB bundle de React en el cliente).
- **Micro-interactividad:** [Alpine.js v3](https://alpinejs.dev/) (Navegación reactiva, selector de idioma i18n y drawers sin sobrecarga).
- **Estilos:** Vanilla CSS3 Modular (Variables HSL, Glassmorphism, animaciones fluidas y soporte Dark Mode).
- **Optimización de Imágenes:** Formatos de última generación (**WebP** y **AVIF**) con dimensiones fijas (`width`/`height`), `loading="lazy"` nativo y `decoding="async"` para lograr un **Cumulative Layout Shift (CLS) de 0**.
- **Tipografía e Iconografía:** Google Fonts (*Inter*, *Playfair Display*) y FontAwesome 7.
- **Enrutamiento:** Navegación Single-Page (SPA por Hash `#inicio`, `#marvels`, `#star-wars`, etc.) para renderizado instantáneo sin recargas.

---

## 📽️ Sagas e Historias Incluidas (15 Sagas)

1. 🛡️ **Marvel (MCU)** — *Universo Cinematográfico de Marvel*
2. 🏎️ **Rápidos y Furiosos** — *Saga Fast & Furious*
3. ⚔️ **Star Wars** — *La Guerra de las Galaxias*
4. 👻 **El Conjuro** — *Universo Expedientes Warren*
5. 👁️ **Monsters, Inc.** — *Disney / Pixar*
6. 🤠 **Indiana Jones** — *Aventuras Arqueológicas*
7. 🚪 **Insidious** — *La Noche del Demonio*
8. 👾 **Alien** — *Terror Biológico Espacial*
9. 🎯 **Predator** — *Depredador / Cazadores Yautja*
10. 🤖 **Terminator** — *La Guerra de las Máquinas*
11. ☠️ **Alien vs. Depredador** — *Franquicia Crossover*
12. 💍 **El Señor de los Anillos** — *Middle-earth & Los Anillos de Poder*
13. 🪄 **Harry Potter & Animales Fantásticos** — *Wizarding World*
14. ⚙️ **Saw** — *Juego Macabro / John Kramer*
15. 🧬 **X-Men** — *Universo de Mutantes*

---

## 📁 Estructura del Proyecto

```text
CineChronicle/
├── public/                  # Recursos estáticos servidos directamente
│   ├── flags/               # Banderas SVG locales (PE, ES, US)
│   └── img/                 # Afiches y portadas optimizados (.webp / .avif)
├── scripts/                 # Utilidades de mantenimiento y optimización
│   ├── convert_to_webp.js   # Script para convertir imágenes a WebP
│   └── update_data_webp.js  # Script para actualizar rutas en data/
├── src/
│   ├── components/          # Componentes .astro 100% estáticos
│   │   ├── Hero.astro
│   │   ├── LanguageSelector.astro
│   │   ├── MobileCategoryDrawer.astro
│   │   ├── Navbar.astro
│   │   └── SagaTimelineSection.astro
│   ├── context/             # Diccionarios de traducción e idiomas (i18n)
│   │   └── translations.js
│   ├── data/                # Data estática de las 15 sagas (historias y cronologías)
│   ├── layouts/             # Plantilla HTML5 base
│   │   └── BaseLayout.astro
│   ├── pages/               # Páginas principales del sitio
│   │   └── index.astro
│   └── styles/              # Hojas de estilo modulares CSS3
├── astro.config.mjs         # Configuración oficial de Astro 7
├── package.json             # Dependencias del proyecto
└── README.md                # Documentación principal
```

---

## 💻 Guía de Comandos (Paso a Paso)

### 1. Requisitos Previos
Asegúrate de tener instalado **Node.js** (versión 18.x o superior) y **npm**.

### 2. Instalación de Dependencias
Abre una terminal en el directorio raíz del proyecto y ejecuta:

```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo Local
Para previsualizar y trabajar en tiempo real con recarga automática:

```bash
npm run dev
```

El sitio estará disponible en tu navegador en:
👉 `http://localhost:4321` *(o http://localhost:3000)*

### 4. Compilar la Versión Final para Producción
Para generar los archivos estáticos optimizados en la carpeta `dist/`:

```bash
npm run build
```

### 5. Previsualizar la Compilación de Producción Localmente
Para probar exactamente la carpeta `dist/` resultante antes de publicar:

```bash
npm run preview
```

---

## 🛠️ Herramientas de Mantenimiento (`scripts/`)

La carpeta `scripts/` contiene herramientas automatizadas creadas para el proyecto:

- **Convertir imágenes a WebP:**
  ```bash
  node scripts/convert_to_webp.js
  ```
- **Normalizar rutas de datos:**
  ```bash
  node scripts/update_data_webp.js
  ```

---

## 🌐 Despliegue en GitHub Pages

El proyecto incluye el paquete `gh-pages` preconfigurado. Para publicar la versión estática directamente en la rama `gh-pages`:

```bash
npm run deploy
```

---

## 📝 Licencia y Créditos

- **Desarrollada por:** Ing. Eddie Jesus Ezequiel Sanchez Guerrero
- **Finalidad:** Guía interactiva de consulta y estructuración cronológica de sagas cinematográficas.
- **Naturaleza:** Plataforma sin fines de lucro, de carácter informativo y educativo.