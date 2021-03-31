document.addEventListener('DOMContentLoaded', function () {
  showTheme();
});

function showTheme() {
  let theme = window.localStorage.getItem('theme');
  if (theme == null) {
    theme = 'theme--dark';
  }
  renderThemedUI(theme);
}

function toggleTheme() {
  let body = document.getElementById("body");

  var currentTheme = body.className;
  let nextTheme;
  if (currentTheme == 'theme--dark') {
    nextTheme = 'theme--light';
  } else {
    nextTheme = 'theme--dark';
  }

  window.localStorage.setItem('theme', nextTheme);
  renderThemedUI(nextTheme);
}

function renderThemedUI(theme) {
  let body = document.getElementById("body");
  let header = document.getElementById("header");
  let themeChanger = document.getElementById("theme_changer");

  body.className = theme;
  let headerImage = '/img/coding_background.jpg';
  let themeChangerIcon = '☀️';
  if (theme == 'theme--light') {
    themeChangerIcon = '🌛';
    headerImage = '/img/coding_background_inverted.jpg';
  }
  header.style.backgroundImage = "url('" + headerImage + "')";
  themeChanger.innerHTML = themeChangerIcon;
}
