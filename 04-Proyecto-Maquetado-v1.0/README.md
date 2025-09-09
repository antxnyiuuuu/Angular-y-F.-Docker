# Viajes México - Prototipo de App Móvil

Un prototipo de aplicación móvil para gestión de viajes y paquetes turísticos, desarrollado con HTML, CSS y JavaScript vanilla. Diseñado específicamente para dispositivos móviles (360-420px) con un tema azul/turquesa inspirado en Spotify.

## 🚀 Características

### Para Usuarios
- **Inicio**: Recomendaciones personalizadas y filtros rápidos
- **Búsqueda**: Explorar hoteles, restaurantes, comidas y actividades
- **Mis Paquetes**: Crear y gestionar paquetes de viaje personalizados
- **Perfil**: Editar información personal y ver estadísticas
- **Favoritos**: Marcar productos como favoritos
- **Simulación de Pago**: Proceso de pago simulado para paquetes

### Para Administradores
- **Panel Admin**: Estadísticas generales y visión de conjunto
- **Agregar Productos**: Crear hoteles, restaurantes, comidas y actividades
- **Gestionar Paquetes**: Crear, editar y eliminar paquetes
- **Gestionar Transportes**: Configurar horarios y disponibilidad

## 📱 Diseño

- **Responsive**: Optimizado para móviles (360-420px)
- **Tema**: Azul principal (#0ea5e9) con acentos turquesa (#06b6d4)
- **Navegación**: Bottom navigation tipo Spotify
- **UI**: Tarjetas, modales, animaciones suaves
- **Iconos**: SVG integrados para mejor rendimiento

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, animaciones
- **JavaScript ES6+**: Vanilla JS, localStorage, módulos
- **Sin frameworks**: Código ligero y rápido
- **Node.js**: Para servidor de desarrollo (opcional)
- **npm**: Gestión de dependencias y scripts

## 📋 Requisitos del Sistema

### Mínimos
- **Navegador**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript**: Habilitado
- **localStorage**: Soportado
- **Resolución**: 360px+ (móvil recomendado)

### Para Desarrollo
- **Node.js**: 14.0.0+ (opcional, para npm)
- **npm**: 6.0.0+ (opcional)
- **Python**: 3.0+ (alternativa para servidor local)

## 📁 Estructura del Proyecto

```
/
├── pages/                    # Páginas de la aplicación
│   ├── index.html           # Página principal (Home)
│   ├── search.html          # Búsqueda de productos
│   ├── mypackages.html      # Mis paquetes
│   ├── profile.html         # Perfil de usuario
│   ├── admin-home.html      # Panel de administración
│   ├── admin-add.html       # Agregar productos
│   ├── admin-packages.html  # Gestionar paquetes
│   └── admin-transport.html # Gestionar transportes
├── data/                    # Datos de la aplicación
│   ├── products.json        # Productos (hoteles, restaurantes, etc.)
│   └── default-packages.json # Paquetes por defecto
├── assets/                  # Recursos estáticos
│   ├── images/              # Imágenes placeholder
│   ├── icons/               # Iconos SVG
│   ├── styles.css           # Estilos principales
│   └── app.js               # Lógica JavaScript
└── README.md               # Este archivo
```

## 🚀 Cómo Usar

### 1. Instalación y Configuración
```bash
# Navegar a la carpeta del proyecto
cd 04-Proyecto-Maquetado-v1.0

# Instalar dependencias (solo la primera vez)
npm install

# Iniciar la aplicación
npm start
```

### 2. Comandos Disponibles
```bash
# Iniciar servidor de desarrollo (recomendado)
npm start
# Abre automáticamente en http://localhost:3000

# Modo desarrollo (sin caché)
npm run dev

# Servir desde la raíz del proyecto
npm run serve

# Limpiar datos (instrucciones)
npm run clean
```

### 3. Alternativas sin npm
```bash
# Opción 1: Doble click en pages/index.html
# Opción 2: Servidor Python
python -m http.server 8000
# Luego abrir: http://localhost:8000/pages/index.html

# Opción 3: Servidor Node.js simple
npx http-server pages -p 3000 -o
```

### 2. Usuarios de Prueba

#### Usuario Normal
- **Usuario**: `usuario`
- **Contraseña**: `123456`

#### Administrador
- **Usuario**: `admin`
- **Contraseña**: `admin123`

### 3. Funcionalidades Principales

#### Como Usuario:
1. **Explorar**: Navega por recomendaciones en la página principal
2. **Buscar**: Usa la página de búsqueda para encontrar productos específicos
3. **Crear Paquetes**: Haz clic en el botón flotante "+" para crear paquetes
4. **Agregar Items**: Desde cualquier producto, usa "Agregar" para añadirlo a un paquete
5. **Favoritos**: Marca productos con el corazón para guardarlos como favoritos
6. **Pagar**: En "Mis Paquetes", usa el botón "Pagar" para simular el pago

#### Como Admin:
1. **Panel**: Ve estadísticas generales en admin-home
2. **Agregar Productos**: Crea hoteles, restaurantes, comidas y actividades
3. **Gestionar Paquetes**: Crea paquetes para usuarios y gestiona los existentes
4. **Transportes**: Configura horarios y disponibilidad de transportes

## 🔧 Configuración y Personalización

### Resetear Datos
```javascript
// En la consola del navegador
localStorage.clear();
// Recargar la página
location.reload();
```

### Agregar Nuevos Productos
1. Inicia sesión como admin
2. Ve a "Agregar Producto"
3. Completa el formulario según el tipo de producto
4. Los productos se guardan automáticamente en localStorage

### Personalizar Colores
Edita las variables CSS en `assets/styles.css`:
```css
:root {
  --primary-blue: #0ea5e9;        /* Azul principal */
  --primary-blue-dark: #2563eb;   /* Azul oscuro */
  --accent-turquoise: #06b6d4;    /* Turquesa */
  /* ... más variables */
}
```

## 📊 Datos de Ejemplo

La aplicación incluye datos de ejemplo:

- **6 Hoteles**: Con precios, calificaciones y servicios
- **6 Restaurantes**: Con menús y platos específicos
- **8 Comidas**: Platos tradicionales mexicanos
- **5 Actividades**: Tours y experiencias
- **1 Transporte**: Con horarios configurables
- **3 Paquetes**: Ejemplos creados por admin

## 🎨 Características de Diseño

### Responsive Design
- **Móvil**: 360-420px (diseño principal)
- **Escritorio**: Simula viewport móvil con contenedor centrado
- **Breakpoints**: Adaptación automática

### Animaciones
- **Transiciones**: Suaves en botones y tarjetas
- **Modales**: Animación de entrada (slide-in)
- **Hover Effects**: Estados interactivos
- **Loading States**: Spinners y estados de carga

### Accesibilidad
- **Contraste**: Cumple estándares WCAG
- **Navegación**: Teclado y touch-friendly
- **Labels**: Aria-labels en botones importantes
- **Focus**: Estados de foco visibles

## 🔍 Funcionalidades Técnicas

### Gestión de Estado
- **localStorage**: Persistencia de datos local
- **AppState**: Estado global de la aplicación
- **Sincronización**: Datos consistentes entre páginas

### Búsqueda
- **Búsqueda Local**: Filtrado en tiempo real
- **Categorías**: Filtros por tipo de producto
- **Resultados**: Paginación y ordenamiento

### Modales
- **Sistema Reutilizable**: Modales dinámicos
- **Overlay**: Cierre con click en fondo
- **Responsive**: Adaptación a diferentes tamaños

## 🐛 Solución de Problemas

### La aplicación no carga
1. Verifica que estés abriendo `pages/index.html`
2. Asegúrate de que todos los archivos estén en las carpetas correctas
3. Usa un servidor local en lugar de abrir directamente el archivo

### Los datos no se guardan
1. Verifica que localStorage esté habilitado en tu navegador
2. No uses modo incógnito (localStorage puede estar deshabilitado)
3. Recarga la página después de hacer cambios

### Problemas de estilo
1. Verifica que `assets/styles.css` se esté cargando
2. Limpia la caché del navegador (Ctrl+F5)
3. Revisa la consola del navegador para errores

## 📈 Optimizaciones

### Rendimiento
- **Imágenes**: Placeholders SVG ligeros
- **CSS**: Variables y reutilización de estilos
- **JS**: Funciones optimizadas y lazy loading
- **Tamaño**: Proyecto completo < 8MB

### SEO y Accesibilidad
- **Meta Tags**: Viewport y charset configurados
- **Semántica**: HTML5 semántico
- **Alt Text**: Imágenes con texto alternativo
- **Estructura**: Jerarquía clara de encabezados

## 🤝 Contribuir

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Haz tus cambios
4. Prueba en diferentes dispositivos
5. Envía un pull request

## 📄 Licencia

Este proyecto es un prototipo educativo. Úsalo libremente para aprender y experimentar.

## 🎯 Próximas Mejoras

- [ ] Modo oscuro
- [ ] Exportar/Importar datos
- [ ] Notificaciones push
- [ ] Geolocalización
- [ ] Integración con APIs reales
- [ ] PWA (Progressive Web App)

---

**Desarrollado con ❤️ para demostrar capacidades de prototipado web móvil**
