/* #Video Section 1
================================================== */
const videoSection1 = document.querySelector('.video-section-1');
const btnRight = document.querySelector('.video-section-1 .btn-right');
const header = document.querySelector('.header');

if (window.innerWidth > 1024) {
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

/* #Video Section 3
================================================== */
let thumbSlides = document.querySelectorAll('.video-section-3 .thumbs-slider .swiper-slide');
let gallerySlides = document.querySelectorAll('.video-section-3 .gallery-slider .swiper-slide');

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