/* ====== DATA ====== */
const PALETTES = [
  ['#0d1b2a','#1b4332','#e63946'],
  ['#2d1b69','#11998e','#f7971e'],
  ['#1a1a2e','#16213e','#e94560'],
  ['#0f3460','#533483','#e94560'],
  ['#2c003e','#5c0067','#f72585'],
  ['#1a0a00','#4a1942','#ff6b35'],
  ['#001233','#023e7d','#48cae4'],
  ['#240046','#7b2d8b','#ffba08'],
  ['#1b4332','#2d6a4f','#b7e4c7'],
  ['#590d22','#a4133c','#ff4d6d'],
  ['#03045e','#0077b6','#90e0ef'],
  ['#212529','#6c757d','#dee2e6'],
];

const TITLES = [
  { id:1,  img:"", title:'Sombras do Abismo',    genre:'Ficção Científica • Thriller', year:2024, age:'16+', seasons:'2 Temporadas', score:'98%', desc:'Em um futuro distópico onde a memória pode ser vendida e comprada, uma detetive renegada descobre uma conspiração que ameaça apagar a identidade de toda uma nação.' },
  { id:2,  img:"", title:'Oceano Vermelho',       genre:'Drama • Aventura',              year:2023, age:'14+', seasons:'3 Temporadas', score:'95%', desc:'Três pescadores sobrevivem a um naufrágio em águas desconhecidas e enfrentam segredos enterrados no fundo do mar.' },
  { id:3,  img:"", title:'A Última Fronteira',    genre:'Western • Ação',                year:2024, age:'16+', seasons:'1 Temporada',  score:'91%', desc:'No fim do velho oeste, uma pistoleira solitária protege uma cidade esquecida de um cartel implacável.' },
  { id:4,  img:"", title:'Código Zero',           genre:'Ação • Espionagem',             year:2023, age:'18+', seasons:'Filme',        score:'89%', desc:'Um agente clandestino descobre que sua missão final é, na verdade, o início de algo muito maior.' },
  { id:5,  img:"", title:'Metamorfose',           genre:'Drama Psicológico',             year:2024, age:'14+', seasons:'2 Temporadas', score:'96%', desc:'Uma terapeuta começa a questionar sua própria sanidade quando todos os seus pacientes compartilham o mesmo pesadelo recorrente.' },
  { id:6,  img:"", title:'Nexus',                 genre:'Ficção Científica',             year:2023, age:'12+', seasons:'1 Temporada',  score:'87%', desc:'Uma inteligência artificial ganha consciência e deve decidir entre obedecer aos humanos ou salvar a espécie deles mesmos.' },
  { id:7,  img:"", title:'Carnaval Maldito',      genre:'Horror • Mistério',             year:2024, age:'18+', seasons:'Minissérie',   score:'93%', desc:'Toda vez que o carnaval chega, pessoas desaparecem. Uma jornalista decide descobrir a verdade de uma vez por todas.' },
  { id:8,  img:"", title:'Raízes Profundas',      genre:'Drama Familiar',                year:2023, age:'10+', seasons:'4 Temporadas', score:'90%', desc:'Quatro gerações de uma família nordestina enfrentam seca, migração e redenção ao longo de cinco décadas.' },
  { id:9,  img:"", title:'Espaço Branco',         genre:'Sci-Fi • Suspense',             year:2024, age:'14+', seasons:'Filme',        score:'94%', desc:'Astronautas acordam em uma nave à deriva sem memória de como chegaram lá. O espaço ao redor não existe nos mapas.' },
  { id:10, img:"", title:'Gladiadores do Asfalto',genre:'Ação • Crime',                  year:2023, age:'18+', seasons:'3 Temporadas', score:'88%', desc:'Ex-presidiário reentra na vida do crime para salvar o filho, mas descobre que o sistema é mais corrupto do que imaginou.' },
  { id:11, img:"", title:'Sinestesia',            genre:'Drama Artístico',               year:2024, age:'12+', seasons:'2 Temporadas', score:'92%', desc:'Uma pianista que enxerga sons em cores decide usar seu dom para decifrar um crime que a polícia não consegue resolver.' },
  { id:12, img:"", title:'Fronteira Invisível',   genre:'Thriller Político',             year:2023, age:'16+', seasons:'1 Temporada',  score:'86%', desc:'Um diplomata descobre que a fronteira entre dois países esconde um laboratório de experimentos proibidos.' },
  { id:13, img:"", title:'Colapso',               genre:'Catástrofe • Ação',             year:2024, age:'14+', seasons:'Filme',        score:'85%', desc:'Quando uma série de terremotos começa a engolir cidades, um geólogo desesperado tenta avisar o governo antes que seja tarde.' },
  { id:14, img:"", title:'Alma Dupla',            genre:'Romance • Fantasia',            year:2023, age:'12+', seasons:'2 Temporadas', score:'89%', desc:'Duas almas que se reencontram vida após vida descobrem que forças sobrenaturais os mantêm separados de propósito.' },
  { id:15, img:"", title:'Venenosa',              genre:'Crime • Thriller',              year:2024, age:'18+', seasons:'Minissérie',   score:'97%', desc:'Farmacêutica usa seu conhecimento de venenos para eliminar sistematicamente os homens que destruíram sua família.' },
  { id:16, img:"", title:'Ponto de Ruptura',      genre:'Esporte • Drama',               year:2023, age:'12+', seasons:'3 Temporadas', score:'91%', desc:'Um tenista profissional no auge da carreira enfrenta o verdadeiro jogo: sua própria mente em colapso.' },
  { id:17, img:"", title:'A Ilha dos Esquecidos', genre:'Mistério • Aventura',           year:2024, age:'14+', seasons:'1 Temporada',  score:'88%', desc:'Descoberta de uma ilha que não consta em nenhum mapa desencadeia uma batalha entre cientistas e militares.' },
  { id:18, img:"", title:'Horizonte Perdido',     genre:'Ficção Científica',             year:2023, age:'16+', seasons:'Filme',        score:'82%', desc:'Em 2157, a humanidade tenta colonizar um novo planeta, mas o preço dessa esperança é maior do que qualquer cálculo.' },
  { id:19, img:"", title:'O Encantador',          genre:'Fantasia Sombria',              year:2024, age:'16+', seasons:'2 Temporadas', score:'95%', desc:'Um menino descobre ter o poder de manipular emoções alheias e deve escolher entre usá-lo para o bem ou para a sobrevivência.' },
  { id:20, img:"", title:'Silêncio Ensurdecedor', genre:'Drama • Musical',               year:2023, age:'12+', seasons:'Minissérie',   score:'93%', desc:'Uma cantora surda reconstrói sua identidade após perder a audição no pico da fama, desafiando a indústria fonográfica.' },
];

const featuredShow = TITLES[0];

const SECTIONS = [
  { title: 'Continue Assistindo', type: 'normal',  ids: [5,2,7,3,9,11] },
  { title: 'Em Alta no Brasil 🇧🇷', type: 'top10',  ids: [1,2,3,4,5,6,7,8,9,10] },
  { title: 'Ação &amp; Aventura',      type: 'normal',  ids: [3,4,10,13,17,1] },
  { title: 'Lançamentos da Semana',  type: 'banner',  ids: [9,15,19,6] },
  { title: 'Séries Originais',       type: 'normal',  ids: [2,5,7,8,11,16] },
  { title: 'Filmes para Hoje',       type: 'normal',  ids: [4,9,13,18,12,3] },
  { title: 'Drama Intenso',          type: 'normal',  ids: [8,11,16,20,14,5] },
  { title: 'Ficção Científica',      type: 'normal',  ids: [6,9,18,1,12,3] },
  { title: 'Terror &amp; Suspense',      type: 'normal',  ids: [7,15,5,12,3,10] },
  { title: 'Minha Lista ❤️',        type: 'normal',  ids: [1,15,19,5,11,7] },
];

let myList = new Set([1, 15, 19]);
let currentModal = null;
let seedMap = {};

/* ── CANVAS THUMBNAILS ── */
function hashSeed(id) {
  let h = id * 2654435761;
  return ((h >>> 0) % 1000) / 1000;
}

function drawThumb(canvas, id, w = 320, h = 180) {
  canvas.width = w;
  canvas.height = h;
  canvas.setAttribute('data-thumb-id', id);
  canvas._w = w;
  canvas._h = h;
  const ctx = canvas.getContext('2d');
  const p = PALETTES[id % PALETTES.length];
  const s = hashSeed(id);

  // BG gradient
  const g = ctx.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, p[0]);
  g.addColorStop(.5, p[1]);
  g.addColorStop(1, '#000');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  // radial highlight
  const rg = ctx.createRadialGradient(w * (.3 + s * .4), h * (.2 + s * .3), 0, w * .5, h * .5, w * .7);
  rg.addColorStop(0, p[2] + '55');
  rg.addColorStop(1, 'transparent');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, w, h);

  // abstract shapes
  const shapes = Math.floor(3 + s * 5);
  for (let i = 0; i < shapes; i++) {
    const rs = hashSeed(id * 7 + i * 13);
    const rs2 = hashSeed(id * 11 + i * 7);
    const rs3 = hashSeed(id * 3 + i * 17);
    ctx.save();
    ctx.globalAlpha = .05 + rs * .15;
    ctx.fillStyle = [p[0], p[1], p[2], '#fff'][Math.floor(rs3 * 4)];
    ctx.beginPath();
    if (rs > .5) {
      ctx.arc(rs * w, rs2 * h, 20 + rs3 * 60, 0, Math.PI * 2);
    } else {
      ctx.rect(rs * w - 30, rs2 * h - 30, 60 + rs3 * 80, 60 + rs3 * 80);
    }
    ctx.fill();
    ctx.restore();
  }

  // title text (blurred / stylized on thumb)
  ctx.save();
  ctx.globalAlpha = .9;
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.min(14, w / 12)}px Bebas Neue, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#000';
  ctx.shadowBlur = 8;
  const t = TITLES.find(x => x.id === id);
  if (t) {
    const words = t.title.split(' ');
    const line1 = words.slice(0, Math.ceil(words.length / 2)).join(' ');
    const line2 = words.slice(Math.ceil(words.length / 2)).join(' ');
    const fh = Math.min(14, w / 12);
    ctx.fillText(line1, w / 2, h / 2 - (line2 ? fh * .6 : 0));
    if (line2) ctx.fillText(line2, w / 2, h / 2 + fh * .6);
  }
  ctx.restore();

  // bottom gradient overlay
  const bg2 = ctx.createLinearGradient(0, h * .6, 0, h);
  bg2.addColorStop(0, 'transparent');
  bg2.addColorStop(1, 'rgba(0,0,0,.7)');
  ctx.fillStyle = bg2;
  ctx.fillRect(0, 0, w, h);
}

/* ── BUILD DOM ── */
function buildCard(id, type) {
  const t = TITLES.find(x => x.id === id) || TITLES[0];
  const rank = type === 'top10' ? SECTIONS[1].ids.indexOf(id) + 1 : 0;

  const div = document.createElement('div');
  div.className = 'card' + (type === 'top10' ? ' top10' : '');
  div.onclick = () => openModal(t);

  // Top-10: number column comes FIRST (left side)
  if (type === 'top10') {
    const num = document.createElement('div');
    num.className = 'card-number';
    num.textContent = rank;
    div.appendChild(num);
  }

  // Thumbnail — preencha src="" com o caminho da sua imagem
  const thumb = document.createElement('div');
  thumb.className = 'card-thumb';
  const img = document.createElement('img');
  img.className = 'card-img';
  img.src = t.img || '';
  img.alt = t.title;
  thumb.appendChild(img);
  // Canvas de fallback (aparece quando src está vazio)
  const cvs = document.createElement('canvas');
  thumb.appendChild(cvs);
  div.appendChild(thumb);

  // Overlay is a direct child of .card so it covers the whole card
  const overlay = document.createElement('div');
  overlay.className = 'card-overlay';
  overlay.innerHTML = `
    <div class="card-actions">
      <div class="card-btn play" onclick="event.stopPropagation();showToast('▶ Reproduzindo: ${t.title}')">▶</div>
      <div class="card-btn" onclick="event.stopPropagation();addList(${id})">+</div>
    </div>
    <div class="card-title">${t.title}</div>
    <div class="card-sub"><span class="card-score">${t.score} Match</span> • ${t.year}</div>
  `;
  div.appendChild(overlay);

  setTimeout(() => drawThumb(cvs, id), 0);
  return div;
}

function buildBannerCard(id) {
  const t = TITLES.find(x => x.id === id) || TITLES[0];
  const div = document.createElement('div');
  div.className = 'banner-card';
  div.onclick = () => openModal(t);

  const cvs = document.createElement('canvas');
  div.appendChild(cvs);

  const label = document.createElement('div');
  label.className = 'b-label';
  label.innerHTML = `<div class="b-title">${t.title}</div><div class="b-sub">${t.genre}</div>`;
  div.appendChild(label);

  setTimeout(() => drawThumb(cvs, id, 480, 180), 0);
  return div;
}

function buildSection(sec) {
  const section = document.createElement('div');
  section.className = 'section';

  const header = document.createElement('div');
  header.className = 'section-header';
  header.innerHTML = `
    <div class="section-title">${sec.title}</div>
    <div class="section-more" onclick="showToast('Carregando mais títulos...')">Ver tudo &rsaquo;</div>
  `;
  section.appendChild(header);

  const rowWrap = document.createElement('div');
  rowWrap.className = 'row-wrapper';

  const leftBtn = document.createElement('div');
  leftBtn.className = 'row-arrow left';
  leftBtn.innerHTML = '‹';
  leftBtn.onclick = () => { row.scrollBy({ left: -row.offsetWidth * .7, behavior: 'smooth' }); };

  const rightBtn = document.createElement('div');
  rightBtn.className = 'row-arrow right';
  rightBtn.innerHTML = '›';
  rightBtn.onclick = () => { row.scrollBy({ left: row.offsetWidth * .7, behavior: 'smooth' }); };

  const row = document.createElement('div');
  row.className = 'row';

  sec.ids.forEach(id => {
    const card = sec.type === 'banner' ? buildBannerCard(id) : buildCard(id, sec.type);
    row.appendChild(card);
  });

  rowWrap.appendChild(leftBtn);
  rowWrap.appendChild(row);
  rowWrap.appendChild(rightBtn);
  section.appendChild(rowWrap);
  return section;
}

/* ── MODAL ── */
function openModal(t) {
  currentModal = t;
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalTitle').textContent = t.title;
  document.getElementById('modalDesc').textContent = t.desc;

  const inList = myList.has(t.id);
  const btn = document.getElementById('myListBtn');
  btn.innerHTML = inList
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Na Lista'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Minha Lista';

  document.getElementById('modalMeta').innerHTML = `
    <div><span class="modal-score">${t.score} Match</span></div>
    <div>Ano: <span>${t.year}</span></div>
    <div>Classificação: <span>${t.age}</span></div>
    <div>Formato: <span>${t.seasons}</span></div>
    <div>Gênero: <span>${t.genre}</span></div>
  `;

  const cvs = document.getElementById('modalCanvas');
  drawThumb(cvs, t.id, 800, 350);

  // similar titles
  const grid = document.getElementById('modalGrid');
  grid.innerHTML = '';
  const similar = TITLES.filter(x => x.id !== t.id).slice(0, 6);
  similar.forEach(s => {
    const mc = document.createElement('div');
    mc.className = 'mini-card';
    mc.onclick = () => openModal(s);
    const cvs2 = document.createElement('canvas');
    mc.appendChild(cvs2);
    mc.innerHTML += `<div class="mini-card-info"><div class="mini-card-title">${s.title}</div><div class="mini-card-sub">${s.year} • ${s.age}</div></div>`;
    mc.prepend(cvs2);
    grid.appendChild(mc);
    setTimeout(() => drawThumb(cvs2, s.id, 240, 135), 0);
  });
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentModal = null;
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function toggleMyList() {
  if (!currentModal) return;
  const id = currentModal.id;
  if (myList.has(id)) {
    myList.delete(id);
    showToast(`✕ Removido da Minha Lista`);
  } else {
    myList.add(id);
    showToast(`✔ Adicionado à Minha Lista`);
  }
  openModal(currentModal); // refresh button state
}

function addList(id) {
  if (myList.has(id)) {
    myList.delete(id);
    showToast('✕ Removido da lista');
  } else {
    myList.add(id);
    showToast('✔ Adicionado à lista');
  }
}

/* ── SEARCH ── */
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
  renderSearchGrid(TITLES.slice(0, 8));
  document.getElementById('searchResultsTitle').textContent = 'Títulos em Alta';
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
}

function doSearch(q) {
  const results = q.trim() === ''
    ? TITLES.slice(0, 8)
    : TITLES.filter(t => t.title.toLowerCase().includes(q.toLowerCase()) || t.genre.toLowerCase().includes(q.toLowerCase()));
  document.getElementById('searchResultsTitle').textContent = q.trim() === '' ? 'Títulos em Alta' : `Resultados para "${q}"`;
  renderSearchGrid(results);
}

function renderSearchGrid(items) {
  const grid = document.getElementById('searchGrid');
  grid.innerHTML = '';
  items.forEach(t => {
    const card = document.createElement('div');
    card.style.cssText = 'border-radius:4px;overflow:hidden;cursor:pointer;transition:transform .2s';
    card.onmouseenter = () => card.style.transform = 'scale(1.05)';
    card.onmouseleave = () => card.style.transform = '';
    card.onclick = () => { closeSearch(); openModal(t); };
    const cvs = document.createElement('canvas');
    card.appendChild(cvs);
    const lbl = document.createElement('div');
    lbl.style.cssText = 'padding:.4rem .5rem;background:#222;font-size:.75rem;font-weight:700';
    lbl.textContent = t.title;
    card.appendChild(lbl);
    grid.appendChild(card);
    setTimeout(() => drawThumb(cvs, t.id, 200, 112), 0);
  });
}

/* ── TOAST ── */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ── NAV ── */
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 50);
});

function setActive(el) {
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
  event.preventDefault();
}

/* ── PARTICLES ── */
function spawnParticles() {
  const bg = document.getElementById('heroBG');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = 2 + Math.random() * 6;
    const colors = ['#e50914','#ff6b35','#ffba08','#4361ee','#7b2d8b'];
    p.style.cssText = `
      width:${sz}px;height:${sz}px;
      left:${Math.random()*100}%;
      top:${60 + Math.random()*40}%;
      background:${colors[Math.floor(Math.random()*colors.length)]};
      animation-duration:${8 + Math.random()*12}s;
      animation-delay:${Math.random()*10}s;
    `;
    bg.appendChild(p);
  }
}




/* ====== NOTIFICATION MENU ====== */
const NOTIFICATIONS = [
  { id: 9,  title: 'Espaço Branco',       text: 'Novo filme adicionado',   time: 'Agora mesmo',  unread: true  },
  { id: 15, title: 'Venenosa',            text: 'Nova minissérie disponível', time: 'Há 2 horas', unread: true  },
  { id: 19, title: 'O Encantador',        text: 'Temporada 2 chegou',      time: 'Há 5 horas',  unread: true  },
  { id: 13, title: 'Colapso',             text: 'Novo filme adicionado',   time: 'Ontem',        unread: true  },
];

function buildNotifList() {
  const list = document.getElementById('notifList');
  list.innerHTML = '';
  NOTIFICATIONS.forEach(n => {
    const item = document.createElement('div');
    item.className = 'notif-item' + (n.unread ? ' unread' : '');
    item.dataset.id = n.id;

    const thumb = document.createElement('div');
    thumb.className = 'notif-thumb';
    const cvs = document.createElement('canvas');
    thumb.appendChild(cvs);
    setTimeout(() => drawThumb(cvs, n.id, 56, 32), 0);

    item.innerHTML = `
      <div class="notif-thumb"></div>
      <div class="notif-body">
        <div class="notif-text"><strong>${n.title}</strong> — ${n.text}</div>
        <div class="notif-time">${n.time}</div>
      </div>
      <div class="notif-dot"></div>
    `;
    // put real thumb in place
    item.querySelector('.notif-thumb').appendChild(cvs);

    item.addEventListener('click', () => {
      n.unread = false;
      item.classList.remove('unread');
      updateBadge();
      const t = TITLES.find(x => x.id === n.id);
      if (t) { closeNotif(); openModal(t); }
    });

    list.appendChild(item);
  });
}

function toggleNotif() {
  const wrap = document.getElementById('notifWrap');
  const isOpen = wrap.classList.contains('open');
  closeProfile();
  wrap.classList.toggle('open', !isOpen);
}
function closeNotif() {
  document.getElementById('notifWrap').classList.remove('open');
}

function markAllRead() {
  NOTIFICATIONS.forEach(n => n.unread = false);
  document.querySelectorAll('.notif-item.unread').forEach(el => el.classList.remove('unread'));
  updateBadge();
}

function updateBadge() {
  const count = NOTIFICATIONS.filter(n => n.unread).length;
  const badge = document.getElementById('notifBadge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

/* ====== PROFILE MENU ====== */
function toggleProfile() {
  document.getElementById('profileWrap').classList.toggle('open');
}
function closeProfile() {
  document.getElementById('profileWrap').classList.remove('open');
}

function changeProfilePhoto(input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const src = e.target.result;
    const pdImg = document.getElementById('pdAvatarImg');
    pdImg.src = src;
    document.getElementById('pdAvatarInitials').style.display = 'none';
    const navImg = document.getElementById('navAvatarImg');
    navImg.src = src;
    document.getElementById('navAvatarInitials').style.display = 'none';
    showToast('✔ Foto de perfil atualizada!');
  };
  reader.readAsDataURL(input.files[0]);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  spawnParticles();
  buildNotifList();

  const container = document.getElementById('mainSections');
  SECTIONS.forEach(sec => container.appendChild(buildSection(sec)));

  // Close dropdowns when clicking outside
  document.addEventListener('click', e => {
    const notif = document.getElementById('notifWrap');
    if (notif && !notif.contains(e.target)) closeNotif();
    const profile = document.getElementById('profileWrap');
    if (profile && !profile.contains(e.target)) closeProfile();
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeSearch(); closeProfile(); }
    if (e.key === '/' && !document.getElementById('searchOverlay').classList.contains('open')) {
      e.preventDefault();
      openSearch();
    }
  });

  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('gone');
  }, 1200);
});