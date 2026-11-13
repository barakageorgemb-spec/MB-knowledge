(() => {
  const nav = document.getElementById('mainNav');
  const menuToggle = document.getElementById('menuToggle');
  const languageToggle = document.getElementById('languageToggle');
  const dialog = document.getElementById('applicationDialog');
  const serviceInput = document.getElementById('service');
  const status = document.getElementById('formStatus');
  let language = 'sw';

  document.getElementById('year').textContent = new Date().getFullYear();

  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));

  languageToggle.addEventListener('click', () => {
    language = language === 'sw' ? 'en' : 'sw';
    document.documentElement.lang = language;
    document.querySelectorAll('[data-sw][data-en]').forEach(el => {
      el.innerHTML = el.dataset[language];
    });
    languageToggle.textContent = language === 'sw' ? 'EN' : 'SW';
  });

  document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
      serviceInput.value = button.dataset.service;
      status.textContent = '';
      dialog.showModal();
    });
  });
  document.getElementById('closeDialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  document.getElementById('applicationForm').addEventListener('submit', event => {
    event.preventDefault();
    status.textContent = language === 'sw'
      ? 'Huu ni mfano wa fomu tu. Hatua inayofuata ni kuunganisha Supabase ili maombi yahifadhiwe na kuonekana kwenye Admin Dashboard.'
      : 'This is a form prototype only. Next, we will connect Supabase so applications are saved and appear in the Admin Dashboard.';
  });
})();