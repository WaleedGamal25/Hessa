
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







$(function() {
  'use strict';

  var body = $('body');

  function goToNextInput(e) {
    var key = e.which,
      t = $(e.target),
      sib = t.next('.verfication input');

    if (key != 9 && (key < 48 || key > 57)) {
      e.preventDefault();
      return false;
    }

    if (key === 9) {
      return true;
    }

    if (!sib || !sib.length) {
      sib = body.find('.verfication input').eq(0);
    }
    sib.select().focus();
  }

  function onKeyDown(e) {
    var key = e.which;

    if (key === 9 || (key >= 48 && key <= 57)) {
      return true;
    }

    e.preventDefault();
    return false;
  }
  
  function onFocus(e) {
    $(e.target).select();
  }

  body.on('keyup', '.verfication input', goToNextInput);
  body.on('keydown', '.verfication input', onKeyDown);
  body.on('click', '.verfication input', onFocus);

})