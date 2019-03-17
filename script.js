"use strict";

function init() {
  window.logo = document.getElementById('logo');
  window.logoStyle = getComputedStyle(logo);
  window.logoRect = logo.getBoundingClientRect();
  window.logoWindow = document.getElementById('logo-window');
  window.logoCenter = document.getElementById('logo-center');
  window.logoWindowOffset = 50;
}

function showXray() {
  logoWindow.style.display = 'block';
}

function hideXray() {
  logoWindow.style.opacity = 'none';
}

function moveXray(e) {
  var offsetY = e.clientY - logoRect.top - logoWindowOffset;
  logoWindow.style.top = (e.clientY - logoWindowOffset) + 'px';
  if (offsetY > 0) {
    logoWindow.style.backgroundPositionY = '-' + offsetY + 'px';
  } else {
    logoWindow.style.backgroundPositionY = (-1 * offsetY) + 'px';
  }

  var offsetX = e.clientX - logoRect.left - logoWindowOffset;
  logoWindow.style.left = (e.clientX - logoWindowOffset) + 'px';
  if (offsetX > 0) {
    logoWindow.style.backgroundPositionX = '-' + offsetX + 'px';
  } else {
    logoWindow.style.backgroundPositionX = (-1 * offsetX) + 'px';
  }
};

window.addEventListener('load', init);
window.addEventListener('resize', init);
window.addEventListener('mousemove', showXray);
window.addEventListener('mousemove', moveXray);
window.addEventListener('touchstart', showXray);
window.addEventListener('touchmove', function(e) {
  moveXray(e.changedTouches[0]);
});
