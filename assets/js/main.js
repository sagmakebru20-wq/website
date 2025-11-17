// Basit mobil menü aç/kapa
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-menu');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('open');
  });
}

// Telefon linkleri tıklama izleme (ileride analytics ile entegre edilebilir)
Array.from(document.querySelectorAll('a[href^="tel:"]')).forEach((telLink) => {
  telLink.addEventListener('click', () => {
    console.log('Tel arama başlatılıyor:', telLink.getAttribute('href'));
  });
});