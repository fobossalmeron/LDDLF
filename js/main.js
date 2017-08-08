(function () {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var fullNav = querySelector('.navigation_ul');
  var menuIcon = querySelector('.menubutton');
  var body = querySelector('body');
  var wrrapper = querySelector('.wrrapper');


  function closeMenu() {
    fullNav.classList.remove('openmenu');
    body.classList.remove('preventscroll');
    wrrapper.classList.remove('openbody');
    menuIcon.classList.remove('openbutton')
    wrrapper.removeEventListener('touchstart', function(e){ e.preventDefault(); });
  };

  function toggleMenu(){
    fullNav.classList.toggle('openmenu');
    menuIcon.classList.toggle('openbutton')
    body.classList.toggle('preventscroll');
    wrrapper.addEventListener('touchstart', function(e){ e.preventDefault(); });
    wrrapper.classList.toggle('openbody');
  };

  menuIcon.addEventListener('click', toggleMenu);

  fullNav.addEventListener('click', function (event) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });
})();
