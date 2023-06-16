$(document).ready(function () {
  $(".mv").append("<div class='intro'></div>");
  $(".intro").append("<div class='intro_logo'>");
  $(".intro_logo").append("<div class='intro_logo_inner'>");
  $(".intro_logo").animate({ opacity: '1' }, 500, function () {
    $(".mv_bar").animate({ width: "10px", borderRadius: "50%" }, 1000);
    $(".intro").animate({ top: "-60%", borderRadius: "60%" }, 1000);
  });
  $(".intro_logo_inner").css({ scale:'1' });
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
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    pagination: false,
    breakpoints: {
      1000:{
        slidesPerView: 2,
      },
      1281: {
        slidesPerView: 'auto',  //브라우저가 1024보다 클 때
        spaceBetween: 15,
      },
    },
  });
  $('.swiper-slide').on('mouseover', function(){
    swiper.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function(){
    swiper.autoplay.start();
  });

  // 스크롤 이벤트
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var menu = $('header li');
        // 메뉴 클릭시 섹션 이동
    menu.click(function (event) {
      var target = $(this).attr("href"); // 클릭한 메뉴의 href 값을 가져옴
      $("html").stop().animate(
        {scrollTop: $(target).offset().top},
        500
      ); // 애니메이션 시간 (0.8초)
    });
    // .scrtop 클릭시 상단이동
    $("header .scrtop,h1").click(function () {
      $("html,body").stop().animate(
        {scrollTop: 0},
        500
      );
    });
    // 헤더
    var wW = $(window).innerWidth();
    if(scrollTop > $('.about').offset().top - 200){
      $('header').css({background:'#151616',color:'#fff'});
    }else{
      $('header').css({background:'#fff',color:'#000'});
    }
    if(wW <= 830){
      if(scrollTop > $('.about').offset().top - 200){
        $('.gnb_btn>span').css({background:'#fff'});
        $('header .gnb ul').css({background:'#151616',color:'#fff'});
      }else{
        $('.gnb_btn>span').css({background:'#000'});
        $('header .gnb ul').css({background:'#fff',color:'#000'});
      }
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

    if(scrollTop >= $('.sec04').offset().top - 300){
      $('.gall_wrap').css({opacity:'1'});
    }else{
      $('.gall_wrap').css({opacity:'0'})
    }

  });

  gsap.registerPlugin(ScrollTrigger);

  const showDemo = () => {
    document.scrollingElement.scrollTo(0, 0);
  
    const sec04 = document.querySelector('.sec04');
    const scrollingDivs = sec04.querySelectorAll('.scrolling');
    scrollingDivs.forEach((scrollingDiv, index) => {
      const section = sec04;
      const w = scrollingDiv.querySelector('.wrapper');
      const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
      gsap.fromTo(w, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          scrub: .5
        }
      });
    });
  };
  
  showDemo();


  //푸터 메일 팝업
  $('.gform').submit(function(){
    $('.send_pop_bg').fadeIn()
  })

  var burger = $('.send_pop_close>div>div');

  burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('close');
      timer = setTimeout(function(){
        $('.send_pop_bg').fadeOut();
      },1000)
    })
  });
  
  $('.gnb_btn').click(function(){
    var hbg = $('header .gnb ul')
    hbg.slideToggle().css({display:'flex'});
  })
  //////////////////////
});
