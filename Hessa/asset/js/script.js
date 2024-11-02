
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



document.addEventListener("mousemove", (e) => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 2;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 2;

  // Adjust each image position based on mouse movement, keeping them in flow
  document.querySelector(".img1").style.transform = `translate(${moveX * 30}px, ${moveY * 30}px)`;
  document.querySelector(".img2").style.transform = `translate(${moveX * 20}px, ${moveY * 20}px)`;
  document.querySelector(".img3 img").style.transform = `translate(${moveX * 10}px, ${moveY * 10}px)`;
});



$(document).ready(function () {

  var lastImageScrollExec = '';

  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();


    // Third Scroll Section Handler (scrolling-div-exec)
    var section7 = $('#execScroll #section7');
    var section8 = $('#execScroll #section8');
    var section9 = $('#execScroll #section9');

    if (section7.length && section8.length && section9.length) {
      var section1OffsetExec = section7.offset().top;
      var section2OffsetExec = section8.offset().top;
      var section3OffsetExec = section9.offset().top;

      if (scrollTop >= section1OffsetExec && scrollTop < section2OffsetExec) {
        changeImageOnce('#execScroll #mainImageExec', 'asset/images/rating.png', 'scrollExec');
      } else if (scrollTop >= section2OffsetExec && scrollTop < section3OffsetExec) {
        changeImageOnce('#execScroll #mainImageExec', 'asset/images/iteration.png', 'scrollExec');
      } else if (scrollTop >= section3OffsetExec) {
        changeImageOnce('#execScroll #mainImageExec', 'asset/images/security.png', 'scrollExec');
      }
    }


  });

  // Function to change the image only once during scroll
  function changeImageOnce(imageSelector, newSrc, sectionType) {
    var image = $(imageSelector);
if (sectionType === 'scrollExec' && lastImageScrollExec !== newSrc) {
      image.fadeOut(300, function () {
        image.attr('src', newSrc);
        image.fadeIn(300);
      });
      lastImageScrollExec = newSrc;

    } 
  }
});

