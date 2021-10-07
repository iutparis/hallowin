let menuOpen = false;

function toggleActive(e){
  let children = e.parentNode.children;
  if (!menuOpen) {
    e.className += " active";
    for (let i = 1; i < children.length; i++) {
      children[i].style.transitionDelay = `${(7 - i) / 4}s`;
    }
  }
  else {
    e.className = e.className.replace(" active", "");
    for (let i = 1; i < children.length; i++) {
      children[i].style.transitionDelay = `0s`;
    }
  }
  menuOpen = !menuOpen;
}

function changeColorMode(mode) {
  document.getElementsByTagName('body')[0].className = mode;
}
