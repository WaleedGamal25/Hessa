
var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});







$( document ).ready(function() {

const mediaQuery = window.matchMedia('(min-width: 992px)');

function handleMediaQueryChange(event) {
    if (event.matches) {
        gsap.registerPlugin(ScrollTrigger);
const panels = gsap.utils.toArray(".panel-pin .panel");
gsap.fromTo(
  ".panel-pin .panel:not(:first-child)",
  {
    y: () => window.innerWidth,
    translateY: -100,
  },
  {
    y: 0,
    stagger: 0.5,
    translateY: 0,
    scrollTrigger: {
      pin: ".panel-pin",
      markers: false,
      scrub: true,
      start: "top top",
     end: "+=" + 100 * (panels.length - 1) + "%",
      invalidateOnRefresh: true,
    }
  }   
);
    }
}

mediaQuery.addEventListener('change', handleMediaQueryChange);

if (mediaQuery.matches) {
    handleMediaQueryChange(mediaQuery);
}
});