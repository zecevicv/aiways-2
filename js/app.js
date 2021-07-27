/* #Video Section 1
================================================== */
const videoSection1 = document.querySelector('.video-section-1');
const btnRight = document.querySelector('.video-section-1 .btn-right');
const header = document.querySelector('.header');

if (videoSection1 && window.innerWidth > 1024) {
  btnRight.addEventListener('mouseenter', (e) => {
    videoSection1.classList.add('inverted');
    header.classList.add('inverted');
  });
  
  btnRight.addEventListener('mouseleave', (e) => {
    videoSection1.classList.remove('inverted');
    header.classList.remove('inverted');
  });
}

/* #Video Section 2
================================================== */
let cardList = document.querySelectorAll('.video-section-2 .cards li');
let videoList = document.querySelectorAll('.video-section-2 .bg li');

if (cardList[0] && videoList[0]) {
  // Play First Video
  videoList[0].querySelector('video').play();
  
  cardList.forEach((card, cardIndex) => {
    if (window.innerWidth > 1024) {
      card.addEventListener('mouseenter', (e) => {
        cardList.forEach((card2) => {
          card2.classList.remove('active');
        });
        videoList.forEach((videoItem, videoIndex) => {
          let video = videoItem.querySelector('video');
          
          if (cardIndex === videoIndex) {
            videoItem.classList.add('active');
            video.play();
          } else {
            videoItem.classList.remove('active');
            video.currentTime = 0;
            video.pause();
          }
        });
    
        card.classList.add('active');
      });
    } else {
      card.addEventListener('click', (e) => {
        cardList.forEach((card2) => {
          card2.classList.remove('active');
        });
        videoList.forEach((videoItem, videoIndex) => {
          let video = videoItem.querySelector('video');
          
          if (cardIndex === videoIndex) {
            videoItem.classList.add('active');
            video.play();
          } else {
            videoItem.classList.remove('active');
            video.currentTime = 0;
            video.pause();
          }
        });
    
        card.classList.add('active');
      });
    }
  });
  
  if (window.innerWidth > 1024) {
    gsap.to(".video-section-2 .car", {
      xPercent: -80,
      ease: "none",
      scrollTrigger: {
        trigger: ".video-section-2 .car",
        scrub: true
      },
    });
  }
}

/* #Video Section 3
================================================== */
let thumbSlides = document.querySelectorAll('.video-section-3 .thumbs-slider .swiper-slide');
let gallerySlides = document.querySelectorAll('.video-section-3 .gallery-slider .swiper-slide');

if (thumbSlides[0] && gallerySlides[0]) {
  let thumbsSlider = new Swiper(".video-section-3 .thumbs-slider .swiper-container", {
    slidesPerView: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".video-section-3 .thumbs-slider .swiper-button-next",
      prevEl: ".video-section-3 .thumbs-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 5,
        centeredSlides: false,
      }
    }
  });
  
  let gallerySlider = new Swiper(".video-section-3 .gallery-slider .swiper-container", {
    slidesPerView: 1,
    effect: 'fade',
    allowTouchMove: false
  });
  
  // Play First Video
  gallerySlides[0].querySelector('video').play();
  
  // Play different video on hover (desktop)
  if (window.innerWidth > 1024) {
    thumbSlides.forEach((slide, index) => {
      slide.addEventListener('mouseenter', (e) => {
        if (gallerySlider.activeIndex !== index) {
          let galleryVideos = document.querySelectorAll('.video-section-3 .gallery-slider video');
          let galleryVideo = gallerySlides[index].querySelector('video');
  
          galleryVideos.forEach((video) => {
            video.pause();
            galleryVideo.currentTime = 0;
          });
  
          galleryVideo.play();
          
          gallerySlider.slideTo(index);
        }
      });
    });
  } 
  
  // Play different video on slide change (mobile)
  if (window.innerWidth < 1024) {
    thumbsSlider.on('slideChange', function () {
      gallerySlider.slideTo(thumbsSlider.activeIndex);
  
      let galleryVideos = document.querySelectorAll('.video-section-3 .gallery-slider video');
      let galleryVideo = gallerySlides[thumbsSlider.activeIndex].querySelector('video');
  
      galleryVideos.forEach((video) => {
        video.pause();
        galleryVideo.currentTime = 0;
      });
  
      galleryVideo.play();
    });
  }
}

/* #ScrollSpy
================================================== */
let section = document.querySelectorAll(".configurator-page .section");

if (section) {
  let sections = {};
  let i = 0;
  
  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });
  
  window.onscroll = function() {
    let scrollPosition;
    if (window.innerWidth > 1023) {
      scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) - 300;
    } else {
      scrollPosition = (document.documentElement.scrollTop || document.body.scrollTop) + 150;
    }
  
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        document.querySelector('.sidebar-links a.active').setAttribute('class', ' ');
        document.querySelector('.sidebar-links a[href*=' + i + ']').setAttribute('class', 'active');
      }
    }
  };
}

/* #Configurator Color
================================================== */
if (document.querySelector('.configurator-color .swiper-container')) {
  new Swiper(".configurator-color .swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".configurator-color .swiper-container .swiper-pagination",
    },
  });
}

/* #Configurator Interior
================================================== */
if (document.querySelector('.configurator-interior .swiper-container')) {
  new Swiper(".configurator-interior .swiper-container", {
    slidesPerView: 1,
    pagination: {
      el: ".configurator-interior .swiper-container .swiper-pagination",
    },
  });
}