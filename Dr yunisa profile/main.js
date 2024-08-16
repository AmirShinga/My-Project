const icons = document.querySelectorAll(".icon");

icons.forEach(function (contain, index, w) {
  contain.addEventListener("click", function () {
    const s1 = document.querySelector(".s1");
    const s2 = document.querySelector(".s2");
    const s3 = document.querySelector(".s3");
    const s4 = document.querySelector(".s4");
    const s5 = document.querySelector(".s5");
    const s6 = document.querySelector(".s6");
    const s7 = document.querySelector(".s7");
    const slide = document.querySelector("#color");
    const slide2 = document.querySelector("#color-2");
    let pos = 0;

    if (index == 0) {
      s1.style.display = "flex";
      s2.style.display = "none";
      s3.style.display = "none";
      s4.style.display = "none";
      s5.style.display = "none";
      s6.style.display = "none";
      s7.style.display = "none";
      if (pos === 1) {
        slide.style.transform = "translateY(23px)";
        slide2.style.transform = "translateX(23px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }
      pos = 0;
    }
    if (index == 1) {
      s1.style.display = "none";
      s2.style.display = "flex";
      s3.style.display = "none";
      s4.style.display = "none";
      s5.style.display = "none";
      s6.style.display = "none";
      s7.style.display = "none";

      if (pos == 0) {
        slide.style.transform = "translateY(77px)";
        slide2.style.transform = "translateX(48px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }

      pos = 1;
    }
    if (index == 2) {
      s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "flex";
      s4.style.display = "none";
      s5.style.display = "none";
      s6.style.display = "none";
      s7.style.display = "none";
      if (pos == 0) {
        slide.style.transform = "translateY(156px)";
        slide2.style.transform = "translateX(95px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }
      pos = 2;
    }
    if (index == 3) {
      s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "none";
      s4.style.display = "flex";
      s5.style.display = "none";
      s6.style.display = "none";
      s7.style.display = "none";
      if (pos == 0) {
        slide.style.transform = "translateY(235px)";
        slide2.style.transform = "translateX(145px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }

      pos = 3;
    }
    if (index == 4) {
      s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "none";
      s4.style.display = "none";
      s5.style.display = "flex";
      s6.style.display = "none";
      s7.style.display = "none";
      if (pos == 0) {
        slide.style.transform = "translateY(314px)";
        slide2.style.transform = "translateX(195px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }
      pos = 4;
    }
    if (index == 5) {
      s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "none";
      s4.style.display = "none";
      s5.style.display = "none";
      s6.style.display = "flex";
      s7.style.display = "none";
      if (pos == 0) {
        slide.style.transform = "translateY(393px)";
        slide2.style.transform = "translateX(243px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }
      pos = 5;
    }
    if (index == 6) {
      s1.style.display = "none";
      s2.style.display = "none";
      s3.style.display = "none";
      s4.style.display = "none";
      s5.style.display = "none";
      s6.style.display = "none";
      s7.style.display = "flex";
      if (pos == 0) {
        slide.style.transform = "translateY(470px)";
        slide2.style.transform = "translateX(290px)";
      } else {
        slide.style.transform = "translateY(0px)";
        slide2.style.transform = "translateX(0px)";
      }
      pos = 6;
    }
  });
});
