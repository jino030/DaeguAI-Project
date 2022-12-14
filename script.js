$(function(){ history.scrollRestoration = "auto"});

// 스크롤 이벤트
var scrollNav = $('nav');
$(window).scroll(function(){
  if($(this).scrollTop() > 0){
    scrollNav.addClass('sticky');
    $('#main-logo-color').attr('src',"./img/main/resoft-mainlogo.svg");
    $('.ham-black').attr('src',"./img/main/ham-black.svg");
  } else{
    scrollNav.removeClass('sticky');
    $('#main-logo-color').attr('src',"./img/main/resoft-mainlogo-white.png");
    $('.ham-black').attr('src',"./img/main/ham.svg");
  }
});

// 더보기 메뉴 나타나기
$(".ham").click(function() {
  if($('.nav-lnb').css("display")=="none"){
    $('.nav-lnb').fadeIn(350);
    $('nav').addClass('show');
    scrollNav.addClass('sticky');
    $('#main-logo-color').attr('src',"./img/main/resoft-mainlogo.svg");
    $('.ham-black').attr('src',"./img/main/ham-black.svg");
  } else {
    $('.nav-lnb').fadeOut(300);
    $('nav').removeClass('show');
    scrollNav.removeClass('sticky');
    $('#main-logo-color').attr('src',"./img/main/resoft-mainlogo-white.png");
    $('.ham-black').attr('src',"./img/main/ham.svg");
    // 스크롤 내려간 상태에서는 메뉴바 디자인 유지하기
    if($(window).scrollTop() > 0){
      scrollNav.addClass('sticky');
      $('#main-logo-color').attr('src',"./img/main/resoft-mainlogo.svg");
      $('.ham-black').attr('src',"./img/main/ham-black.svg");  
    }
  }
});

// 더보기 메뉴가 펼쳐진채로 스크롤했을 때 사라지도록
$(document).scroll(function(){
  scrollHam = $(this).scrollTop();
if(scrollHam > 0) {
  $('.nav-lnb').fadeOut(300);
  $('nav').removeClass('show');
}});

// 메인화면 슬릭슬라이더
$(function(){
    $(".main-slider").slick({
        slide: "div",                   // 슬라이드 되어야 할 태그
        infinite : true,                // 무한 반복 옵션     
        slidesToShow : 1,               // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,             // 스크롤 한번에 움직일 컨텐츠 개수
        speed : 400,                    // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,                  // 옆으로 이동하는 화살표 표시 여부
        dots : false,                   // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,                // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,           // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,            // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,               // 세로 방향 슬라이드 옵션
        prevArrow : ".prev-arrow",      // 이전 버튼
        nextArrow : ".next-arrow",      // 다음 버튼
        draggable : true,               // 드래그 가능 여부
        
        // 반응형 웹 구현 옵션
        // responsive: [
            // {   // 화면크기 1600px 일때
            //     breakpoint: 1600,
            //     settings: {slidesToShow: 4}
            // },
            // {   // 화면크기 1300px 일때
            //     breakpoint: 1300,
            //     settings: {slidesToShow: 3}
            // },
            // {   // 화면크기 668px 일때
            //     breakpoint: 668,
            //     settings: {slidesToShow: 2}
            // },
            // {   // 화면크기 468px 일때
            //     breakpoint: 468,
            //     settings: {slidesToShow: 1}
            // }

        // ]
    });
});

// 슬라이더 재생/정지 버튼
$(function(){
  $('.play-button').on('click', function(){
    $('.main-slider').slick('slickPause');
    $('.play-button').css({'display':'none'});
    $('.pause-button').css({'display':'inline-block'})
  });

  $('.pause-button').on('click', function(){
    $('.main-slider').slick('slickPlay');
    $('.play-button').css({'display':'inline-block'});
    $('.pause-button').css({'display':'none'})
  });
});

