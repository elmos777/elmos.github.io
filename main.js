const toggle = document.querySelector('.menu-toggle');
const drawer = document.querySelector('.nav-drawer');

if (toggle && drawer){
  // Avaa ja sulje valikko napista
  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Sulje valikko kun klikataan linkkiä
  drawer.addEventListener('click', e => {
    if(e.target.tagName === 'A' && drawer.classList.contains('open')){
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });

  // Sulje valikko jos klikataan drawerin ulkopuolelle
  document.addEventListener('click', e => {
    if(drawer.classList.contains('open') && !drawer.contains(e.target) && e.target !== toggle){
      drawer.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
}
