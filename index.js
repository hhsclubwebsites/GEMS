function myFunction(){
    var x = document.getElementById("top-nav");
    if(x.className === "nav-bar"){
        x.className += " responsive";
    }
    else{
        x.className = "nav-bar";
    }
}

var x = document.getElementById("top-nav");
console.log(x);
console.log(x.className);
document.addEventListener('click', event => {
    if(event.target.closest('#top-nav') === null){
        x.className = "nav-bar";
    };
})

document.addEventListener('click', ({ target }) => 
{
    if (! target.matches('#top-nav, #top-nav *')) {
    document.getElementById('#top-nav').classList.remove('responsive');
    console.log("WORKING")
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}