$(document).ready(function () {
  $(".mv").append("<div class='intro'></div>"); // main 태그에 intro 클래스를 가진 div 추가
  $(".intro").append("<div class='intro_logo'>");
  $(".intro_logo").animate({ rotate: "10deg" }, 500, function () {
    $(".mv_bar").animate({ width: "10px", borderRadius: "50%" }, 1000);
    $(".intro").animate({ top: "-60%", borderRadius: "60%" }, 1000);
  });
  // 메인 백그라운드
  $(function bgCir() {
    const cir1 = document.createElement("div");
    cir1.classList.add("bg_cir");
    gsap.set(cir1, {
      width: 100,
      height: 100,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "10%",
      left: "10%",
    });
    // const cir2 = document.createElement("div");
    // cir2.classList.add("bg_cir");
    // gsap.set(cir2, {
    //   width: 200,
    //   height: 200,
    //   background: "#151616",
    //   borderRadius: "50%",
    //   position: "absolute",
    //   top: "20%",
    //   left: "10%",
    // });
    const cir3 = document.createElement("div");
    cir3.classList.add("bg_cir");
    gsap.set(cir3, {
      width: 50,
      height: 50,
      background: "#151616",
      borderRadius: "50%",
      position: "absolute",
      top: "30%",
      left: "40%",
    });
    const cir4 = document.createElement("div");
    cir4.classList.add("bg_cir");
    gsap.set(cir4, {
      width: 200,
      height: 200,
      background: "#151616",
      borderRadius: "50%",
      position: "absolute",
      top: "60%",
      left: "8%",
    });
    const cir5 = document.createElement("div");
    cir5.classList.add("bg_cir");
    gsap.set(cir5, {
      width: 150,
      height: 150,
      border: "solid 1px #151616",
      borderRadius: "50%",
      position: "absolute",
      top: "80%",
      left: "60%",
    });
    const cir6 = document.createElement("div");
    cir6.classList.add("bg_cir");
    gsap.set(cir6, {
      width: 300,
      height: 300,
      background: "#151616",
      borderRadius: "50%",
      position: "absolute",
      top: "80%",
      left: "80%",
    });
    const cir7 = document.createElement("div");
    cir7.classList.add("bg_cir");
    gsap.set(cir7, {
      width: 120,
      height: 120,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "90%",
      left: "5%",
    });
    const cir8 = document.createElement("div");
    cir8.classList.add("bg_cir");
    gsap.set(cir8, {
      width: 200,
      height: 200,
      background: "#151616",
      borderRadius: "50%",
      position: "absolute",
      top: "20%",
      left: "80%",
    });
    // const cir9 = document.createElement("div");
    // cir9.classList.add("bg_cir");
    // gsap.set(cir9, {
    //   width: 16,
    //   height: 16,
    //   background: "#e73930",
    //   borderRadius: "50%",
    //   position: "absolute",
    //   top: "80%",
    //   left: "30%",
    // });
    const cir10 = document.createElement("div");
    cir10.classList.add("bg_cir");
    gsap.set(cir10, {
      width: 18,
      height: 18,
      border: "solid 1px #4d98f0",
      borderRadius: "50%",
      position: "absolute",
      top: "60%",
      left: "95%",
    });

    const sec01 = $(".about");

    sec01.append(cir1);
    // sec01.append(cir2);
    sec01.append(cir3);
    sec01.append(cir4);
    sec01.append(cir5);
    sec01.append(cir6);
    sec01.append(cir7);
    sec01.append(cir8);
    // sec01.append(cir9);
    sec01.append(cir10);
  });

  $(function initEvent() {
    const cir = document.querySelectorAll(".bg_cir");

    let wW = window.innerWidth;
    // if(wW>769){//pc에서만 움직임 적용
    // 	//랜덤한 뱡향 움직임 효과
    // }

    setInterval(positionRandom, 800);
    for (const item of cir) {
      item.addEventListener("click", cirRemoveEffect);
    }

    function positionRandom() {
      for (let i = 0; i < cir.length; i++) {
        gsap.to(cir[i], {
          y: gsap.utils.random(-15, 15),
          x: gsap.utils.random(-20, 30),
          duration: gsap.utils.random(1, 2),
          ease: "Power0.easeOut",
          onComplete: () => {
            isMoving = false;
          },
        });
      }
    }

    function cirRemoveEffect() {
      cirRemove(this);
    }
    function cirRemove(c) {
      gsap.to(c, { transform: "scale(0)", duration: 0.2 });
    }
  });

  // 포트폴리오 슬라이드
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    autoplay: false,
    pagination: false,
  });
  // 슬라이드 마우스오버
  // $(".swiper-slide").on("mouseover", function () {
  //   swiper.autoplay.stop();
  // });
  // $(".swiper-slide").on("mouseout", function () {
  //   swiper.autoplay.start();
  // });

  // 스크롤 이벤트
  $(window).scroll(function () {
    var sectionHeight = $(".web_modeling").offset().top + 480;
    var scrollTop = $(window).scrollTop();
    //로고클릭 화면이동
    $("h1").click(function () {
      $("body,html").animate({ scrollTop: 0 });
    });
    // 메인 스크롤시 화면 변경
    // if(scrollTop > $('.sec01').offset().top + 280){
    //   $('.mv>h2').fadeOut();
    //   $('.mv_bar').stop().animate({'width':'3000px','height':'3000px'},1000);
    //   setTimeout(function() {
    //     $('.mv_bar').css('border-radius', '0');
    //   }, 1000);
    // }else{
    //   $('.mv>h2').css({'display':'block'});
    //   $('.mv_bar').stop().css({'width':'10px','height':'10px','borderRadius':'50%'});
    // }

    // 헤더
    if(scrollTop > $('.about').offset().top - 200){
      $('header').css({background:'#151616',color:'#fff'});
    }else{
      $('header').css({background:'#fff',color:'#000'});
    }
    // 스킬 스크롤
    var allDiv = $('.skill').find('div');

    if (scrollTop > $('.about').offset().top - 300) {
      // console.log(scrollTop);
      // console.log($('.about').offset().top - 300);
    
      $('.html').animate({ 'height': '90%' });
      $('.css').animate({ 'height': '90%' });
      $('.js').animate({ 'height': '70%' });
      $('.ps').animate({ 'height': '80%' });
      $('.ai').animate({ 'height': '70%' });
      $('.xd').animate({ 'height': '60%' });
      $('.figma').animate({ 'height': '80%' });
      $('.max').animate({ 'height': '80%' });
    } else {
      allDiv.css({ 'height': '0' });
    }

    // 배너/일러 일러이미지 화면 튀어나오게
    if (scrollTop > sectionHeight && scrollTop <= $(".contact").offset().top) {
      //$('body').css({'overflow-y':'hidden'})
      $(".illu_img").animate({ width: "70%", height: "90%" });
    } else {
      //$('body').css({'overflow-y':'scroll'})
      $(".illu_img").css({ width: "0", height: "0" });
    }

    //배너/일러 스크롤 가동
    // var scrollTop = $(this).scrollTop();
    // var offsetTop = $(".illu_design").offset().top;


    // if (scrollTop > offsetTop) {
    //   // .illu_design의 자식 요소들 중 .banner의 자식 요소들만 스크롤 가능하게 만듦
    //  // $('body').css('overflow-y', 'hidden');
    //   const boardEl = $('.banner_warp');
    //   const swiper = new Swiper('.swiper1',{
    //     //initialSlide: 7,
    //     direction: "vertical",
    //     slidesPerView : '2',
    //     spaceBetween : 15,
    //     mousewheel: {
    //       enabled: true,
    //     },
    //     reverse: false,
    //     simulateTouch: true,
    //     allowTouchMove: true,
    //     pagination : false,
    //   });
    //   const swipe = new Swiper('.swiper2', {
    //     direction: "column",
    //     slidesPerView : '2',
    //     spaceBetween : 15,
    //     mousewheel: {
    //       enabled: true,
    //     },
    //     simulateTouch: true,
    //     allowTouchMove: true,
    //     pagination : false,
    //   });
    //   $('.banner_wrap').on('mousewheel', function(event) {
    //     event.preventDefault();
    //     swiper1.mousewheel.event(event);
    //     swiper2.mousewheel.event(event);
    //   });
    //   boardEl.on('scroll', function() {
    //     const scrollTop = boardEl.scrollTop();
    //     swiper1.slideTo(Math.round(scrollTop / boardEl.height()));
    //   });
    // }
    ////////////
  });

  // // 이미지 스크롤 완료 여부를 저장하는 변수
  // let isBannerScrollFinished = false;

  // // 이미지 스크롤 완료 후 .banner_wrap 스크롤 활성화
  // function activateBannerWrapScroll() {
  //   if (isBannerScrollFinished = true) {
  //     // 이미지 스크롤이 완료되었다면 .banner_wrap 스크롤 활성화
  //     const bannerWrap = document.querySelector('body');
  //     bannerWrap.style.overflowY = 'auto';
  //   }
  // }

  // // 이미지 스크롤 완료 여부 감지 함수
  // function handleBannerScrollFinish(event) {
  //   const swiperWrapper = event.target;
  //   const { scrollLeft, scrollWidth, clientWidth } = swiperWrapper;
  //   if (scrollLeft + clientWidth >= scrollWidth) {
  //     // 이미지 스크롤이 끝까지 이동한 경우
  //     isBannerScrollFinished = true;
  //     activateBannerWrapScroll();
  //   }
  // }

  // // .swiper-wrapper 요소에 스크롤 이벤트 리스너 등록
  // const swiperWrappers = document.querySelectorAll('.swiper-wrapper');
  // swiperWrappers.forEach(swiperWrapper => {
  //   swiperWrapper.addEventListener('scroll', handleBannerScrollFinish);
  // });
  // JavaScript 코드
  // gsap 라이브러리 로드
  // gsap.registerPlugin(ScrollTrigger);

  // const illuImg = document.querySelector('.illu_img');
  // const bannerItems = document.querySelectorAll('.banner_item');
  // const banner2Items = document.querySelectorAll('.banner_item1');
  
  // const windowHeight = window.innerHeight;
  // const illuImgHeight = illuImg.offsetHeight;
  
  // window.addEventListener('scroll', () => {
  //   const scrollTop = window.scrollY;
  
  //   if (scrollTop >= illuImgHeight - windowHeight) {
  //     document.body.style.overflow = 'hidden'; // 스크롤 막기
  //   } else {
  //     document.body.style.overflow = 'auto'; // 스크롤 허용
  //   }
  // });
  
  // gsap.to(bannerItems, {
  //   yPercent: -100,
  //   scrollTrigger: {
  //     trigger: bannerItems,
  //     pin: true,
  //     start: 'top top',
  //     end: 'bottom bottom',
  //     scrub: true,
  //     markers: true,
  //   },
  // });
  // gsap.timeline({  
  //   scrollTrigger: {
  //     trigger: ".illu_design", // 객체기준범위
  //     pin: true, // 고정
  //     start: "top top", // 시작점
  //     end: "bottom bottom", // 끝점
  //     scrub: 10, // 모션바운스
  //     markers: true, // 개발가이드선
  //     onLeave: function(){ // 끝나는지점 callback함수
  //       console.log('end');
  //     }
  //   }
  // })
  // .to(bannerItems, {duration: 3000, opacity: 0, yPercent: -100})

  gsap.timeline({
    scrollTrigger: {
      trigger: ".grid-container",
      start: "top top",
      end: () => innerHeight * 2,
      scrub: 2,
      pin: ".grid",
      anticipatePin: 1
    }
  })
  .set(".gridBlock:not(.centerBlock)", {autoAlpha: 0})
  .to(".gridBlock:not(.centerBlock)", {duration: 0.1, autoAlpha: 1}, 0.001)
  .from(".gridLayer", {
    scale: 3.3333,
    ease: "none",
  });
  
  
  //Images to make it look better, not related to the effect
  const size = Math.max(innerWidth, innerHeight);
  gsap.set('.gridBlock', {backgroundImage: i => `url(https://picsum.photos/${size}/${size}?random=${i})`});
  
  const bigImg = new Image;    
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .gridBlock", {autoAlpha: 1, duration: 0.5});
  });
  
  bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;


  //////////////////////
});
