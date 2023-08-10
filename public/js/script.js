window.onscroll = function() {
  let i, bodyTag, wholeDoc, logo, menuLinks, registerIcon, navTag;
  i;
  bodyTag = document.body;
  wholeDoc = document.documentElement;
  logo = document.getElementById("logo");
  menuLinks = document.getElementsByClassName("menu-links");
  registerIcon = document.getElementById("register");
  navTag = document.getElementsByTagName("nav")[0];

  if (bodyTag.scrollTop > 350 || wholeDoc.scrollTop > 350) {

    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].style.fontSize = "18px";
      menuLinks[i].style.padding = "8px 16px";
    }

    logo.style.width = "60px";
    logo.style.height = "60px";
    registerIcon.style.width = "60px";
    registerIcon.style.height = "60px";
    navTag.style.height = "90px";
  } else {

    for (i = 0; i < menuLinks.length; i++) {
      menuLinks[i].style.fontSize = "24px";
      menuLinks[i].style.padding = "12px 25px";
    }

    logo.style.width = "120px";
    logo.style.height = "120px";
    registerIcon.style.width = "120px";
    registerIcon.style.height = "120px";
    navTag.style.height = "180px";
  }
}