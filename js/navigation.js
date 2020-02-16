/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

(function($) {
  const screenWidth = window.screen.width;
  const mobileBreakpoint = 1024;

  /**
   * ATTENTION: These constants are not jQuery elements
   * They are direct DOM elements
   */
  const primaryButtonMobile = document.querySelector(
    '.primary-menu-button--mobile'
  );
  const primaryMenuWrapper = document.querySelector('.primary-menu-wrapper');
  const secondaryMenuWrapper = document.querySelector(
    '.secondary-menu-wrapper'
  );
  const primaryMenu = document.querySelector('.primary-menu-container');
  const hamburger = document.querySelector('.hamburger');
  const secondaryMenu = document.querySelector('.secondary-menu-container');

  /* JS for hamburger */
  if (screenWidth > mobileBreakpoint) {
    secondaryMenuWrapper.addEventListener('mouseenter', function() {
      hamburger.classList.add('is-active');
      secondaryMenu.classList.add('is-opened');
      primaryMenu.classList.remove('is-opened');
    });

    secondaryMenuWrapper.addEventListener('mouseleave', function() {
      secondaryMenu.classList.remove('is-opened');
      hamburger.classList.remove('is-active');
    });

    primaryMenuWrapper.addEventListener('mouseenter', function() {
      primaryMenu.classList.toggle('is-opened');
      secondaryMenu.classList.remove('is-opened');
      hamburger.classList.remove('is-active');
    });

    primaryMenuWrapper.addEventListener('mouseleave', function() {
      primaryMenu.classList.remove('is-opened');
    });
  } else {
    primaryButtonMobile.addEventListener('click', function() {
      primaryMenu.classList.toggle('is-opened');
      secondaryMenu.classList.remove('is-opened');
    });

    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('is-active');
      secondaryMenu.classList.toggle('is-opened');
      primaryMenu.classList.remove('is-opened');
    });
  }

  /**
   * ATTENTION: jQuery is used here.
   * DOM element methods like classList.add are replaced by jQuery methods like addClass.
   */
  const menuItems = $('.menu-item-has-children');
  if (screenWidth > mobileBreakpoint) {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      const subItem = $(menuItem).find('.sub-menu');
      menuItem.addEventListener('mouseenter', function() {
        subItem.addClass('is-opened');
      });
      menuItem.addEventListener('mouseleave', function() {
        subItem.removeClass('is-opened');
      });
    }
  } else {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      const subItem = $(menuItem).find('.sub-menu');
      menuItem.addEventListener('click', function() {
        subItem.toggleClass('is-opened');
      });
    }
  }
})(jQuery);

/* Navigation code that came with _.s */
(function() {
  var container, button, menu, links, i, len;

  container = document.getElementById('site-navigation');
  if (!container) {
    return;
  }

  button = container.getElementsByTagName('button')[0];
  if ('undefined' === typeof button) {
    return;
  }

  menu = container.getElementsByTagName('ul')[0];

  // Hide menu toggle button if menu is empty and return early.
  if ('undefined' === typeof menu) {
    button.style.display = 'none';
    return;
  }

  menu.setAttribute('aria-expanded', 'false');
  if (-1 === menu.className.indexOf('nav-menu')) {
    menu.className += ' nav-menu';
  }

  button.onclick = function() {
    if (-1 !== container.className.indexOf('toggled')) {
      container.className = container.className.replace(' toggled', '');
      button.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-expanded', 'false');
    } else {
      container.className += ' toggled';
      button.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-expanded', 'true');
    }
  };

  // Get all the link elements within the menu.
  links = menu.getElementsByTagName('a');

  // Each time a menu link is focused or blurred, toggle focus.
  for (i = 0, len = links.length; i < len; i++) {
    links[i].addEventListener('focus', toggleFocus, true);
    links[i].addEventListener('blur', toggleFocus, true);
  }

  /**
   * Sets or removes .focus class on an element.
   */
  function toggleFocus() {
    var self = this;

    // Move up through the ancestors of the current link until we hit .nav-menu.
    while (-1 === self.className.indexOf('nav-menu')) {
      // On li elements toggle the class .focus.
      if ('li' === self.tagName.toLowerCase()) {
        if (-1 !== self.className.indexOf('focus')) {
          self.className = self.className.replace(' focus', '');
        } else {
          self.className += ' focus';
        }
      }

      self = self.parentElement;
    }
  }

  /**
   * Toggles `focus` class to allow submenu access on tablets.
   */
  (function(container) {
    var touchStartFn,
      i,
      parentLink = container.querySelectorAll(
        '.menu-item-has-children > a, .page_item_has_children > a'
      );

    if ('ontouchstart' in window) {
      touchStartFn = function(e) {
        var menuItem = this.parentNode,
          i;

        if (!menuItem.classList.contains('focus')) {
          e.preventDefault();
          for (i = 0; i < menuItem.parentNode.children.length; ++i) {
            if (menuItem === menuItem.parentNode.children[i]) {
              continue;
            }
            menuItem.parentNode.children[i].classList.remove('focus');
          }
          menuItem.classList.add('focus');
        } else {
          menuItem.classList.remove('focus');
        }
      };

      for (i = 0; i < parentLink.length; ++i) {
        parentLink[i].addEventListener('touchstart', touchStartFn, false);
      }
    }
  })(container);
})();
