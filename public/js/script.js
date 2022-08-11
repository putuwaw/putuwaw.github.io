const clickedmenu = document.getElementById("clickedmenu");
if (clickedmenu != null) {
  clickedmenu.onclick = navbar_menu();
}
function navbar_menu() {
  const mymenu = document.getElementById("openmenu");
  const mycloseMenu = document.getElementById("closemenu");
  const mymenuLinks = document.getElementById("mobilemenu");
  if (mymenu != null && mycloseMenu != null && mymenuLinks != null) {
    mycloseMenu.classList.toggle('hidden');
    mymenu.classList.toggle('hidden');
    mymenuLinks.classList.toggle('hidden');
  }
}
function send_mail(){
  const getSubject = document.getElementById("name").value;
  const getBody = document.getElementById("message").value;
  window.open('mailto:putuwaw973@gmail.com?subject=' + getSubject + '&body=' + getBody);
}

let navbar = document.getElementById("main-nav");
let viewportHeight = window.innerHeight;
let navHeight = document.getElementById("main-nav").offsetHeight;

let navbarLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", e => {
  scrollpos = window.scrollY;
  navbarLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollpos + 100 &&
        section.offsetTop + section.offsetHeight > scrollpos + 100) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});