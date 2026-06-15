/* ============================================================
   254 CHRONOS — Admin Panel JS
   Credentials: Mwangikigoro / Chronos254@!
   ============================================================ */

const ADMIN_USER = 'Mwangikigoro';
const ADMIN_PASS = 'Chronos254@!';

let editingId = null;

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  checkLogin();
});

/* ---- LOGIN ---- */
function checkLogin() {
  const logged = sessionStorage.getItem('chronos_admin');
  if (logged === 'yes') showAdmin();
}

document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    sessionStorage.setItem('chronos_admin', 'yes');
    showAdmin();
  } else {
    document.getElementById('loginError').textContent = 'Invalid username or password.';
  }
});

function showAdmin() {
  document.getElementById('loginGate').style.display = 'none';
  document.getElementById('adminPanel').style.display = 'flex';
  loadDashboard();
  loadWatchesTable();
  initSidebar();
  initForm();
  initAdminSearch();
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('chronos_admin');
  location.reload();
});

/* ---- SIDEBAR NAV ---- */
function initSidebar() {
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const tab = link.dataset.tab;
      showTab(tab);
    });
  });
}

function showTab(name) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.getElementById(`tab-${name}`).style.display = 'block';
  document.querySelectorAll('.sidebar-link').forEach(l => {
    l.classList.toggle('active', l.dataset.tab === name);
  });
  const titles = { dashboard: 'Dashboard', watches: 'Manage Watches', add: editingId ? 'Edit Watch' : 'Add New Watch' };
  document.getElementById('pageTitle').textContent = titles[name] || name;
  if (name === 'watches') loadWatchesTable();
  if (name === 'dashboard') loadDashboard();
  if (name === 'add' && !editingId) resetForm();
}

/* ---- DASHBOARD ---- */
function loadDashboard() {
  const watches = getWatches();
  const brands = [...new Set(watches.map(w => w.brand))];
  const featured = watches.filter(w => w.featured);
  const avgPrice = watches.length ? Math.round(watches.reduce((s, w) => s + Number(w.price), 0) / watches.length) : 0;

  document.getElementById('statTotal').textContent = watches.length;
  document.getElementById('statBrands').textContent = brands.length;
  document.getElementById('statFeatured').textContent = featured.length;
  document.getElementById('statAvgPrice').textContent = formatPrice(avgPrice);

  // Recent 4
  const recent = [...watches].slice(-4).reverse();
  const grid = document.getElementById('recentGrid');
  if (grid) {
    grid.innerHTML = recent.map(w => `
      <div class="watch-card">
        <img class="watch-card-img" src="${w.image}" alt="${w.name}"
          onerror="this.src='assets/watches/watch-1.jpg'" style="height:180px;object-fit:cover;" />
        <div class="watch-card-body">
          <p class="watch-card-brand">${w.brand}</p>
          <h3 class="watch-card-name" style="font-size:0.95rem;">${w.name}</h3>
          <div class="watch-card-footer">
            <span class="watch-card-price">${formatPrice(w.price)}</span>
          </div>
        </div>
      </div>`).join('');
  }
}

/* ---- WATCHES TABLE ---- */
function loadWatchesTable(filterBrand = 'all', query = '') {
  let watches = getWatches();

  // Populate brand filter dropdown
  const select = document.getElementById('adminFilterBrand');
  const brands = [...new Set(watches.map(w => w.brand))].sort();
  select.innerHTML = '<option value="all">All Brands</option>' +
    brands.map(b => `<option value="${b}" ${b === filterBrand && filterBrand !== 'all' ? 'selected' : ''}>${b}</option>`).join('');

  if (filterBrand !== 'all') watches = watches.filter(w => w.brand === filterBrand);
  if (query) watches = watches.filter(w =>
    w.name.toLowerCase().includes(query) ||
    w.brand.toLowerCase().includes(query) ||
    w.model.toLowerCase().includes(query)
  );

  const tbody = document.getElementById('adminTableBody');
  if (watches.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--text-light);padding:40px;">No watches found.</td></tr>`;
    return;
  }
  tbody.innerHTML = watches.map(w => `
    <tr>
      <td><img class="table-img" src="${w.image}" alt="${w.name}"
        onerror="this.src='assets/watches/watch-1.jpg'" /></td>
      <td class="table-name">${w.name} ${w.protected ? '<span class="badge-protected" title="Protected — cannot be deleted">🔒</span>' : ''}</td>
      <td>${w.brand}</td>
      <td style="font-size:0.8rem;color:var(--text-light);">${w.model}</td>
      <td class="table-price">${formatPrice(w.price)}</td>
      <td>${w.featured ? '<span class="badge-featured">⭐ Featured</span>' : '<span class="badge-normal">—</span>'}</td>
      <td>
        <div class="table-actions">
          <button class="btn-edit" onclick="editWatch('${w.id}')"><i class="fa fa-pen"></i> Edit</button>
          ${w.protected
            ? '<button class="btn-delete btn-delete-locked" disabled title="This listing is reserved for future stock"><i class="fa fa-lock"></i> Locked</button>'
            : `<button class="btn-delete" onclick="deleteWatch('${w.id}')"><i class="fa fa-trash"></i> Delete</button>`
          }
        </div>
      </td>
    </tr>`).join('');
}

function initAdminSearch() {
  document.getElementById('adminSearch').addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    const brand = document.getElementById('adminFilterBrand').value;
    loadWatchesTable(brand, q);
  });
  document.getElementById('adminFilterBrand').addEventListener('change', e => {
    const brand = e.target.value;
    const q = document.getElementById('adminSearch').value.toLowerCase().trim();
    loadWatchesTable(brand, q);
  });
}

/* ---- FORM ---- */

// Holds the current list of images being managed: [{src, type:'url'|'file'}]
let pendingImages = [];
let previewIndex = 0; // which image is being shown in main preview

function initForm() {
  document.getElementById('watchForm').addEventListener('submit', saveWatch);
  document.getElementById('cancelBtn').addEventListener('click', () => {
    editingId = null;
    resetForm();
    showTab('watches');
  });

  // URL add button
  document.getElementById('addUrlBtn').addEventListener('click', () => {
    const url = document.getElementById('wImageUrl').value.trim();
    if (!url) return;
    addImageToGallery(url, 'url');
    document.getElementById('wImageUrl').value = '';
  });
  // Allow Enter key in URL field
  document.getElementById('wImageUrl').addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); document.getElementById('addUrlBtn').click(); }
  });

  // File upload — multiple files supported
  document.getElementById('wImageFile').addEventListener('change', e => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = ev => addImageToGallery(ev.target.result, 'file');
      reader.readAsDataURL(file);
    });
    e.target.value = ''; // reset so same files can be re-added if needed
  });
}

function addImageToGallery(src, type) {
  pendingImages.push({ src, type });
  renderImageGallery();
}

function removeImageFromGallery(idx) {
  pendingImages.splice(idx, 1);
  renderImageGallery();
}

function renderImageGallery() {
  const container = document.getElementById('imageGalleryGrid');
  const placeholder = document.getElementById('galleryPlaceholder');

  if (pendingImages.length === 0) {
    container.innerHTML = '';
    placeholder.style.display = 'flex';
    return;
  }
  placeholder.style.display = 'none';
  container.innerHTML = pendingImages.map((img, i) => `
    <div class="gallery-thumb ${i === 0 ? 'gallery-thumb-main' : ''}">
      <img src="${img.src}" alt="Image ${i+1}"
        onerror="this.src='assets/watches/watch-1.jpg'" />
      ${i === 0 ? '<span class="thumb-badge">Cover</span>' : ''}
      <button type="button" class="thumb-remove" onclick="removeImageFromGallery(${i})">
        <i class="fa fa-times"></i>
      </button>
      ${i > 0 ? `<button type="button" class="thumb-set-cover" onclick="setAsCover(${i})" title="Set as cover">
        <i class="fa fa-star"></i>
      </button>` : ''}
    </div>`).join('');
}

function setAsCover(idx) {
  const [chosen] = pendingImages.splice(idx, 1);
  pendingImages.unshift(chosen);
  renderImageGallery();
  showToast('Cover image updated');
}

function resetForm() {
  editingId = null;
  pendingImages = [];
  document.getElementById('watchId').value = '';
  document.getElementById('watchForm').reset();
  renderImageGallery();
  document.getElementById('formTitle').textContent = 'Add New Watch';
  document.getElementById('submitBtn').textContent = 'Save Watch';
}

function saveWatch(e) {
  e.preventDefault();

  if (pendingImages.length === 0) {
    showToast('Please add at least one image.');
    return;
  }

  const images = pendingImages.map(p => p.src);

  const watch = {
    id: editingId || 'w_' + Date.now(),
    name: document.getElementById('wName').value.trim(),
    brand: document.getElementById('wBrand').value.trim(),
    model: document.getElementById('wModel').value.trim(),
    price: parseFloat(document.getElementById('wPrice').value),
    caseMaterial: document.getElementById('wCase').value.trim(),
    movement: document.getElementById('wMovement').value.trim(),
    waterResistance: document.getElementById('wWater').value.trim(),
    diameter: document.getElementById('wDiameter').value.trim(),
    strap: document.getElementById('wStrap').value.trim(),
    gender: document.getElementById('wGender').value,
    description: document.getElementById('wDesc').value.trim(),
    featured: document.getElementById('wFeatured').checked,
    images: images,
    image: images[0] // keep backward-compat primary image
  };

  let watches = getWatches();
  if (editingId) {
    const idx = watches.findIndex(w => w.id === editingId);
    if (idx !== -1) watches[idx] = watch;
    showToast('Watch updated successfully!');
  } else {
    watches.unshift(watch);
    showToast('Watch added successfully!');
  }
  saveWatches(watches);
  editingId = null;
  resetForm();
  loadDashboard();
  showTab('watches');
}

function editWatch(id) {
  const watch = getWatches().find(w => w.id === id);
  if (!watch) return;
  editingId = id;

  document.getElementById('watchId').value = id;
  document.getElementById('wName').value = watch.name || '';
  document.getElementById('wBrand').value = watch.brand || '';
  document.getElementById('wModel').value = watch.model || '';
  document.getElementById('wPrice').value = watch.price || '';
  document.getElementById('wCase').value = watch.caseMaterial || '';
  document.getElementById('wMovement').value = watch.movement || '';
  document.getElementById('wWater').value = watch.waterResistance || '';
  document.getElementById('wDiameter').value = watch.diameter || '';
  document.getElementById('wStrap').value = watch.strap || '';
  document.getElementById('wGender').value = watch.gender || 'Men';
  document.getElementById('wDesc').value = watch.description || '';
  document.getElementById('wFeatured').checked = watch.featured || false;

  // Populate gallery from existing images array or fall back to single image
  const imgList = watch.images && watch.images.length > 0 ? watch.images : (watch.image ? [watch.image] : []);
  pendingImages = imgList.map(src => ({ src, type: 'url' }));
  renderImageGallery();

  document.getElementById('formTitle').textContent = 'Edit Watch';
  document.getElementById('submitBtn').textContent = 'Update Watch';
  showTab('add');
}

function deleteWatch(id) {
  const w = getWatches().find(x => x.id === id);
  if (!w) return;
  if (w.protected) {
    showToast('This listing is reserved for future stock and cannot be deleted.');
    return;
  }
  if (!confirm(`Delete "${w.brand} ${w.name}"?\nThis cannot be undone.`)) return;
  let watches = getWatches().filter(x => x.id !== id);
  saveWatches(watches);
  loadWatchesTable();
  loadDashboard();
  showToast(`${w.name} deleted.`);
}

/* ---- TOAST ---- */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
