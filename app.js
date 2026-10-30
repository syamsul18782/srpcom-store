/**
 * SRPCOM STORE - Focused Interactive Hub Logic
 * Clean White Background • On-Demand Detail View
 */

// Product Catalog
const PRODUCTS = [
  {
    id: "google-pro",
    title: "Google AI Pro 18 Bulan",
    category: "ai-cloud",
    categoryLabel: "Cloud & AI",
    badge: "🔥 30K / 18 BULAN",
    featured: true,
    priceStrike: "Rp 309.000 /bln",
    priceAmount: "Rp 30.000",
    priceUnit: "/ 18 Bulan Total",
    desc: "Akses cloud storage 5TB dan reasoning model Gemini terbaru selama 18 bulan penuh. Legal & aman metode invite resmi tanpa butuh password.",
    features: [
      "Aktif s/d 7 Februari 2028 (18 Bulan Penuh)",
      "Penyimpanan Cloud 5 TB Google Drive & Foto",
      "Pakai Email Sendiri (Metode Invite Resmi, Tanpa Password)",
      "Akses Eksklusif Google Antigravity & Agentic AI",
      "Model Gemini 3.6 Pro & High Reasoning",
      "Flow 1.000 Points/bulan untuk Video Generator AI",
      "🛡️ Garansi 7 Hari Full Refund Resmi"
    ],
    primaryAction: {
      label: "Klaim Promo 30k (WhatsApp)",
      type: "order-modal"
    },
    secondaryAction: {
      label: "Telegram Channel",
      url: "https://t.me/srpcomchannel/535"
    },
    posterImg: "assets/poster-googlepro.jpg",
    needEmailField: true
  },
  {
    id: "srpcom-pg",
    title: "SRPCOM Payment Gateway",
    category: "payment",
    categoryLabel: "Pay & Fintech",
    badge: "⚡ 0% MDR QRIS",
    featured: true,
    priceStrike: null,
    priceAmount: "Rp 700",
    priceUnit: "/ hari (API Access)",
    desc: "Infrastruktur Dynamic QRIS generasi baru untuk developer, bot telegram, dan bisnis digital. Settlement langsung tanpa potongan.",
    features: [
      "0% MDR — 100% uang langsung masuk rekening Anda",
      "Sub-3 Detik Auto-Settlement tanpa upload bukti transfer",
      "Menerima seluruh Bank (BCA, BRI, Mandiri) & E-Wallet",
      "Terintegrasi ShopeePay & GoPay merchant ecosystem",
      "Real-Time Webhook ultra cepat HMAC-SHA256 signature",
      "Console Developer & API Documentation lengkap",
      "Tersedia Free Trial untuk integrasi awal"
    ],
    primaryAction: {
      label: "Buka Console PG",
      url: "https://pg.srpcom.store"
    },
    secondaryAction: {
      label: "Dokumentasi API",
      url: "https://pg.srpcom.store/docs.html"
    },
    posterImg: "assets/poster-qris.jpg",
    needEmailField: false
  },
  {
    id: "srpcom-vpn",
    title: "SRPCOM VPN Premium Xray",
    category: "network",
    categoryLabel: "VPN & Network",
    badge: "⚡ FAST & STABLE",
    featured: false,
    priceStrike: null,
    priceAmount: "Rp 7.000",
    priceUnit: "/ 30 Hari",
    desc: "Koneksi VPN super cepat dan stabil berbasis core Xray mutakhir. Bypass internet positif, proteksi data, dan ping rendah.",
    features: [
      "Dukungan multi-protokol: Trojan, VMess, dan VLESS",
      "Server lokasi Singapore & Indonesia kecepatan tinggi",
      "Mendukung WebSocket, gRPC, dan TCP TLS",
      "Bypass sensor internet & pembatasan ISP",
      "Support di Android (v2rayNG), iOS, OpenWrt STB, Windows",
      "Order dan aktivasi instan 24/7 via bot Telegram"
    ],
    primaryAction: {
      label: "Order via Bot Telegram",
      url: "https://t.me/srpcomstorebot"
    },
    secondaryAction: {
      label: "Buka Tuban.store",
      url: "https://tuban.store/"
    },
    needEmailField: false
  },
  {
    id: "srpcom-autoscript",
    title: "SRPCOM Autoscript Ubuntu",
    category: "network",
    categoryLabel: "VPN & Script",
    badge: "⚙️ 1-CLICK DEPLOY",
    featured: false,
    priceStrike: null,
    priceAmount: "Rp 15.000",
    priceUnit: "/ 30 Hari",
    desc: "Script installer otomatis untuk VPS Ubuntu OS. Siap pakai & langsung terkonfigurasi seluruh service VPN tanpa ribet.",
    features: [
      "Instalasi 1 baris perintah di OS Ubuntu 20.04/22.04 LTS",
      "Auto setting Trojan, VMess, VLESS, SSH, BadVPN & Dropbear",
      "Dilengkapi auto-renew SSL Let's Encrypt gratis",
      "Menu CLI interaktif untuk kelola user & masa aktif",
      "Cocok untuk jualan VPN pribadi maupun komunitas",
      "Update rutin dan stabilitas script terjamin"
    ],
    primaryAction: {
      label: "Order via Bot",
      url: "https://t.me/srpcomstorebot"
    },
    secondaryAction: {
      label: "Buka Tuban.store",
      url: "https://tuban.store/"
    },
    needEmailField: false
  },
  {
    id: "srpcom-bot",
    title: "Sewa Bot & Panel Tembak XL",
    category: "sysadmin",
    categoryLabel: "Bot & Panel",
    badge: "🤖 24/7 AUTO",
    featured: false,
    priceStrike: null,
    priceAmount: "Hubungi Admin",
    priceUnit: "/ fleksibel",
    desc: "Sewa bot auto-order VPN, panel tembak paket kuota XL, dan auto-order produk digitalmu. Server kami sediakan, Anda hanya siapkan bot token.",
    features: [
      "Sistem berjalan 24 jam nonstop tanpa perlu komputer sendiri",
      "Panel tembak kuota XL otomatis & cepat",
      "Auto-order produk digital dengan integrasi QRIS otomatis",
      "Bebas tentukan margin keuntungan & branding bot sendiri",
      "Contoh bot aktif: @srpcomstorebot",
      "Dukungan teknis setup sampai bot jalan lancar"
    ],
    primaryAction: {
      label: "Sewa Bot Sekarang",
      type: "order-modal"
    },
    secondaryAction: {
      label: "Lihat Demo Bot",
      url: "https://t.me/srpcomstorebot"
    },
    needEmailField: false
  },
  {
    id: "srpcom-ppob",
    title: "SRPCOM PPOB & Pulsa Agen",
    category: "sysadmin",
    categoryLabel: "PPOB & Pulsa",
    badge: "💳 HARGA AGEN",
    featured: false,
    priceStrike: null,
    priceAmount: "Mulai 1.000",
    priceUnit: "/ transaksi",
    desc: "Isi ulang paket data semua operator, token listrik PLN, topup voucher game populer, dan pembayaran tagihan bulanan.",
    features: [
      "Paket Data: Telkomsel, Indosat, XL, AXIS, Tri, Smartfren",
      "Token Listrik PLN 24 Jam proses sub-detik",
      "Voucher Game: Mobile Legends, Free Fire, PUBG, dll.",
      "Bayar tagihan PDAM, BPJS, multifinance",
      "Transaksi mandiri via Telegram Bot & Web",
      "Metode pembayaran QRIS otomatis terverifikasi"
    ],
    primaryAction: {
      label: "Transaksi via Bot",
      url: "https://t.me/srpcomstorebot"
    },
    secondaryAction: {
      label: "Buka Tuban.store",
      url: "https://tuban.store/"
    },
    needEmailField: false
  },
  {
    id: "upload-playstore",
    title: "Upload Aplikasi ke Playstore",
    category: "dev",
    categoryLabel: "Play Store",
    badge: "🚀 100K INSTAN",
    featured: false,
    priceStrike: null,
    priceAmount: "Rp 100.000",
    priceUnit: "/ rilis pertama",
    desc: "Publikasikan aplikasi Android Anda ke Google Play Store resmi dan jangkau jutaan pengguna di seluruh dunia.",
    features: [
      "1x Submit & Upload Rilis Perdana ke Google Play Store",
      "Cukup sediakan Bundle (.AAB / APK)",
      "Asset grafis (Icon 512px, Screenshot, Feature Graphic)",
      "Nama aplikasi, deskripsi singkat & lengkap",
      "Bantuan pembuatan tautan Kebijakan Privasi (Privacy Policy)",
      "Dibimbing langsung oleh developer berpengalaman"
    ],
    primaryAction: {
      label: "Order Jasa Upload",
      type: "order-modal"
    },
    secondaryAction: {
      label: "Chat Admin Telegram",
      url: "https://t.me/srpcomadmin"
    },
    posterImg: "assets/poster-playstore.jpg",
    needEmailField: false
  },
  {
    id: "custom-web-app",
    title: "Jasa Web & Aplikasi Custom",
    category: "dev",
    categoryLabel: "Web Development",
    badge: "💻 START 50K",
    featured: false,
    priceStrike: null,
    priceAmount: "Mulai Rp 50.000",
    priceUnit: "/ project",
    desc: "Layanan pembuatan website modern standar 2026, sistem manajemen, toko online, atau web app custom sesuai kebutuhan bisnis Anda.",
    features: [
      "Landing Page Modern & High-Conversion (Standar 2026)",
      "Integrasi Payment Gateway otomatis (QRIS / Bank Transfer)",
      "Toko Online / Sistem Manajemen Toko & Dashboard Admin",
      "Bisa di-hosting di VPS, Cloudflare Tunnel, atau STB OpenWrt",
      "Desain responsif, super cepat, dan SEO-Friendly",
      "Konsultasi ide & arsitektur sistem gratis"
    ],
    primaryAction: {
      label: "Konsultasi Project",
      type: "order-modal"
    },
    secondaryAction: {
      label: "Chat Admin Telegram",
      url: "https://t.me/srpcomadmin"
    },
    needEmailField: false
  }
];

// Category Headers Info
const CATEGORY_INFO = {
  "all": {
    title: "Semua Layanan SRPCOM",
    subtitle: "Daftar lengkap seluruh solusi digital yang tersedia."
  },
  "ai-cloud": {
    title: "Cloud & AI Workspace",
    subtitle: "Akses Google AI Pro 18 Bulan (5TB Drive, Gemini 3.6 Pro, Antigravity) resmi legal."
  },
  "payment": {
    title: "SRPCOM Payment Gateway",
    subtitle: "Infrastruktur Dynamic QRIS sub-3s tanpa biaya MDR untuk developer & aplikasi web."
  },
  "network": {
    title: "Koneksi VPN & Script Server",
    subtitle: "VPN Xray Premium (Trojan, VMess, VLESS) dan autoscript Ubuntu OS satu baris."
  },
  "sysadmin": {
    title: "Bot & Otomasi Digital",
    subtitle: "Sewa bot auto-order VPN, panel tembak kuota XL, dan agen PPOB 24 jam nonstop."
  },
  "dev": {
    title: "Publishing & Custom Web Dev",
    subtitle: "Jasa upload aplikasi Android ke Play Store resmi dan pembuatan aplikasi web."
  }
};

// State
let selectedCategory = "all";
let currentModalProduct = null;

// DOM Elements
const detailSection = document.getElementById("detail-section");
const detailTitle = document.getElementById("detail-section-title");
const detailSubtitle = document.getElementById("detail-section-subtitle");
const detailProductsContainer = document.getElementById("detail-products-container");
const quickTabBtns = document.querySelectorAll(".quick-tab-btn");

// Modal Elements
const modalOverlay = document.getElementById("order-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalProdName = document.getElementById("modal-prod-name");
const modalProdPrice = document.getElementById("modal-prod-price");
const inputCustomerName = document.getElementById("cust-name");
const inputCustomerNote = document.getElementById("cust-note");
const emailGroup = document.getElementById("email-group");
const inputCustomerEmail = document.getElementById("cust-email");
const waPreviewText = document.getElementById("wa-preview-text");
const btnSendWa = document.getElementById("btn-send-wa");
const btnSendTg = document.getElementById("btn-send-tg");
const btnPosterPreview = document.getElementById("btn-view-poster");

// Select Category Handler
function selectCategory(cat) {
  selectedCategory = cat;

  // Update Section Title & Subtitle
  const info = CATEGORY_INFO[cat] || CATEGORY_INFO["all"];
  detailTitle.textContent = info.title;
  detailSubtitle.textContent = info.subtitle;

  // Update Quick Tab Buttons
  quickTabBtns.forEach(btn => {
    if (btn.getAttribute("data-cat") === cat) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Render Filtered Products
  renderDetailProducts(cat);

  // Reveal Detail Section
  detailSection.classList.add("visible");

  // Smooth Scroll to Detail Section
  detailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Reset view back to Hub (Collapse Detail)
function resetToHub() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    detailSection.classList.remove("visible");
  }, 400);
}

// Render Products for Detail View
function renderDetailProducts(cat) {
  if (!detailProductsContainer) return;

  const filtered = PRODUCTS.filter(prod => {
    return (cat === "all") || (prod.category === cat);
  });

  detailProductsContainer.innerHTML = filtered.map(prod => {
    const isFeatured = prod.featured ? "featured-card" : "";

    const featureItemsHtml = prod.features.map(f => `
      <li class="bullet-entry">
        <svg class="bullet-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>${f}</span>
      </li>
    `).join("");

    let primaryBtnHtml = "";
    if (prod.primaryAction.type === "order-modal") {
      primaryBtnHtml = `
        <button class="btn-cf btn-cf-orange" onclick="openOrderModal('${prod.id}')">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          ${prod.primaryAction.label}
        </button>
      `;
    } else {
      primaryBtnHtml = `
        <a href="${prod.primaryAction.url}" target="_blank" rel="noopener" class="btn-cf btn-cf-orange">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          ${prod.primaryAction.label}
        </a>
      `;
    }

    const secondaryBtnHtml = prod.secondaryAction ? `
      <a href="${prod.secondaryAction.url}" target="_blank" rel="noopener" class="btn-cf btn-cf-outline">
        ${prod.secondaryAction.label}
      </a>
    ` : "";

    const posterBtnHtml = prod.posterImg ? `
      <button class="btn-cf btn-cf-outline" onclick="viewPoster('${prod.posterImg}', '${prod.title}')" title="Lihat Poster">
        Poster
      </button>
    ` : "";

    return `
      <div class="product-detail-card ${isFeatured}">
        <div>
          <div class="card-tag-row">
            <span class="cat-pill">${prod.categoryLabel}</span>
            <span class="promo-pill">${prod.badge}</span>
          </div>

          <div>
            <h3 class="prod-title">${prod.title}</h3>
            <p class="prod-desc">${prod.desc}</p>
          </div>

          <div class="prod-price-box">
            ${prod.priceStrike ? `<span class="strike-p">${prod.priceStrike}</span>` : ""}
            <span class="main-p">${prod.priceAmount}</span>
            <span class="unit-p">${prod.priceUnit}</span>
          </div>

          <ul class="feature-bullets">
            ${featureItemsHtml}
          </ul>
        </div>

        <div class="prod-actions">
          ${primaryBtnHtml}
          <div class="prod-actions-row">
            ${secondaryBtnHtml}
            ${posterBtnHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Order Modal Functions
function openOrderModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  currentModalProduct = product;
  modalProdName.textContent = product.title;
  modalProdPrice.innerHTML = `
    <span style="font-weight: 800; font-size: 1.15rem; color: #f6821f; display: block; text-align: right; line-height: 1.2;">${product.priceAmount}</span>
    <span style="font-size: 0.72rem; color: #6b7280; font-weight: 600; display: block; text-align: right; margin-top: 2px;">${product.priceUnit}</span>
  `;

  if (product.needEmailField) {
    emailGroup.style.display = "block";
  } else {
    emailGroup.style.display = "none";
  }

  if (product.posterImg) {
    btnPosterPreview.style.display = "inline-flex";
    btnPosterPreview.onclick = () => viewPoster(product.posterImg, product.title);
  } else {
    btnPosterPreview.style.display = "none";
  }

  updateWaPreview();
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function updateWaPreview() {
  if (!currentModalProduct) return;

  const name = inputCustomerName.value.trim() || "Pelanggan";
  const email = inputCustomerEmail.value.trim() || "(Belum diisi)";
  const note = inputCustomerNote.value.trim() || "-";

  let msg = `Halo Admin SRPCOM STORE,\nSaya ingin order layanan:\n\n` +
            `• Produk: ${currentModalProduct.title}\n` +
            `• Harga: ${currentModalProduct.priceAmount} ${currentModalProduct.priceUnit}\n` +
            `• Nama: ${name}\n`;

  if (currentModalProduct.needEmailField) {
    msg += `• Email Akun Google: ${email}\n`;
  }

  if (note && note !== "-") {
    msg += `• Catatan/Kebutuhan: ${note}\n`;
  }

  msg += `\nMohon info nomor rekening / QRIS pembayaran. Terima kasih!`;

  waPreviewText.textContent = msg;

  const encodedMsg = encodeURIComponent(msg);
  btnSendWa.href = `https://wa.me/6282175037525?text=${encodedMsg}`;
}

// Modal Listeners
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeOrderModal);
if (modalOverlay) {
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeOrderModal();
  });
}

[inputCustomerName, inputCustomerEmail, inputCustomerNote].forEach(input => {
  if (input) input.addEventListener("input", updateWaPreview);
});

// Image Preview Lightbox
function viewPoster(src, title) {
  const lightbox = document.createElement("div");
  lightbox.className = "modal-backdrop-cf active";
  lightbox.style.zIndex = "2100";
  lightbox.innerHTML = `
    <div style="position: relative; max-width: 90vw; max-height: 90vh; display: flex; flex-direction: column; align-items: center;">
      <button style="position: absolute; top: -16px; right: -16px; background: white; border: none; width: 36px; height: 36px; border-radius: 50%; font-weight: 800; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.25); font-size: 16px;">✕</button>
      <img src="${src}" alt="${title}" style="max-width: 100%; max-height: 85vh; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.3); object-fit: contain; background: white;">
    </div>
  `;
  lightbox.onclick = (e) => {
    if (e.target === lightbox || e.target.tagName === 'BUTTON') {
      lightbox.remove();
    }
  };
  document.body.appendChild(lightbox);
}

// ==========================================================================
// Animated Edge Waveforms Engine (Gaya Gelombang Data Cloudflare - DUAL TIER)
// Upper Stream (Headline) + Lower Stream (Cards) • 60 FPS Smooth Canvas
// ==========================================================================
function initEdgeWaveforms() {
  const canvas = document.getElementById("waveform-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let animationFrameId;
  let mouse = { x: null, y: null, active: false };

  // Responsive retina sizing
  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener("resize", resize);

  // Mouse interactivity
  canvas.parentElement.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.parentElement.addEventListener("mouseleave", () => {
    mouse.active = false;
  });

  // Wave configurations
  let phaseTopA = 0;
  let phaseTopB = 0;
  let phaseBotA = 0;
  let phaseBotB = 0;

  // Data packets for both Top & Bottom streams
  const packets = [];
  const PACKET_COUNT = 16;
  for (let i = 0; i < PACKET_COUNT; i++) {
    packets.push({
      x: Math.random() * (window.innerWidth || 1200),
      speed: 1.4 + Math.random() * 2.2,
      tier: i < 8 ? 'top' : 'bot',
      wave: i % 2 === 0 ? 'A' : 'B',
      size: 2.8 + Math.random() * 1.8,
      opacity: 0.65 + Math.random() * 0.35
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Baseline positions: Top tier (near headline) & Bottom tier (near cards)
    const baseTop = height * 0.22;
    const baseBot = height * 0.70;

    // Helper: calculate wave height with mouse subtle wave ripple
    function getWaveY(x, base, amplitude, freq, phase, harmonic) {
      let y = base + Math.sin(x * freq + phase) * amplitude;
      if (harmonic) {
        y += Math.cos(x * freq * 1.6 + phase * 0.8) * (amplitude * 0.38);
      }
      if (mouse.active && mouse.x !== null) {
        const dist = Math.abs(x - mouse.x);
        if (dist < 220) {
          const factor = Math.cos((dist / 220) * (Math.PI / 2));
          y += Math.sin((mouse.y - y) * 0.05) * 16 * factor;
        }
      }
      return y;
    }

    // ========================================================================
    // 1. TOP TIER WAVE STREAMS (Right behind "Butuh solusi apa hari ini?")
    // ========================================================================
    
    // Top Stream Layer 1: Ambient Orange Gradient Fill
    ctx.beginPath();
    ctx.moveTo(0, 0);
    for (let x = 0; x <= width; x += 6) {
      const y = getWaveY(x, baseTop, 36, 0.0035, phaseTopA, true);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, 0);
    ctx.closePath();

    const gradTopA = ctx.createLinearGradient(0, 0, 0, baseTop + 50);
    gradTopA.addColorStop(0, "rgba(255, 255, 255, 0)");
    gradTopA.addColorStop(0.5, "rgba(251, 191, 36, 0.05)");
    gradTopA.addColorStop(1, "rgba(246, 130, 31, 0.09)");
    ctx.fillStyle = gradTopA;
    ctx.fill();

    ctx.strokeStyle = "rgba(246, 130, 31, 0.45)";
    ctx.lineWidth = 1.8;
    ctx.setLineDash([]);
    ctx.stroke();

    // Top Stream Layer 2: Fast Dotted Data Stream (Pulse Sub-3s)
    ctx.beginPath();
    for (let x = 0; x <= width; x += 4) {
      const y = getWaveY(x, baseTop - 12, 22, 0.0068, phaseTopB, false);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(246, 130, 31, 0.55)";
    ctx.lineWidth = 1.6;
    ctx.setLineDash([5, 6]);
    ctx.stroke();
    ctx.setLineDash([]);

    // ========================================================================
    // 2. BOTTOM TIER WAVE STREAMS (Behind cards)
    // ========================================================================

    // Bottom Stream Layer 1: Broad Amber Gradient
    ctx.beginPath();
    ctx.moveTo(0, height);
    for (let x = 0; x <= width; x += 6) {
      const y = getWaveY(x, baseBot, 44, 0.0028, phaseBotA, true);
      ctx.lineTo(x, y);
    }
    ctx.lineTo(width, height);
    ctx.closePath();

    const gradBotA = ctx.createLinearGradient(0, baseBot - 50, 0, height);
    gradBotA.addColorStop(0, "rgba(246, 130, 31, 0.08)");
    gradBotA.addColorStop(0.6, "rgba(251, 191, 36, 0.04)");
    gradBotA.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradBotA;
    ctx.fill();

    ctx.strokeStyle = "rgba(246, 130, 31, 0.4)";
    ctx.lineWidth = 1.8;
    ctx.setLineDash([]);
    ctx.stroke();

    // Bottom Stream Layer 2: Radiant Orange Solid Line
    ctx.beginPath();
    for (let x = 0; x <= width; x += 5) {
      const y = getWaveY(x, baseBot + 14, 28, 0.0055, phaseBotB, true);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(246, 130, 31, 0.55)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // ========================================================================
    // 3. TRAVELING DATA PACKETS (Along Top & Bottom Streams)
    // ========================================================================
    packets.forEach(p => {
      p.x += p.speed;
      if (p.x > width + 25) {
        p.x = -25;
        p.speed = 1.4 + Math.random() * 2.2;
      }

      let py;
      if (p.tier === 'top') {
        py = p.wave === 'A' 
          ? getWaveY(p.x, baseTop, 36, 0.0035, phaseTopA, true)
          : getWaveY(p.x, baseTop - 12, 22, 0.0068, phaseTopB, false);
      } else {
        py = p.wave === 'A'
          ? getWaveY(p.x, baseBot, 44, 0.0028, phaseBotA, true)
          : getWaveY(p.x, baseBot + 14, 28, 0.0055, phaseBotB, true);
      }

      // Draw Glowing Packet Point
      ctx.beginPath();
      ctx.arc(p.x, py, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(246, 130, 31, ${p.opacity})`;
      ctx.shadowBlur = 9;
      ctx.shadowColor = "#f6821f";
      ctx.fill();
      ctx.shadowBlur = 0;

      // Trailing Sparkle Tail
      ctx.beginPath();
      ctx.arc(p.x - p.speed * 2.5, py, p.size * 0.55, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(251, 191, 36, ${p.opacity * 0.5})`;
      ctx.fill();
    });

    // Update Wave Phases
    phaseTopA += 0.015;
    phaseTopB -= 0.022;
    phaseBotA += 0.012;
    phaseBotB -= 0.018;

    animationFrameId = requestAnimationFrame(draw);
  }

  // Auto-pause if tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(draw);
    }
  });

  draw();
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", () => {
  initEdgeWaveforms();
});
