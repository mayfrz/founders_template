window.onscroll = function() {
    const header = document.getElementsByClassName('container--heading')[0];
    // const container = header.children['container']
    // containerHeader.style.paddingTop = 0;
    header.classList.toggle("container--shrink", window.pageYOffset > 0);
}