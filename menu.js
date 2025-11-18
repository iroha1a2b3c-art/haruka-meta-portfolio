// ハンバーガーメニューの開閉制御
(function() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const menuClose = document.querySelector('.mobile-menu__close');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu__link');
  const body = document.body;

  // メニューを開く
  function openMenu() {
    menuOverlay.classList.add('is-open');
    body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'メニューを閉じる');
  }

  // メニューを閉じる
  function closeMenu() {
    menuOverlay.classList.remove('is-open');
    body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'メニューを開く');
  }

  // ハンバーガーボタンクリック
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      if (menuOverlay.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // 閉じるボタンクリック
  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  // メニューリンククリック時に閉じる
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // オーバーレイ背景クリックで閉じる
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function(e) {
      if (e.target === menuOverlay) {
        closeMenu();
      }
    });
  }

  // ESCキーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-open')) {
      closeMenu();
    }
  });
})();