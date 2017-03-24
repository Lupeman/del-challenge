$(document).ready(function(){
$('.carousel').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    prevArrow:'<i class="fa fa-angle-left" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
  });
});
