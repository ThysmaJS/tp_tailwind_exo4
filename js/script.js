
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function openTitlesModal(album, titles) {
    const modal = document.getElementById('titlesModal');
    const titlesContent = document.getElementById('titlesContent');
    const titlesList = document.getElementById('titlesList');

    document.getElementById('titlesModalTitle').textContent = `Titres de l'album : ${album}`;

    titlesList.innerHTML = '';
    titles.forEach(title => {
        const li = document.createElement('li');
        li.textContent = title;
        titlesList.appendChild(li);
    });

    modal.classList.remove('hidden');
    modal.classList.remove('modal-hide');
    modal.classList.add('modal-show');
}

function closeTitlesModal() {
    const modal = document.getElementById('titlesModal');
    modal.classList.remove('modal-show');
    modal.classList.add('modal-hide');

    // Cache la modale après la fin de l'animation
    modal.addEventListener('animationend', () => {
        if (modal.classList.contains('modal-hide')) {
            modal.classList.add('hidden');
        }
    }, { once: true });
}

// Gestion du menu burger
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');

// Toggle du menu avec animation
menuToggle.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    setTimeout(() => {
      menu.style.display = 'none';
    }, 300); // Durée de la transition
  } else {
    menu.style.display = 'flex';
    setTimeout(() => {
      menu.classList.add('open');
    }, 0);
  }
});

// Gestion du scroll pour ajouter un effet au header
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
