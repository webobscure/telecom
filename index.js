let btn = document.getElementsByClassName('btn');

function openPopup() {
  const popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

function switchTheme() {
  let close = document.getElementById('close');

  if (window.matchMedia('(prefers-color-scheme: light)')) {
    document.body.classList.toggle('dark-theme')
  } 

  if (document.body.classList.contains('dark-theme')) {
    close.src = 'assets/dark-close.png';
  } else {
    close.src = 'assets/close.png';
  }
}

console.log(window.matchMedia('(prefers-color-scheme: dark)'));
