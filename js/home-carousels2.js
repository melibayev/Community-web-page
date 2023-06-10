$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    850: {
      items: 2,
      loop: false,
    },
    1000: {
      items: 1,
      loop: false,
    },
  },
});
