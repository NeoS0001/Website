
$('.team-carusel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 280,
            settings: { slidesToShow: 1}
        },
        {
            breakpoint: 470,
            settings: { slidesToShow: 1}
        },
        {
            breakpoint: 500,
            settings: { slidesToShow: 1}
        },
        {
            breakpoint: 700,
            settings: { slidesToShow: 2}
        },
        {
            breakpoint: 1000,
            settings: { slidesToShow: 3}
        },
        {
            breakpoint: 1200,
            settings: { slidesToShow: 4}
        },
    ]
  });

  

$('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  slidesToScroll: 1
});