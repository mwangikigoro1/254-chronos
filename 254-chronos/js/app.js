/* ============================================================
   254 CHRONOS — Main Store App
   Multi-user safe: each browser session has its own isolated cart.
   Watch catalogue is read-only for store visitors — only the
   admin panel writes to the catalogue store.
   ============================================================ */

let watches = [];
let cart = [];
let activeFilter = 'all';

// Each browser tab / session gets its own cart key so multiple
// users on the same device never share a cart.
const SESSION_CART_KEY = (() => {
  let key = sessionStorage.getItem('chronos_session_id');
  if (!key) {
    key = 'cart_' + Math.random().toString(36).slice(2) + Date.now();
    sessionStorage.setItem('chronos_session_id', key);
  }
  return key;
})();

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  watches = getWatches();
  // Load this session's cart — isolated per tab/session
  cart = JSON.parse(sessionStorage.getItem(SESSION_CART_KEY) || '[]');
  renderWatches(watches);
  updateCartUI();
  initNavbar();
  initCart();
  initModal();
  initFilters();
  initSearch();
  initContactForm();
  initHamburger();
  initBrandPage();
});

/* ---- NAVBAR SCROLL ---- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    // highlight active nav link
    const sections = ['home','collection','brands','about','contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (!el || !link) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) link.classList.add('active');
      else link.classList.remove('active');
    });
  });
}

/* ---- HAMBURGER ---- */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ---- RENDER WATCHES ---- */
function renderWatches(list) {
  const grid = document.getElementById('watchGrid');
  if (!grid) return;
  if (!list || list.length === 0) {
    grid.innerHTML = `<div class="no-watches"><i class="fa fa-search"></i><h3>No watches found</h3><p>Try a different search or filter.</p></div>`;
    return;
  }
  grid.innerHTML = list.map(w => watchCard(w)).join('');
  // Attach click listeners
  grid.querySelectorAll('.watch-card').forEach(card => {
    const id = card.dataset.id;
    card.querySelector('.watch-card-img-wrap').addEventListener('click', () => openModal(id));
    card.querySelector('.watch-card-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(id);
    });
  });
}

function watchCard(w) {
  return `
    <div class="watch-card" data-id="${w.id}">
      ${w.featured ? '<span class="featured-badge">⭐ Featured</span>' : ''}
      <div class="watch-card-img-wrap" style="overflow:hidden;cursor:pointer;">
        <img class="watch-card-img" src="${w.image}" alt="${w.name}"
          onerror="this.src='assets/watches/watch-1.jpg'" />
      </div>
      <div class="watch-card-body">
        <p class="watch-card-brand">${w.brand}</p>
        <h3 class="watch-card-name">${w.name}</h3>
        <p class="watch-card-model">${w.model}</p>
        <div class="watch-card-footer">
          <span class="watch-card-price">${formatPrice(w.price)}</span>
          <button class="watch-card-btn"><i class="fa fa-shopping-bag"></i> Add to Cart</button>
        </div>
      </div>
    </div>`;
}

/* ---- BRAND PAGE ---- */
function initBrandPage() {
  // Make every brand card clickable
  document.querySelectorAll('.brand-card[data-brand]').forEach(card => {
    card.addEventListener('click', () => openBrandPage(card.dataset.brand));
  });
  // Back button
  document.getElementById('brandBackBtn').addEventListener('click', closeBrandPage);
  // Close on overlay click (outside the page panel)
  document.getElementById('brandPageOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('brandPageOverlay')) closeBrandPage();
  });
  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.getElementById('brandPageOverlay').classList.contains('open')) {
      closeBrandPage();
    }
  });
}

function openBrandPage(brand) {
  const all = getWatches();
  const brandWatches = all.filter(w => w.brand.toLowerCase() === brand.toLowerCase());

  document.getElementById('brandPageName').textContent = brand.toUpperCase();
  document.getElementById('brandPageCount').textContent =
    brandWatches.length === 0 ? 'No models listed' :
    brandWatches.length === 1 ? '1 Model' :
    `${brandWatches.length} Models`;

  const grid = document.getElementById('brandPageGrid');
  if (brandWatches.length === 0) {
    grid.innerHTML = `<div class="no-watches" style="grid-column:1/-1;">
      <i class="fa fa-clock"></i>
      <h3>No watches listed yet</h3>
      <p>Check back soon — this collection is coming soon.</p>
    </div>`;
  } else {
    grid.innerHTML = brandWatches.map(w => watchCard(w)).join('');
    // Attach click listeners for modal and cart inside brand page
    grid.querySelectorAll('.watch-card').forEach(card => {
      const id = card.dataset.id;
      card.querySelector('.watch-card-img-wrap').addEventListener('click', () => openModal(id));
      card.querySelector('.watch-card-btn').addEventListener('click', e => {
        e.stopPropagation();
        addToCart(id);
      });
    });
  }

  // Scroll brand page to top
  document.getElementById('brandPage').scrollTop = 0;

  document.getElementById('brandPageOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeBrandPage() {
  document.getElementById('brandPageOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- FILTERS ---- */
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });
}

function initSearch() {
  document.getElementById('searchInput').addEventListener('input', applyFilters);
}

function applyFilters() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  let list = getWatches(); // always fresh
  if (activeFilter !== 'all') {
    list = list.filter(w => w.brand.toLowerCase() === activeFilter);
  }
  if (query) {
    list = list.filter(w =>
      w.name.toLowerCase().includes(query) ||
      w.brand.toLowerCase().includes(query) ||
      w.model.toLowerCase().includes(query)
    );
  }
  renderWatches(list);
}

/* ---- MODAL ---- */
let modalGalleryIndex = 0;

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);
  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (!document.getElementById('watchModal').classList.contains('open')) return;
    if (e.key === 'ArrowRight') modalNextImg();
    if (e.key === 'ArrowLeft')  modalPrevImg();
    if (e.key === 'Escape')     closeModal();
  });
}

function openModal(id) {
  const w = getWatches().find(x => x.id === id);
  if (!w) return;
  modalGalleryIndex = 0;

  // Normalise images array — support old single-image entries
  const imgs = (w.images && w.images.length > 0) ? w.images : [w.image || 'assets/watches/watch-1.jpg'];
  const fallback = 'assets/watches/watch-1.jpg';
  const hasMany = imgs.length > 1;

  const content = document.getElementById('modalContent');
  content.innerHTML = `
    <div class="modal-gallery" id="modalGallery">
      <div class="modal-gallery-main">
        <img class="modal-img" id="modalMainImg" src="${imgs[0]}" alt="${w.name}"
          onerror="this.src='${fallback}'" />
        ${hasMany ? `
        <button class="gallery-arrow gallery-prev" onclick="modalPrevImg()"><i class="fa fa-chevron-left"></i></button>
        <button class="gallery-arrow gallery-next" onclick="modalNextImg()"><i class="fa fa-chevron-right"></i></button>
        <div class="gallery-dots" id="galleryDots">
          ${imgs.map((_,i) => `<span class="gallery-dot ${i===0?'active':''}" onclick="modalGoTo(${i})"></span>`).join('')}
        </div>` : ''}
      </div>
      ${hasMany ? `
      <div class="modal-gallery-thumbs" id="galleryThumbs">
        ${imgs.map((src, i) => `
          <img class="modal-thumb ${i===0?'active':''}" src="${src}" alt="View ${i+1}"
            onerror="this.src='${fallback}'"
            onclick="modalGoTo(${i})" />`).join('')}
      </div>` : ''}
    </div>
    <div class="modal-details">
      <p class="modal-brand">${w.brand}</p>
      <h2 class="modal-name">${w.name}</h2>
      <p class="modal-model">Ref. ${w.model}</p>
      <p class="modal-price">${formatPrice(w.price)}</p>
      <p class="modal-desc">${w.description || ''}</p>
      <div class="modal-specs">
        <h4>Specifications</h4>
        ${specRow('Case Material', w.caseMaterial)}
        ${specRow('Movement', w.movement)}
        ${specRow('Water Resistance', w.waterResistance)}
        ${specRow('Case Diameter', w.diameter)}
        ${specRow('Strap / Bracelet', w.strap)}
        ${specRow('Gender', w.gender)}
      </div>
      <div class="modal-actions">
        <button class="btn btn-gold" onclick="addToCart('${w.id}'); closeModal();">
          <i class="fa fa-shopping-bag"></i> Add to Cart
        </button>
        <a class="btn btn-outline" href="https://wa.me/254118780011?text=Hi%20254%20Chronos!%20I%20am%20interested%20in%20the%20*${encodeURIComponent(w.brand + ' ' + w.name)}*%20(Ref.%20${encodeURIComponent(w.model)})%20at%20*${encodeURIComponent(formatPrice(w.price))}*.%0AImage%3A%20${encodeURIComponent(imgs[0])}" target="_blank">
          <i class="fab fa-whatsapp"></i> Enquire
        </a>
      </div>
    </div>`;

  // Store images on modal for nav
  document.getElementById('modalGallery').dataset.imgs = JSON.stringify(imgs);

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('watchModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function modalGoTo(idx) {
  const gallery = document.getElementById('modalGallery');
  if (!gallery) return;
  const imgs = JSON.parse(gallery.dataset.imgs || '[]');
  if (!imgs.length) return;
  modalGalleryIndex = (idx + imgs.length) % imgs.length;

  document.getElementById('modalMainImg').src = imgs[modalGalleryIndex];
  // Update dots
  document.querySelectorAll('.gallery-dot').forEach((d, i) => d.classList.toggle('active', i === modalGalleryIndex));
  // Update thumbs
  document.querySelectorAll('.modal-thumb').forEach((t, i) => t.classList.toggle('active', i === modalGalleryIndex));
}

function modalNextImg() { modalGoTo(modalGalleryIndex + 1); }
function modalPrevImg() { modalGoTo(modalGalleryIndex - 1); }

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('watchModal').classList.remove('open');
  document.body.style.overflow = '';
}

function specRow(key, val) {
  if (!val) return '';
  return `<div class="spec-row"><span class="spec-key">${key}</span><span class="spec-val">${val}</span></div>`;
}

/* ---- CART ---- */
function initCart() {
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', checkoutWhatsApp);
}

function addToCart(id) {
  const w = getWatches().find(x => x.id === id);
  if (!w) return;
  const existing = cart.find(c => c.id === id);
  if (existing) {
    showToast(`${w.name} already in cart`);
    return;
  }
  cart.push({ id: w.id, name: w.name, brand: w.brand, price: w.price, image: w.image });
  saveCart();
  updateCartUI();
  showToast(`${w.name} added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  // Save to sessionStorage — isolated per tab, never shared between users
  sessionStorage.setItem(SESSION_CART_KEY, JSON.stringify(cart));
}

function updateCartUI() {
  document.getElementById('cartCount').textContent = cart.length;
}

function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><i class="fa fa-shopping-bag"></i><p>Your cart is empty</p></div>`;
    totalEl.textContent = 'KSh 0';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}"
        onerror="this.src='assets/watches/watch-1.jpg'" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.brand} ${item.name}</p>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
        <i class="fa fa-trash"></i>
      </button>
    </div>`).join('');
  const total = cart.reduce((sum, c) => sum + Number(c.price), 0);
  totalEl.textContent = formatPrice(total);
}

function checkoutWhatsApp() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  const lines = cart.map(c =>
    `• *${c.brand} ${c.name}* — ${formatPrice(c.price)}%0A  Image: ${encodeURIComponent(c.image)}`
  ).join('%0A%0A');
  const total = cart.reduce((s, c) => s + Number(c.price), 0);
  const msg = `Hello 254 Chronos! I would like to order:%0A%0A${lines}%0A%0A*Total: ${formatPrice(total)}*`;
  window.open(`https://wa.me/254118780011?text=${msg}`, '_blank');
}

/* ---- CONTACT FORM ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent! We will get back to you shortly.');
    form.reset();
  });
}

/* ---- TOAST ---- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
