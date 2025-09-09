/**
 * App principal - Prototipo de app móvil de viajes
 * Funcionalidades: Login local, gestión de paquetes, favoritos, admin
 */

// Estado global de la aplicación
const AppState = {
  currentUser: null,
  currentPage: 'home',
  products: {},
  packages: [],
  favorites: [],
  users: [],
  transports: []
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  initApp();
  setupEventListeners();
  loadUserSession();
});

/**
 * Inicializa la aplicación cargando datos por defecto
 */
function initApp() {
  // Cargar datos por defecto si no existen
  if (!localStorage.getItem('products')) {
    loadDefaultData();
  }
  
  // Cargar datos desde localStorage
  loadFromLocalStorage();
  
  // Inicializar usuarios por defecto
  if (!localStorage.getItem('users')) {
    initDefaultUsers();
  }
  
  console.log('App inicializada correctamente');
}

/**
 * Carga datos por defecto desde archivos JSON
 */
async function loadDefaultData() {
  try {
    // Cargar productos
    const productsResponse = await fetch('data/products.json');
    const products = await productsResponse.json();
    localStorage.setItem('products', JSON.stringify(products));
    
    // Cargar paquetes por defecto
    const packagesResponse = await fetch('data/default-packages.json');
    const defaultPackages = await packagesResponse.json();
    localStorage.setItem('defaultPackages', JSON.stringify(defaultPackages.packages));
    
    console.log('Datos por defecto cargados');
  } catch (error) {
    console.error('Error cargando datos por defecto:', error);
    // Crear datos mínimos si falla la carga
    createMinimalData();
  }
}

/**
 * Crea datos mínimos si falla la carga de archivos
 */
function createMinimalData() {
  const minimalProducts = {
    hotels: [
      {
        id: "hotel_1",
        name: "Hotel Ejemplo",
        image: "assets/images/placeholder.webp",
        price: 100,
        rating: 4.5,
        description: "Hotel de ejemplo",
        availability: true,
        location: "Ciudad Ejemplo",
        amenities: ["WiFi", "Piscina"]
      }
    ],
    restaurants: [
      {
        id: "rest_1",
        name: "Restaurante Ejemplo",
        image: "assets/images/placeholder.webp",
        rating: 4.3,
        description: "Restaurante de ejemplo",
        location: "Ciudad Ejemplo",
        dishes: [
          {"name": "Plato Ejemplo", "price": 15}
        ]
      }
    ],
    foods: [
      {
        id: "food_1",
        name: "Comida Ejemplo",
        image: "assets/images/placeholder.webp",
        price: 12,
        description: "Comida de ejemplo",
        type: "Mexicana"
      }
    ],
    activities: [
      {
        id: "act_1",
        name: "Actividad Ejemplo",
        image: "assets/images/placeholder.webp",
        price: 25,
        description: "Actividad de ejemplo",
        duration: "2 horas",
        schedule: "10:00 AM - 12:00 PM",
        location: "Ciudad Ejemplo"
      }
    ],
    transports: [
      {
        id: "trans_1",
        name: "Transporte Ejemplo",
        image: "assets/images/placeholder.webp",
        description: "Transporte de ejemplo",
        capacity: 50,
        schedule: [
          {
            "day": "Lunes",
            "departure": "08:00",
            "arrival": "12:00",
            "availableSeats": 50,
            "route": "Ruta Ejemplo"
          }
        ]
      }
    ]
  };
  
  localStorage.setItem('products', JSON.stringify(minimalProducts));
  localStorage.setItem('defaultPackages', JSON.stringify([]));
}

/**
 * Inicializa usuarios por defecto
 */
function initDefaultUsers() {
  const defaultUsers = [
    {
      id: 'user_1',
      username: 'usuario',
      password: '123456',
      name: 'Usuario Demo',
      email: 'usuario@demo.com',
      avatar: 'assets/images/avatar-user.webp',
      isAdmin: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 'admin_1',
      username: 'admin',
      password: 'admin123',
      name: 'Administrador',
      email: 'admin@demo.com',
      avatar: 'assets/images/avatar-admin.webp',
      isAdmin: true,
      createdAt: new Date().toISOString()
    }
  ];
  
  localStorage.setItem('users', JSON.stringify(defaultUsers));
}

/**
 * Carga datos desde localStorage
 */
function loadFromLocalStorage() {
  AppState.products = JSON.parse(localStorage.getItem('products') || '{}');
  AppState.packages = JSON.parse(localStorage.getItem('packages') || '[]');
  AppState.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  AppState.users = JSON.parse(localStorage.getItem('users') || '[]');
  AppState.transports = JSON.parse(localStorage.getItem('transports') || '[]');
  
  // Cargar paquetes por defecto si no hay paquetes de usuario
  if (AppState.packages.length === 0) {
    const defaultPackages = JSON.parse(localStorage.getItem('defaultPackages') || '[]');
    AppState.packages = [...defaultPackages];
    saveToLocalStorage('packages', AppState.packages);
  }
}

/**
 * Guarda datos en localStorage
 */
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
  AppState[key] = data;
}

/**
 * Configura event listeners globales
 */
function setupEventListeners() {
  // Navegación
  document.addEventListener('click', function(e) {
    if (e.target.matches('[data-nav]')) {
      e.preventDefault();
      const page = e.target.getAttribute('data-nav');
      navigateTo(page);
    }
    
    if (e.target.matches('[data-modal]')) {
      e.preventDefault();
      const modalId = e.target.getAttribute('data-modal');
      openModal(modalId);
    }
    
    if (e.target.matches('[data-close-modal]')) {
      e.preventDefault();
      closeModal();
    }
    
    if (e.target.matches('[data-favorite]')) {
      e.preventDefault();
      const itemId = e.target.getAttribute('data-favorite');
      toggleFavorite(itemId);
    }
    
    if (e.target.matches('[data-add-to-package]')) {
      e.preventDefault();
      const itemId = e.target.getAttribute('data-add-to-package');
      showAddToPackageModal(itemId);
    }
  });
  
  // Cerrar modales al hacer click en overlay
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
}

/**
 * Navega a una página específica
 */
function navigateTo(page) {
  AppState.currentPage = page;
  
  // Ocultar todas las páginas
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  
  // Mostrar página actual
  const currentPageElement = document.getElementById(page);
  if (currentPageElement) {
    currentPageElement.classList.remove('hidden');
  }
  
  // Actualizar navegación activa
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  const activeNavItem = document.querySelector(`[data-nav="${page}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
  
  // Cargar contenido específico de la página
  loadPageContent(page);
}

/**
 * Carga contenido específico de cada página
 */
function loadPageContent(page) {
  switch (page) {
    case 'home':
      loadHomeContent();
      break;
    case 'search':
      loadSearchContent();
      break;
    case 'mypackages':
      loadMyPackagesContent();
      break;
    case 'profile':
      loadProfileContent();
      break;
    case 'admin-home':
      loadAdminHomeContent();
      break;
    case 'admin-add':
      loadAdminAddContent();
      break;
    case 'admin-packages':
      loadAdminPackagesContent();
      break;
    case 'admin-transport':
      loadAdminTransportContent();
      break;
  }
}

/**
 * Maneja el login de usuarios
 */
function handleLogin(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const user = loginLocal(username, password);
  
  if (user) {
    AppState.currentUser = user;
    saveToLocalStorage('currentUser', user);
    
    if (user.isAdmin) {
      navigateTo('admin-home');
    } else {
      navigateTo('home');
    }
    
    showToast('¡Bienvenido, ' + user.name + '!');
  } else {
    showToast('Usuario o contraseña incorrectos', 'error');
  }
}

/**
 * Login local usando localStorage
 */
function loginLocal(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find(user => user.username === username && user.password === password);
}

/**
 * Carga la sesión del usuario
 */
function loadUserSession() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  
  if (currentUser) {
    AppState.currentUser = currentUser;
    
    if (currentUser.isAdmin) {
      navigateTo('admin-home');
    } else {
      navigateTo('home');
    }
  } else {
    // Mostrar login si no hay sesión
    showLoginModal();
  }
}

/**
 * Muestra el modal de login
 */
function showLoginModal() {
  const modalHTML = `
    <div class="modal-overlay" id="loginModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Iniciar Sesión</h2>
        </div>
        <div class="modal-content">
          <form id="loginForm">
            <div class="form-group">
              <label class="form-label" for="username">Usuario</label>
              <input type="text" id="username" class="form-input" required 
                     placeholder="usuario o admin">
            </div>
            <div class="form-group">
              <label class="form-label" for="password">Contraseña</label>
              <input type="password" id="password" class="form-input" required 
                     placeholder="123456 o admin123">
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-large" style="width: 100%;">
                Iniciar Sesión
              </button>
            </div>
          </form>
          <div style="margin-top: 1rem; padding: 1rem; background: #f8fafc; border-radius: 8px; font-size: 0.875rem;">
            <strong>Usuarios de prueba:</strong><br>
            Usuario: <code>usuario</code> / Contraseña: <code>123456</code><br>
            Admin: <code>admin</code> / Contraseña: <code>admin123</code>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

/**
 * Cierra el modal de login
 */
function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.remove();
  }
}

/**
 * Abre un modal específico
 */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Cierra el modal actual
 */
function closeModal() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
  document.body.style.overflow = 'auto';
}

/**
 * Muestra una notificación toast
 */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  if (type === 'error') {
    toast.style.background = '#ef4444';
  }
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/**
 * Alterna favorito de un item
 */
function toggleFavorite(itemId) {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.indexOf(itemId);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Eliminado de favoritos');
  } else {
    favorites.push(itemId);
    showToast('Agregado a favoritos');
  }
  
  saveToLocalStorage('favorites', favorites);
  updateFavoriteButtons();
}

/**
 * Actualiza los botones de favorito en la UI
 */
function updateFavoriteButtons() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  document.querySelectorAll('[data-favorite]').forEach(btn => {
    const itemId = btn.getAttribute('data-favorite');
    const isFavorite = favorites.includes(itemId);
    
    btn.style.color = isFavorite ? '#ef4444' : '#94a3b8';
    btn.innerHTML = isFavorite ? '❤️' : '🤍';
  });
}

/**
 * Muestra modal para agregar item a paquete
 */
function showAddToPackageModal(itemId) {
  const userPackages = AppState.packages.filter(pkg => pkg.createdBy === AppState.currentUser.id);
  
  const modalHTML = `
    <div class="modal-overlay" id="addToPackageModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Agregar a Paquete</h2>
          <button class="modal-close" data-close-modal>&times;</button>
        </div>
        <div class="modal-content">
          <div class="form-group">
            <label class="form-label">Selecciona un paquete:</label>
            <div id="packageList">
              ${userPackages.map(pkg => `
                <div class="package-option" style="padding: 1rem; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 0.5rem; cursor: pointer;" 
                     onclick="addItemToPackage('${pkg.id}', '${itemId}')">
                  <div style="font-weight: 600;">${pkg.name}</div>
                  <div style="font-size: 0.875rem; color: #64748b;">${pkg.items.length} items</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-secondary" onclick="showCreatePackageModal()" style="width: 100%;">
              Crear Nuevo Paquete
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

/**
 * Agrega un item a un paquete específico
 */
function addItemToPackage(packageId, itemId) {
  const packageIndex = AppState.packages.findIndex(pkg => pkg.id === packageId);
  
  if (packageIndex > -1) {
    // Buscar el item en los productos
    let item = null;
    let itemType = null;
    
    for (const type in AppState.products) {
      const found = AppState.products[type].find(product => product.id === itemId);
      if (found) {
        item = found;
        itemType = type;
        break;
      }
    }
    
    if (item) {
      // Crear objeto de item para el paquete
      const packageItem = {
        type: itemType,
        id: itemId,
        details: {}
      };
      
      // Agregar detalles específicos según el tipo
      if (itemType === 'hotels') {
        packageItem.details = {
          guests: 2,
          checkIn: new Date().toISOString().split('T')[0],
          checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0]
        };
      } else if (itemType === 'restaurants') {
        packageItem.details = {
          dishes: item.dishes.slice(0, 2).map(dish => ({
            name: dish.name,
            quantity: 1
          }))
        };
      } else if (itemType === 'activities') {
        packageItem.details = {
          guests: 2,
          time: '10:00'
        };
      }
      
      AppState.packages[packageIndex].items.push(packageItem);
      saveToLocalStorage('packages', AppState.packages);
      
      showToast('Item agregado al paquete');
      closeModal();
    }
  }
}

/**
 * Muestra modal para crear nuevo paquete
 */
function showCreatePackageModal() {
  const modalHTML = `
    <div class="modal-overlay" id="createPackageModal">
      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">Crear Nuevo Paquete</h2>
          <button class="modal-close" data-close-modal>&times;</button>
        </div>
        <div class="modal-content">
          <form id="createPackageForm">
            <div class="form-group">
              <label class="form-label" for="packageName">Nombre del Paquete</label>
              <input type="text" id="packageName" class="form-input" required 
                     placeholder="Mi Paquete de Viaje">
            </div>
            <div class="form-group">
              <label class="form-label" for="packageDescription">Descripción</label>
              <textarea id="packageDescription" class="form-input form-textarea" 
                        placeholder="Describe tu paquete..."></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" data-close-modal>Cancelar</button>
          <button class="btn" onclick="createPackage()">Crear Paquete</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

/**
 * Crea un nuevo paquete
 */
function createPackage() {
  const name = document.getElementById('packageName').value;
  const description = document.getElementById('packageDescription').value;
  
  if (!name.trim()) {
    showToast('El nombre del paquete es requerido', 'error');
    return;
  }
  
  const newPackage = {
    id: 'pkg_' + Date.now(),
    name: name,
    description: description || 'Paquete personalizado',
    image: 'assets/images/placeholder.webp',
    price: 0,
    duration: 'Personalizado',
    createdBy: AppState.currentUser.id,
    items: [],
    createdAt: new Date().toISOString()
  };
  
  AppState.packages.push(newPackage);
  saveToLocalStorage('packages', AppState.packages);
  
  showToast('Paquete creado exitosamente');
  closeModal();
  
  // Recargar contenido de paquetes si estamos en esa página
  if (AppState.currentPage === 'mypackages') {
    loadMyPackagesContent();
  }
}

/**
 * Simula el proceso de pago
 */
function simulatePayment(packageId) {
  const packageIndex = AppState.packages.findIndex(pkg => pkg.id === packageId);
  
  if (packageIndex > -1) {
    const pkg = AppState.packages[packageId];
    
    // Calcular precio total
    let totalPrice = 0;
    pkg.items.forEach(item => {
      const product = findProductById(item.id);
      if (product) {
        if (item.type === 'restaurants') {
          item.details.dishes.forEach(dish => {
            const menuItem = product.dishes.find(d => d.name === dish.name);
            if (menuItem) {
              totalPrice += menuItem.price * dish.quantity;
            }
          });
        } else {
          totalPrice += product.price || 0;
        }
      }
    });
    
    // Agregar transporte si existe
    if (pkg.transport) {
      totalPrice += 50; // Precio fijo del transporte
    }
    
    showToast(`Simulación de pago: $${totalPrice} MXN procesado exitosamente`);
  }
}

/**
 * Busca un producto por ID en todos los tipos
 */
function findProductById(id) {
  for (const type in AppState.products) {
    const found = AppState.products[type].find(product => product.id === id);
    if (found) return found;
  }
  return null;
}

/**
 * Genera imagen de portada para paquete
 */
function generatePackageCover(packageId) {
  const pkg = AppState.packages.find(p => p.id === packageId);
  if (!pkg || pkg.items.length === 0) {
    return 'assets/images/placeholder.webp';
  }
  
  // Si hay items, usar la primera imagen disponible
  for (const item of pkg.items) {
    const product = findProductById(item.id);
    if (product && product.image) {
      return product.image;
    }
  }
  
  return 'assets/images/placeholder.webp';
}

/**
 * Cierra sesión del usuario
 */
function logout() {
  AppState.currentUser = null;
  localStorage.removeItem('currentUser');
  showLoginModal();
}

/**
 * Carga contenido específico de cada página
 */
function loadPageContent(page) {
  switch (page) {
    case 'home':
      if (typeof loadHomeContent === 'function') loadHomeContent();
      break;
    case 'search':
      if (typeof loadSearchContent === 'function') loadSearchContent();
      break;
    case 'mypackages':
      if (typeof loadMyPackagesContent === 'function') loadMyPackagesContent();
      break;
    case 'profile':
      if (typeof loadProfileContent === 'function') loadProfileContent();
      break;
    case 'admin-home':
      if (typeof loadAdminHomeContent === 'function') loadAdminHomeContent();
      break;
    case 'admin-add':
      if (typeof loadAdminAddContent === 'function') loadAdminAddContent();
      break;
    case 'admin-packages':
      if (typeof loadAdminPackagesContent === 'function') loadAdminPackagesContent();
      break;
    case 'admin-transport':
      if (typeof loadAdminTransportContent === 'function') loadAdminTransportContent();
      break;
  }
}

/**
 * Actualiza los botones de favorito en la UI
 */
function updateFavoriteButtons() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  
  document.querySelectorAll('[data-favorite]').forEach(btn => {
    const itemId = btn.getAttribute('data-favorite');
    const isFavorite = favorites.includes(itemId);
    
    btn.style.color = isFavorite ? '#ef4444' : '#94a3b8';
    btn.innerHTML = isFavorite ? '❤️' : '🤍';
  });
}

// Exportar funciones para uso global
window.AppState = AppState;
window.navigateTo = navigateTo;
window.toggleFavorite = toggleFavorite;
window.showAddToPackageModal = showAddToPackageModal;
window.addItemToPackage = addItemToPackage;
window.showCreatePackageModal = showCreatePackageModal;
window.createPackage = createPackage;
window.simulatePayment = simulatePayment;
window.logout = logout;
window.closeModal = closeModal;
window.openModal = openModal;
window.loadPageContent = loadPageContent;
window.updateFavoriteButtons = updateFavoriteButtons;
