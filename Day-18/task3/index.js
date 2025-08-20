'use strict';
console.log('Day 18 Task of 40 days of JavaScript.');

/*
  3. Theme Switcher with Persistence

  - Toggle theme using a button or switch.
  - Persist the theme in localStorage and apply on page load.
  - Change background and text color based on the theme.
 */

// Handle load
let theme = '';
window.addEventListener('load', function () {
  if (localStorage.getItem('apptheme')) {
    theme = localStorage.getItem('apptheme');
    if (theme === 'dark') {
      applyDarkMode();
    } else {
      applyLightMode();
    }
  }
  console.log('Theme: ', theme);
});

const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', function () {
  if (themeSwitch.checked === true) {
    applyDarkMode();

    // Persist the current theme
    localStorage.setItem('apptheme', 'dark');
    console.log('Dark');
  } else {
    applyLightMode();
    // Persist the current theme
    localStorage.setItem('apptheme', 'light');
    console.log('Light');
  }
});

function applyLightMode() {
  document.body.classList.remove('darkTheme');
  document.body.classList.add('lighTheme');
}

function applyDarkMode() {
  document.body.classList.remove('lighTheme');
  document.body.classList.add('darkTheme');
}
