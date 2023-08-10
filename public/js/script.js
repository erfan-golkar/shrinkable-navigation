window.onscroll = function() {
  let i;
  let bodyTag = document.body;
  let wholeDoc = document.documentElement;
  let logo = document.getElementById("logo");
  let menuLink1 = document.getElementsByClassName("menu-links")[0];
  let menuLink2 = document.getElementsByClassName("menu-links")[1];
  let menuLink3 = document.getElementsByClassName("menu-links")[2];
  let registerIcon = document.getElementById("register");
  let navTag = document.getElementsByTagName("nav")[0];

  if (bodyTag.scrollTop > 350 || wholeDoc.scrollTop > 350) {
    menuLink1.style.fontSize = "18px";
    menuLink2.style.fontSize = "18px";
    menuLink3.style.fontSize = "18px";
    menuLink1.style.padding = "8px 16px";
    menuLink2.style.padding = "8px 16px";
    menuLink3.style.padding = "8px 16px";
    logo.style.width = "60px";
    logo.style.height = "60px";
    registerIcon.style.width = "60px";
    registerIcon.style.height = "60px";
    navTag.style.height = "90px";
  } else {
    menuLink1.style.fontSize = "24px";
    menuLink2.style.fontSize = "24px";
    menuLink3.style.fontSize = "24px";
    menuLink1.style.padding = "12px 25px";
    menuLink2.style.padding = "12px 25px";
    menuLink3.style.padding = "12px 25px";
    logo.style.width = "120px";
    logo.style.height = "120px";
    registerIcon.style.width = "120px";
    registerIcon.style.height = "120px";
    navTag.style.height = "180px";
  }
}