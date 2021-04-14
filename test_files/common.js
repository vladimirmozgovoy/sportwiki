// var userAgent = navigator.userAgent.toLowerCase();

// var Mozila = /firefox/.test(userAgent);
// var Chrome = /chrome/.test(userAgent);
// var Safari = /safari/.test(userAgent);
// var Opera = /opera/.test(userAgent);

// var InternetExplorer = false;
// if (
//   (/mozilla/.test(userAgent) &&
//     !/firefox/.test(userAgent) &&
//     !/chrome/.test(userAgent) &&
//     !/safari/.test(userAgent) &&
//     !/opera/.test(userAgent)) ||
//   /msie/.test(userAgent)
// )
//   InternetExplorer = true;

// console.log(userAgent);
// console.log(InternetExplorer);

// console.log("!!");

// if (InternetExplorer) {
//   $(".container_preloader").css("display", "none");
// }



//Lazy load all content
$(function() {
  $('.lazy').lazy();
});





var current_url = window.location.href;
var current_url_str = current_url.substring(8);
console.log("Обрезыный - " + current_url_str);

if (current_url_str.indexOf("//") !== -1) {
  // alert("Have more then one slash");

  var fix_slash = current_url_str.replace(/\/\/+/g, '/');
  // alert("Fix URL 5 - " + fix_slash);

  window.location = ("https://" + fix_slash); // Adds new URL to the history stack and redirects to the new URL
}



window.addEventListener("DOMContentLoaded", preloaderShow, false);

function preloaderShow() {
  window.setTimeout(function() {
    $(".container_preloader").css("display", "none");
    $(".container").css({
      opacity: 1
    });
  }, 1000);
}

$(document).ready(function() {
  $(".main-slider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    mouseDrag: false,
  });

  $("header .logo .search-icon").click(function() {
    $("header .search").slideToggle();
  });

  $("header .logo .burger").click(function() {
    $("header nav").slideToggle();
  });

  $(".questions-block").click(function() {
    $(this).toggleClass("questions-block-active");
    $(this).find(".post-text").slideToggle();
  });

  $(".filter-title").click(function() {
    $(".filter-list").slideToggle();
    $(".filter-cat ul").slideToggle();
  });

  $(".price-block .up").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $("header nav ul li a").each(function() {
    var current_href = window.location.href;

    if ($(this).attr("href") == current_href) {
      $(this).addClass("active");
    }
  });


  $(".menu nav ul li a").each(function() {
    var current_href = window.location.href;
    if ($(this).attr("href") == current_href) {
      $(this).addClass("active");

    }
  });



  // $(".post-page .program-block .link i").click(function() {
  //   location.href = $(this).data("href");
  //   return false;
  // });

  let btn = $("#to-top");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.css({
        opacity: "1"
      });
    } else {
      btn.css({
        opacity: "0"
      });
    }
  });

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "300");
  });

  console.log($(window).scrollTop());

  let $title = $("news-block-link");
  $title.each(function() {
    let titleLength = $(this).html().length;
    //  console.log($(this).html());
    let size = 0;
    if (titleLength > 25 && titleLength <= 46) {
      size = 50;
    } else if (titleLength > 46 && titleLength <= 69) {
      size = 25;
      console.log($(this).html());
    } else if (titleLength > 69 && titleLength <= 90) {
      size = 0;
      $(this).next().css("display", "none");
    } else if (titleLength > 92) {
      size = 0;
      sizeTitle = 92;
      $(this).next().css("display", "none");
      $(this).text($(this).text().slice(0, sizeTitle) + " ...");
    } else {
      size = 85;
    }
    $(this)
      .next()
      .text($(this).next().text().slice(0, size) + " ...");
  });

  let $titleProgram = $(".post-block-link");
  $titleProgram.each(function() {
    let titleLengthProgram = $(this).html().length;
    //  console.log($(this).html());
    let size = 0;
    if (titleLengthProgram > 2 && titleLengthProgram <= 62) {
      size = 150;
    } else if (titleLengthProgram > 62 && titleLengthProgram <= 124) {
      size = 150;
      console.log($(this).html());
    } else if (titleLengthProgram > 124 && titleLengthProgram <= 248) {
      size = 0;
      $(this).next().css("display", "none");
    } else if (titleLengthProgram > 92) {
      size = 0;
      sizeTitle = 92;
      $(this).next().css("display", "none");
      $(this).text($(this).text().slice(0, sizeTitle) + " ...");
    } else {
      size = 85;
    }
    $(this)
      .next()
      .text($(this).next().text().slice(0, size) + " ...");
  });

  let $hideText = $(".hide-block"),
    $btnMore = $("#true_loadmore");

  function cutText() {
    $hideText.each(function() {
      let hideTextLength = $(this).html().length;
      if (hideTextLength > 215) {
        sizeTitle = 215;
        $(this).text($(this).text().slice(0, sizeTitle) + " ...");
      }
    });
  }

  cutText();

  // $btnMore.click(() => {
  //   setTimeout(() => {
  //     console.log("111");
  //
  //     cutText();
  //   }, 2000);
  // });

  $("#true_loadmore").click(function() {
    setTimeout(function() {
      console.log("111");

      cutText();
    }, 2000);
  });

  // let size = 40,
  //   newsContent= $('.news-block .text p');
  //   newsContent.each(function () {
  //     let newsText = $(this).text();
  //     if(newsText.length > size){
  //       $(this).text(newsText.slice(0, size) + ' ...');
  //     }
  //   });

  $(".image").click(function() {
    // Событие клика на маленькое изображение
    let img = $(this); // Получаем изображение, на которое кликнули
    let src = img.attr("src"); // Достаем из этого изображения путь до картинки

    $("body").append(
      "<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
      "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
      "<img src='" +
      src +
      "' alt='popup' class='popup_img' />" + // Само увеличенное фото
      "</div>"
    );
    $(".popup").fadeIn(800); // Медленно выводим изображение
    $(".popup_bg").click(function() {
      // Событие клика на затемненный фон
      $(".popup").fadeOut(800); // Медленно убираем всплывающее окно
      setTimeout(function() {
        // Выставляем таймер
        $(".popup").remove(); // Удаляем разметку всплывающего окна
      }, 800);
    });
  });



  $("ol[start^='1']").addClass('list_blue_rounded_1');
  $("ol[start^='2']").addClass('list_blue_rounded_2');
  $("ol[start^='3']").addClass('list_blue_rounded_3');
  $("ol[start^='4']").addClass('list_blue_rounded_4');
  $("ol[start^='5']").addClass('list_blue_rounded_5');
  $("ol[start^='6']").addClass('list_blue_rounded_6');
  $("ol[start^='7']").addClass('list_blue_rounded_7');
  $("ol[start^='8']").addClass('list_blue_rounded_8');
  $("ol[start^='9']").addClass('list_blue_rounded_9');
  $("ol[start^='10']").addClass('list_blue_rounded_10');
  $("ol[start^='11']").addClass('list_blue_rounded_11');
  $("ol[start^='12']").addClass('list_blue_rounded_12');
  $("ol[start^='13']").addClass('list_blue_rounded_13');
  $("ol[start^='14']").addClass('list_blue_rounded_14');
  $("ol[start^='15']").addClass('list_blue_rounded_15');
  $("ol[start^='16']").addClass('list_blue_rounded_16');
  $("ol[start^='17']").addClass('list_blue_rounded_17');
  $("ol[start^='18']").addClass('list_blue_rounded_18');
  $("ol[start^='19']").addClass('list_blue_rounded_19');
  $("ol[start^='20']").addClass('list_blue_rounded_20');





  $("#load_more_btn_show").click(function() {
    $('#load_more_text').addClass('open_block');
    $('#load_more_btn_show').addClass('none');
    $('#load_more_btn_hide').removeClass('none');
    $('#background_line').addClass('none');
  });



  $("#load_more_btn_hide").click(function() {
    $('#load_more_text').removeClass('open_block');
    $('#load_more_btn_show').removeClass('none');
    $('#load_more_btn_hide').addClass('none');
    $('#background_line').removeClass('none');
  });







});