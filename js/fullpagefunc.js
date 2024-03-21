var myFullpage = new fullpage("#fullpage", {
  anchors: ["div1", "div2", "div3", "div4", "div5", "div6"],
  navigation: true,
  showActiveTooltip: true,
  menu: "#menu",
  scrollBar: true,
  autoScrolling: true,
  slidesNavigation: true,
  responsiveHeight: 330,
  scrollingSpeed: 700,
  controlArrows: false,
  afterLoad: function (origin, destination, direction) {
    if (destination.index > 0) {
      $("#information").find(".information-wrap").css("color", "#000000");
      $("#information").css("border-top", "2.5px solid #000000");
      $("#information").css("border-bottom", "1px solid #000000");
    } else {
      $("#information").find(".information-wrap").css("color", "#ffffff");
      $("#information").css("border-top", "2.5px solid #ffffff");
      $("#information").css("border-bottom", "1px solid #ffffff");
    }
  },
});

function reveal() {
  var groups = [
    document.querySelectorAll(".reveal"),
    document.querySelectorAll(".reveal2"),
    document.querySelectorAll(".reveal3"),
    document.querySelectorAll(".word"),
  ];

  groups.forEach(function (group) {
    for (var i = 0; i < group.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = group[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        group[i].classList.add("active");
      } else {
        group[i].classList.remove("active");
      }
    }
  });
}

// 스크롤 이벤트에 대한 리스너 등록
window.addEventListener("scroll", reveal);
