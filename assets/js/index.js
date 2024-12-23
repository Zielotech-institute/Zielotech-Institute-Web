// !(function (a) {
//   "use strict";
//   gsap.config({ nullTargetWarn: !1 }),
//     (a.fn.mobilemenu = function (e) {
//       var t = a.extend(
//         {
//           menuToggleBtn: ".menu-toggle",
//           bodyToggleClass: "body-visible",
//           subMenuClass: "submenu-class",
//           subMenuParent: "submenu-item-has-children",
//           subMenuParentToggle: "active-class",
//           meanExpandClass: "mean-expand-class",
//           appendElement: '<span class="mean-expand-class"></span>',
//           subMenuToggleClass: "menu-open",
//           toggleSpeed: 400,
//         },
//         e
//       );
//       return this.each(function () {
//         var n = a(this);
//         function s() {
//           n.toggleClass(t.bodyToggleClass);
//           var e = "." + t.subMenuClass;
//           a(e).each(function () {
//             a(this).hasClass(t.subMenuToggleClass) &&
//               (a(this).removeClass(t.subMenuToggleClass),
//               a(this).css("display", "none"),
//               a(this).parent().removeClass(t.subMenuParentToggle));
//           });
//         }
//         n.find("li").each(function () {
//           var e = a(this).find("ul");
//           e.addClass(t.subMenuClass),
//             e.css("display", "none"),
//             e.parent().addClass(t.subMenuParent),
//             e.prev("a").append(t.appendElement),
//             e.next("a").append(t.appendElement);
//         });
//         var e = "." + t.meanExpandClass;
//         a(e).each(function () {
//           a(this).on("click", function (e) {
//             e.preventDefault(),
//               (e = a(this).parent()),
//               0 < a(e).next("ul").length
//                 ? (a(e).parent().toggleClass(t.subMenuParentToggle),
//                   a(e).next("ul").slideToggle(t.toggleSpeed),
//                   a(e).next("ul").toggleClass(t.subMenuToggleClass))
//                 : 0 < a(e).prev("ul").length &&
//                   (a(e).parent().toggleClass(t.subMenuParentToggle),
//                   a(e).prev("ul").slideToggle(t.toggleSpeed),
//                   a(e).prev("ul").toggleClass(t.subMenuToggleClass));
//           });
//         }),
//           a(t.menuToggleBtn).each(function () {
//             a(this).on("click", function () {
//               s();
//             });
//           }),
//           n.on("click", function (e) {
//             e.stopPropagation(), s();
//           }),
//           n.find("div").on("click", function (e) {
//             e.stopPropagation();
//           });
//       });
//     }),
//     a(".mobile-menu-wrapper").mobilemenu(),
//     (a.fn.sidebarmenu = function (e) {
//       var t = a.extend(
//         {
//           menuToggleBtn: ".sidemenu-toggle",
//           bodyToggleClass: "body-visible",
//           subMenuClass: "submenu-class",
//           subMenuParent: "submenu-item-has-children",
//           subMenuParentToggle: "active-class",
//           meanExpandClass: "mean-expand-class",
//           appendElement: '<span class="mean-expand-class"></span>',
//           subMenuToggleClass: "menu-open",
//           toggleSpeed: 400,
//         },
//         e
//       );
//       return this.each(function () {
//         var n = a(this);
//         function s() {
//           n.toggleClass(t.bodyToggleClass);
//           var e = "." + t.subMenuClass;
//           a(e).each(function () {
//             a(this).hasClass(t.subMenuToggleClass) &&
//               (a(this).removeClass(t.subMenuToggleClass),
//               a(this).css("display", "none"),
//               a(this).parent().removeClass(t.subMenuParentToggle));
//           });
//         }
//         n.find("li").each(function () {
//           var e = a(this).find("ul");
//           e.addClass(t.subMenuClass),
//             e.css("display", "none"),
//             e.parent().addClass(t.subMenuParent),
//             e.prev("a").append(t.appendElement),
//             e.next("a").append(t.appendElement);
//         });
//         var e = "." + t.meanExpandClass;
//         a(e).each(function () {
//           a(this).on("click", function (e) {
//             e.preventDefault(),
//               (e = a(this).parent()),
//               0 < a(e).next("ul").length
//                 ? (a(e).parent().toggleClass(t.subMenuParentToggle),
//                   a(e).next("ul").slideToggle(t.toggleSpeed),
//                   a(e).next("ul").toggleClass(t.subMenuToggleClass))
//                 : 0 < a(e).prev("ul").length &&
//                   (a(e).parent().toggleClass(t.subMenuParentToggle),
//                   a(e).prev("ul").slideToggle(t.toggleSpeed),
//                   a(e).prev("ul").toggleClass(t.subMenuToggleClass));
//           });
//         }),
//           a(t.menuToggleBtn).each(function () {
//             a(this).on("click", function () {
//               s();
//             });
//           }),
//           n.on("click", function (e) {
//             e.stopPropagation(), s();
//           }),
//           n.find("div").on("click", function (e) {
//             e.stopPropagation();
//           });
//       });
//     }),
//     a(".sidebar-menu-wrapper").sidebarmenu(),
//     a(window).scroll(function () {
//       500 < a(this).scrollTop()
//         ? a(".sticky-wrapper").addClass("sticky")
//         : a(".sticky-wrapper").removeClass("sticky");
//     }),
//     a(window).scroll(function () {
//       920 < a(this).scrollTop()
//         ? a(".sticky-wrapper2").addClass("sticky")
//         : a(".sticky-wrapper2").removeClass("sticky");
//     }),
//     a(document).ready(function () {
//       new Swiper(".my-swiper-student-slider", {
//         loop: !0,
//         grabCursor: !0,
//         autoplay: { delay: 2500, disableOnInteraction: !1 },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }),
//     a(document).ready(function () {
//       !(function e() {
//         gsap.to("#banner-img-bg-circle, .middle-img-circle", {
//           rotation: 360,
//           ease: "none",
//           duration: 20,
//           repeat: -1,
//           onComplete: e,
//         });
//       })();
//     }),
//     a(document).ready(function () {
//       new Swiper(".swiper-banner", {
//         effect: "fade",
//         loop: !0,
//         freeMode: !0,
//         watchSlidesProgress: !0,
//         speed: 800,
//         autoplay: { delay: 6e3, disableOnInteraction: !1 },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }),
//     a(document).ready(function () {
//       new Swiper(".mySwiper-Student-feedback", {
//         slidesPerView: 2,
//         spaceBetween: 30,
//         loop: !0,
//         autoplay: { delay: 8e3, disableOnInteraction: !1 },
//         speed: 1500,
//         pagination: { clickable: !0 },
//         breakpoints: {
//           0: { slidesPerView: 1 },
//           520: { slidesPerView: 1 },
//           950: { slidesPerView: 1 },
//           1200: { slidesPerView: 2 },
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }),
//     a(document).ready(function () {
//       new Swiper(".mySwiper-courses", {
//         slidesPerView: 2,
//         spaceBetween: 30,
//         loop: !0,
//         autoplay: { delay: 5e3, disableOnInteraction: !1 },
//         speed: 1500,
//         pagination: { clickable: !0 },
//         breakpoints: {
//           0: { slidesPerView: 1 },
//           520: { slidesPerView: 1 },
//           950: { slidesPerView: 1 },
//           1200: { slidesPerView: 2 },
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }),
//     a(".item").click(function () {
//       a(this).toggleClass("active");
//     }),
//     a(".getting-started").countdown("2024/07/01", function (e) {
//       a(this).html(
//         e.strftime(
//           '<div class="single-countdown"><h2 class="count-title">%D</h2><span class="count-para">Days</span></div><div class="single-countdown"><h2 class="count-title">%H</h2><span class="count-para">hour</span></div><div class="single-countdown"><h2 class="count-title">%M</h2><span class="count-para">min</span></div><div class="single-countdown"><h2 class="count-title">%S</h2><span class="count-para">second</span></div>'
//         )
//       );
//     }),
//     a(document).ready(function () {
//       a(".counter").counterUp({ delay: 10, time: 1500, offset: 100 });
//     }),
//     a(document).ready(function () {
//       new Swiper(".mySwiper-logo", {
//         slidesPerView: 4,
//         spaceBetween: 30,
//         loop: !0,
//         autoplay: { delay: 2500, disableOnInteraction: !1 },
//         speed: 2e3,
//         breakpoints: {
//           0: { slidesPerView: 2 },
//           520: { slidesPerView: 3 },
//           950: { slidesPerView: 3 },
//           1200: { slidesPerView: 4 },
//         },
//       });
//     });
//   const e = document.querySelector(".to-top");
//   window.addEventListener("scroll", () => {
//     100 < window.pageYOffset
//       ? e.classList.add("active")
//       : e.classList.remove("active");
//   }),
//     a(document).ready(function () {
//       a(".youtube").magnificPopup({
//         disableOn: 700,
//         type: "iframe",
//         mainClass: "mfp-fade",
//         removalDelay: 160,
//         preloader: !1,
//         fixedContentPos: !1,
//       });
//     }),
//     a(document).ready(function () {
//       !(function () {
//         let e = a(".search-option-box"),
//           n = a(".search"),
//           s = a(".close-icon");
//         n.on("click", function () {
//           e.addClass("open");
//         }),
//           s.on("click", function () {
//             e.removeClass("open");
//           });
//       })();
//     }),
//     a(document).ready(function () {
//       const s = a(".my-progress-bar .progress-vale");
//       a(window).on("scroll", function n() {
//         s.each(function () {
//           var e;
//           0 <= (e = (e = this).getBoundingClientRect()).top &&
//             0 <= e.left &&
//             e.bottom <=
//               (window.innerHeight || document.documentElement.clientHeight) &&
//             e.right <=
//               (window.innerWidth || document.documentElement.clientWidth) &&
//             (s.each(function () {
//               anime({
//                 targets: this,
//                 width: [
//                   `${parseInt(this.dataset.progressMinWidth)}%`,
//                   `${parseInt(this.dataset.progressMaxWidth)}%`,
//                 ],
//                 easing: "linear",
//                 duration: parseInt(this.dataset.progressDuration) || 1e3,
//                 delay: parseInt(this.dataset.progressDelay) || 500,
//               });
//             }),
//             a(window).off("scroll", n));
//         });
//       });
//     }),
//     a(document).ready(function () {
//       new Swiper(".events-slider", {
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }),
//     a(document).ready(function () {
//       var e = new Swiper(".mySwiper-client", {
//         spaceBetween: 10,
//         slidesPerView: 3,
//         freeMode: !0,
//         watchSlidesProgress: !0,
//       });
//       new Swiper(".mySwiper2-client", {
//         spaceBetween: 10,
//         grabCursor: !0,
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         thumbs: { swiper: e },
//       });
//     }),
//     a(document).ready(function () {
//       AOS.init();
//     });
// })(jQuery);




// This is Updated code here updated on 2023-02-20 (Updated Nav Bar which properly not working on the mobile device Closing and opening)

  

(function ($) {
  "use strict";

  // GSAP Configuration
  gsap.config({ nullTargetWarn: false });

  // Mobile Menu Plugin
  $.fn.mobilemenu = function (options) {
    const settings = $.extend(
      {
        menuToggleBtn: ".menu-toggle",
        bodyToggleClass: "body-visible",
        subMenuClass: "submenu-class",
        subMenuParent: "submenu-item-has-children",
        subMenuParentToggle: "active-class",
        meanExpandClass: "mean-expand-class",
        appendElement: '<span class="mean-expand-class"></span>',
        subMenuToggleClass: "menu-open",
        toggleSpeed: 400,
      },
      options
    );

    return this.each(function () {
      const $menuWrapper = $(this);

      function toggleMenu() {
        $menuWrapper.toggleClass(settings.bodyToggleClass);

        // Close all submenus
        const $subMenus = $("." + settings.subMenuClass);
        $subMenus.each(function () {
          if ($(this).hasClass(settings.subMenuToggleClass)) {
            $(this).removeClass(settings.subMenuToggleClass).slideUp(settings.toggleSpeed);
            $(this).parent().removeClass(settings.subMenuParentToggle);
          }
        });
      }

      // Add classes and expand icons
      $menuWrapper.find("li").each(function () {
        const $subMenu = $(this).find("ul");
        $subMenu.addClass(settings.subMenuClass).hide();
        $(this).addClass(settings.subMenuParent);
        $subMenu.before(settings.appendElement);
      });

      // Submenu toggle functionality
      $("." + settings.meanExpandClass).on("click", function (e) {
        e.preventDefault();
        const $this = $(this).parent();
        const $subMenu = $this.next("ul").length ? $this.next("ul") : $this.prev("ul");

        if ($subMenu.length) {
          $this.parent().toggleClass(settings.subMenuParentToggle);
          $subMenu.slideToggle(settings.toggleSpeed).toggleClass(settings.subMenuToggleClass);
        }
      });

      // Menu toggle button functionality
      $(settings.menuToggleBtn).on("click", toggleMenu);

      // Prevent menu close on inner click
      $menuWrapper.on("click", (e) => e.stopPropagation());
    });
  };

  // Sidebar Menu Plugin
  $.fn.sidebarmenu = $.fn.mobilemenu;

  // Initialize Plugins
  function initializeMenus() {
    $(".mobile-menu-wrapper").mobilemenu();
    $(".sidebar-menu-wrapper").sidebarmenu();
  }

  function initializeSliders() {
    // Existing Swipers for Student Slider and Banner Slider
    new Swiper(".my-swiper-student-slider", {
      loop: true,
      grabCursor: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    new Swiper(".swiper-banner", {
      effect: "fade",
      loop: true,
      speed: 800,
      autoplay: { delay: 6000, disableOnInteraction: false },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Client slider with thumbnails
    const thumbsSwiper = new Swiper(".mySwiper-client", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
    new Swiper(".mySwiper2-client", {
      spaceBetween: 10,
      grabCursor: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: { swiper: thumbsSwiper },
    });

    // New Swiper for Feedback Slider with autoplay and manual navigation
    new Swiper(".mySwiper-Student-feedback", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: { delay: 8000, disableOnInteraction: false },  // Autoplay every 8 seconds
      speed: 1500,
      pagination: { clickable: true },
      breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 1 },
        950: { slidesPerView: 1 },
        1200: { slidesPerView: 2 },
      },
      navigation: {
        nextEl: ".swiper-button-next",  // next button for manual navigation
        prevEl: ".swiper-button-prev",  // previous button for manual navigation
      },
    });
  }

  function initializeAnimations() {
    gsap.to("#banner-img-bg-circle, .middle-img-circle", {
      rotation: 360,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }

  function initializeAOS() {
    AOS.init();
  }

  function initializePage() {
    initializeMenus();
    initializeSliders();
    initializeAnimations();
    initializeAOS();
  }

  // Scroll-based actions
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $(".sticky-wrapper").toggleClass("sticky", scrollTop > 500);
    $(".sticky-wrapper2").toggleClass("sticky", scrollTop > 920);

    const $toTopButton = $(".to-top");
    $toTopButton.toggleClass("active", scrollTop > 100);
  });

  // Document Ready
  $(document).ready(function () {
    initializePage();

    // Search Box
    const $searchBox = $(".search-option-box");
    $(".search").on("click", () => $searchBox.addClass("open"));
    $(".close-icon").on("click", () => $searchBox.removeClass("open"));

    // Counter
    $(".counter").counterUp({ delay: 10, time: 1500 });

    // Magnific Popup
    $(".youtube").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    // Countdown
    $(".getting-started").countdown("2024/07/01", function (event) {
      $(this).html(
        event.strftime(
          '<div class="single-countdown"><h2 class="count-title">%D</h2><span class="count-para">Days</span></div><div class="single-countdown"><h2 class="count-title">%H</h2><span class="count-para">Hours</span></div><div class="single-countdown"><h2 class="count-title">%M</h2><span class="count-para">Minutes</span></div><div class="single-countdown"><h2 class="count-title">%S</h2><span class="count-para">Seconds</span></div>'
        )
      );
    });
  });

  // AJAX/Dynamic Updates
  $(document).on("ajaxComplete", initializePage);
})(jQuery);
