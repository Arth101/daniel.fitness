var expanded = false;
var burger = document.querySelector(".burger");
burger.addEventListener('click', function(){ expand()}, false);
function expand() {
  if(!expanded) {
    document.querySelector(".sub-menu").style.display = "block";
    document.querySelector(".social").style.display = "block";
    document.querySelector(".fa-bars").classList.add("fa-close");
    document.querySelector(".fa-bars").classList.remove("fa-bars");
    expanded = true;
  } else {
    document.querySelector(".sub-menu").style.display = "none";
    document.querySelector(".social").style.display = "none";
    document.querySelector(".fa-close").classList.add("fa-bars");
    document.querySelector(".fa-close").classList.remove("fa-close");
    expanded = false;
  }
}
var scrollToContact = function() {
  console.log("HEY");
  document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
}

var classname = document.querySelector('.contact-link');
Array.from(classname).forEach(function(element) {
  console.log("plz");
  element.addEventListener('click', scrollToContact);
});
