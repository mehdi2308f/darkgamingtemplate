// * For Navbars
function showsecondnav() {
  document.querySelector(".semicontainer").style.display = "flex";
  document.querySelector(".fa-bars").style.display = "none";
  document.querySelector(".fa-times").style.display = "flex";
}
function hidesecondnav() {
  document.querySelector(".semicontainer").style.display = "none";
  document.querySelector(".fa-bars").style.display = "flex";
  document.querySelector(".fa-times").style.display = "none";
}

// *for carosels
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

//   *for counterdown

var countdowndate = new Date("march 18, 2024 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countdowndate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

// *for counterup
$(".counter").counterUp({
  delay: 10,
  time: 3000,
});
