const nameText = '> JAYSON J. SORONIO';
const TYPE_DELAY_MS = 80;

function typeText(text, target, onComplete) {
  if (!target) {
    if (onComplete) onComplete();
    return;
  }

  let index = 0;

  function typeNextCharacter() {
    target.textContent = text.substring(0, index);
    index += 1;
    if (index <= text.length) {
      setTimeout(typeNextCharacter, TYPE_DELAY_MS);
    } else if (onComplete) {
      onComplete();
    }
  }

  typeNextCharacter();
}

const nameTarget = document.getElementById('hero-name-text');

typeText(nameText, nameTarget);

const projects = {
  chirpstack: {
    title: 'CHIRPSTACK_V4',
    subtitle: 'Network server automation & monitoring',
    description: 'LoRa and LoRaWAN are key technologies used in ChirpStack for IoT communication. LoRa provides long-range, low-power wireless data transmission between end devices and gateways, while LoRaWAN defines the communication protocol that securely connects devices, gateways, and the ChirpStack network server for data management, monitoring, and device control.',
    tags: ['CHIRPSTACK', 'POSTGRESQL', 'REDIS', 'MOSQUITTO', 'GRAFANA', 'NODE-RED'],
    containers: [
      {
        name: 'chirpstack',
        description: 'Main LoRaWAN Network Server and Application Server responsible for device management, data processing, and network operations.'
      },
      {
        name: 'postgresql',
        description: 'Relational database used to store gateways, devices, applications, tenants, users, and historical data.'
      },
      {
        name: 'redis',
        description: 'In-memory database used for caching, session management, and message queue operations.'
      },
      {
        name: 'mosquitto',
        description: 'MQTT broker that handles communication between gateways, ChirpStack, and external applications.'
      },
      {
        name: 'grafana',
        description: 'Visualization and monitoring platform used to create dashboards and display system metrics and sensor data.'
      },
      {
        name: 'node-red',
        description: 'Flow-based programming tool used for data processing, automation, integration, and dashboard development.'
      }
    ],
    proofImages: [
      {
        src: 'img/chirpstack.png',
        alt: 'ChirpStack v4 dashboard with active devices, gateways, and data-rate usage',
        caption: 'CHIRPSTACK_V4'
      },
      {
        src: 'img/grafana.png',
        alt: 'Grafana dashboard showing temperature, humidity, and battery gauges from PostgreSQL',
        caption: 'GRAFANA'
      },
      {
        src: 'img/node-red.png',
        alt: 'Node-RED flow receiving ChirpStack device uplink events via MQTT',
        caption: 'NODE-RED'
      },
      {
        src: 'img/chirpstack-struc.png',
        alt: 'LoRaWAN architecture diagram from end devices through gateways to network and application servers',
        caption: 'LORAWAN_ARCHITECTURE',
        description: 'LoRaWAN data path used by ChirpStack: end devices (sensors) send wireless payloads to gateways, gateways backhaul over LTE/LTE-M or Ethernet to the network server (ChirpStack), then the application server delivers data to dashboards and apps.'
      }
    ]
  },
  gss: {
    title: 'GEORGE_SCHOOL_SUPPLIES',
    subtitle: 'School supplies e-commerce & admin system',
    description: 'George School Supplies is a web-based school supplies management and online shopping system developed using PHP, MySQL, HTML, CSS, and JavaScript, and deployed locally through XAMPP. The system provides a convenient platform for customers to browse, review, and purchase school and office supplies online while allowing administrators to efficiently manage products, orders, users, suppliers, feedback, and reviews.',
    details: 'Purpose: Digitize the process of purchasing school and office supplies by providing customers with an easy-to-use online shopping platform while helping administrators efficiently manage inventory, customer orders, suppliers, and user accounts. Features include user registration/login, browse by category, product search, cart, wishlist, online orders, feedback & reviews, order history, and profile management—plus an admin panel with secure login, dashboard stats, product/category management, order tracking, user and supplier management, feedback/review monitoring, and sales overview.',
    tags: ['PHP', 'MYSQL', 'XAMPP', 'HTML', 'CSS', 'JAVASCRIPT', 'ECOMMERCE', 'ADMIN_PANEL'],
    proofImages: [
      {
        src: 'img/user_panel.png',
        alt: 'George School Supplies user panel showing product browsing, categories, and latest products',
        caption: 'USER_PANEL',
        description: 'Customer-facing pages for browsing products by category, viewing latest items, and adding to cart or wishlist.'
      },
      {
        src: 'img/admin_panel.png',
        alt: 'George School Supplies admin panel showing dashboard stats, supplier form, product management, and user accounts',
        caption: 'ADMIN_PANEL',
        description: 'Administrator dashboard for managing products, orders, suppliers, users, feedback, and overall system statistics.'
      }
    ]
  },
  enertrack: {
    title: 'ENERTRACK',
    subtitle: 'Smart appliances energy insights',
    description: 'The application provides real-time monitoring of household appliance energy consumption through an intuitive dashboard that displays key electrical parameters, including Voltage (226 V), Current (0.00 A), Frequency (60.0 Hz), Active Power (0.0 W), and estimated monthly electricity costs. A dedicated analytics page tracks the energy usage of connected appliances, including the smart plug\'s self-consumption (2.5 W), while presenting historical consumption trends through interactive monthly bar graphs. Additionally, a leaderboard-style analytics feature ranks household appliances according to their live power consumption, such as ceiling fans and refrigerators, enabling users to quickly identify high-energy-consuming devices and make informed decisions to improve energy efficiency and reduce electricity expenses.',
    tags: ['WEB', 'IOT', 'MONITORING','FIREBASE','FLUTTER','DART'],
    proofImages: [
      {
        src: 'img/enertrack.png',
        alt: 'EnerTrack website showing hero, about, features, and how-it-works sections',
        caption: 'ENERTRACK_WEB'
      },
      {
        src: 'img/enertrack%20app.png',
        alt: 'EnerTrack mobile app with usage analytics, appliance trends, and billing',
        caption: 'ENERTRACK_APP'
      },
      {
        src: 'img/enertrack%20iot.png',
        alt: 'EnerTrack IoT device wiring diagram and physical prototype in enclosure',
        caption: 'ENERTRACK_IOT',
        description: 'The EnerTrack IoT Device is a smart energy monitoring system designed to measure and track household appliance power consumption in real time. It consists of an ESP32 microcontroller, power monitoring sensors, relay modules, and a display unit housed in a compact enclosure. The device collects electrical parameters such as voltage, current, power, and energy usage, then transmits the data to the monitoring platform for visualization, analytics, and remote appliance management. This enables users to monitor energy consumption, identify high-power appliances, and improve overall household energy efficiency.'
      }
    ]
  },
  'flutter-app': {
    title: 'FLUTTER_APP',
    subtitle: 'Cross-platform mobile experience',
    description: 'This Flutter-based portfolio application serves as a personal profile and project showcase platform. It includes a secure login page with Google/Gmail authentication, allowing users to access the application conveniently. The app features an About Me section that introduces the developer, highlights personal information, and showcases technical skills and programming languages learned. A dedicated Projects page displays a collection of completed projects with descriptions and screenshots, enabling users to explore the developer\'s work and experience. Additionally, the application includes a Cipher Tools section that provides implementations of various encryption algorithms, such as Caesar Cipher, Atbash Cipher, and Vigenère Cipher, allowing users to encrypt and decrypt text interactively.',
    tags: ['FLUTTER', 'DART'],
    proofImages: [
      {
        src: 'img/flutter-app-profile.png',
        alt: 'Flutter portfolio app with login, home, about, projects, and cipher screens',
        caption: 'FLUTTER_APP_PROFILE'
      }
    ]
  }
};

const skills = [
  'FIGMA', 'POSTGRESQL', 'NODE-RED', 'GRAFANA', 'HTML', 'CSS', 'FLUTTER',
  'CHIRPSTACK', 'REDIS', 'DOCKER', 'DOCKER-COMPOSE', 'KOMPOSE', 'KUBERNETES',
  'LINUX-UBUNTU', 'PGADMIN4', 'MYSQL', 'PHP', 'PYTHON'
];

const skillGrid = document.getElementById('skill-grid');
if (skillGrid) {
  skills.forEach((skill, index) => {
    const chip = document.createElement('span');
    chip.className = 'skill-chip';
    chip.textContent = `[${skill}]`;
    chip.style.animation = `fadeIn 0.6s ease ${(index * 0.05).toFixed(2)}s backwards`;
    skillGrid.appendChild(chip);
  });
}

const floatingPixelsContainer = document.getElementById('floating-pixels');
if (floatingPixelsContainer) {
  for (let i = 0; i < 22; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    pixel.style.left = `${left}%`;
    pixel.style.top = `${top}%`;
    pixel.style.animationDelay = `${Math.random() * 2}s`;
    pixel.style.width = `${Math.random() * 0.25 + 0.28}rem`;
    pixel.style.height = pixel.style.width;
    floatingPixelsContainer.appendChild(pixel);
  }
}

const matrixOverlay = document.getElementById('matrix-overlay');
if (matrixOverlay) {
  const columns = 12;
  for (let i = 0; i < columns; i += 1) {
    const col = document.createElement('div');
    col.className = 'matrix-column';
    col.textContent = Array.from({ length: 18 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join(' ');
    col.style.left = `${i * (100 / columns)}%`;
    col.style.animationDuration = `${5 + Math.random() * 2.5}s`;
    col.style.animationDelay = `${Math.random() * 1.5}s`;
    matrixOverlay.appendChild(col);
  }
}

const modalOverlay = document.getElementById('modal-overlay');
const modalPanel = document.querySelector('.modal-panel');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalContent = document.getElementById('modal-content');
const modalFooter = document.getElementById('modal-footer');
const modalClose = document.getElementById('modal-close');

const MODAL_DURATION_MS = 500;
let modalCloseTimer = null;

function finishModalClose() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('is-closing');
  if (modalCloseTimer) {
    clearTimeout(modalCloseTimer);
    modalCloseTimer = null;
  }
}

function buildContainerTableHtml(containers) {
  if (!containers || !containers.length) return '';

  const rows = containers.map(({ name, description }) => `
    <div class="modal-container-row">
      <span class="modal-container-name">${name}</span>
      <p class="modal-container-desc">${description}</p>
    </div>
  `).join('');

  return `
    <div class="modal-container-section">
      <p class="modal-container-heading">&gt; DOCKER_CONTAINERS.LOG</p>
      <div class="modal-container-table">
        <div class="modal-container-row modal-container-row--head">
          <span class="modal-container-name">Container</span>
          <span class="modal-container-desc-label">Description</span>
        </div>
        ${rows}
      </div>
    </div>
  `;
}

function buildProofGalleryHtml(images) {
  if (!images || !images.length) return '';

  const items = images.map(({ src, alt, caption, description }) => `
    <figure class="modal-proof-item">
      <div class="modal-proof-frame">
        <img src="${src}" alt="${alt}" loading="lazy" decoding="async" />
      </div>
      <figcaption>&gt; ${caption}</figcaption>
      ${description ? `<p class="modal-proof-desc">${description}</p>` : ''}
    </figure>
  `).join('');

  return `
    <div class="modal-proof-section">
      <p class="modal-proof-heading">&gt; PROJECT_PROOF.LOG</p>
      <div class="modal-proof-gallery">${items}</div>
    </div>
  `;
}

function showModal({ title, subtitle, contentHtml, footerHtml, wide }) {
  if (!modalOverlay) return;

  finishModalClose();

  if (modalPanel) {
    modalPanel.classList.toggle('modal-panel--wide', Boolean(wide));
  }

  modalTitle.textContent = title;
  modalSubtitle.textContent = subtitle;
  modalContent.innerHTML = contentHtml;
  if (modalFooter) {
    modalFooter.innerHTML = footerHtml || '';
    modalFooter.hidden = !footerHtml;
  }

  modalOverlay.classList.remove('is-closing');
  modalOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modalOverlay.classList.add('is-open');
    });
  });
}

function closeModal() {
  if (!modalOverlay || !modalOverlay.classList.contains('is-open')) return;

  modalOverlay.classList.remove('is-open');
  modalOverlay.classList.add('is-closing');
  modalOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = 'auto';

  const onTransitionEnd = (event) => {
    if (event.target !== modalOverlay) return;
    finishModalClose();
    modalOverlay.removeEventListener('transitionend', onTransitionEnd);
  };

  modalOverlay.addEventListener('transitionend', onTransitionEnd);

  if (modalCloseTimer) clearTimeout(modalCloseTimer);
  modalCloseTimer = setTimeout(finishModalClose, MODAL_DURATION_MS + 80);
}

const CONTACT_EMAIL = 'soroniojayson2@gmail.com';

function openContactModal() {
  showModal({
    title: 'CONTACT ME',
    subtitle: '',
    contentHtml: `
      <div class="contact-details">
        <p class="contact-detail">
          <span class="contact-label">&gt; GMAIL</span>
          <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
        </p>
      </div>
    `,
    footerHtml: ''
  });
}

function openProjectModal(projectId) {
  const project = projects[projectId];
  if (!project) return;
  const tagsHtml = project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('');
  const proofHtml = buildProofGalleryHtml(project.proofImages);
  const hasProof = Boolean(project.proofImages && project.proofImages.length);
  const containerHtml = buildContainerTableHtml(project.containers);

  const introParts = [];
  if (project.description) {
    introParts.push(`<p>${project.description}</p>`);
  }
  if (project.containers) {
    introParts.push(containerHtml);
  } else if (project.details) {
    introParts.push(`<p>${project.details}</p>`);
  }
  const introHtml = introParts.join('');

  showModal({
    title: project.title,
    subtitle: project.subtitle,
    wide: hasProof || Boolean(project.containers),
    contentHtml: `
      ${introHtml}
      ${proofHtml}
      <div class="modal-tag-row">${tagsHtml}</div>
    `,
    footerHtml: ''
  });
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('is-open')) {
    closeModal();
  }
});

const contactTriggers = document.querySelectorAll('.open-contact');
contactTriggers.forEach((trigger) => {
  trigger.addEventListener('click', openContactModal);
});

const projectCards = document.querySelectorAll('.project-card[data-project-id]');
projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project-id');
    openProjectModal(projectId);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section-panel, .project-card, .skill-chip, .contact-panel').forEach((el) => {
  observer.observe(el);
});
