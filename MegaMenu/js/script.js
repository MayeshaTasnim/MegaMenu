$(document).ready(function () {
  $(".li1").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li1 .shop").stop().slideDown(1000);
      $(".li1 .box").stop().addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li1 .box").stop().fadeIn(2000);
      $(".li1 i").stop().addClass("rotate");
    } else {
      $(".li1 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li1 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li2").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li2 .shop").stop().slideDown(1000);
      $(".li2 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li2 i").stop().addClass("rotate");
      $(".li2 .box").slideUp(3000).stop();
    } else {
      $(".li2 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li2 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li3").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li3 .shop").stop().slideDown(1000);
      $(".li3 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li3 i").stop().addClass("rotate");
      $(".li3 .box").slideUp(3000).stop();
    } else {
      $(".li3 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li3 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li4").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li4 .shop").stop().slideDown(1000);
      $(".li4 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li4 i").stop().addClass("rotate");
      $(".li4 .box").slideUp(3000).stop();
    } else {
      $(".li4 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li4 i").removeClass("rotate");
    }
  });
});

$(document).ready(function () {
  $(".li5").hover(function () {
    let isHovered = $(this).is(":hover");
    if (isHovered) {
      $(".li5 .shop").stop().slideDown(1000);
      $(".li5 .box").addClass("animated");
      $(".shadow").addClass("overlay").stop().fadeIn(2000);
      $(".li5 i").stop().addClass("rotate");
      $(".li5 .box").slideUp(3000).stop();
    } else {
      $(".li5 .shop").stop().hide();
      $(".shadow").removeClass("overlay");
      $(".li5 i").removeClass("rotate");
    }
  });
});
