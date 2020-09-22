//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .


/* flashフェードアウト */
$(function(){
  setTimeout("$('.flash').fadeOut('slow')",2000);
});

// file_field
$( document ).on('turbolinks:load', function() {
  var prev_img = "";
  
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      
      reader.onload = function (e) {
        $(prev_img).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  // 画像プレビュー
  $('[id^=post_img]').change(function(){        // id: post_imgと一致
    var id = event.target.id[8]
    $(`#prev_img${id}`).removeClass('hidden');
    $(`#prev_img${id}`).addClass('select_img');
    $(`.before_img${id}`).addClass('hidden');
    //$(`.before_img${id}`).remove();             // 要素を削除
    
    // 格納済みの画像削除用
    if (document.getElementById(`db_img${id}`) != null ){
      $(`#db_img${id}`).removeClass('select_img');
      $(`#db_img${id}`).addClass('hidden');
    }
    
    $(`#delete_button${id}`).removeClass('hidden');
    
    // 3、4枚目表示判定
    if (id === '1') {
      // if (document.getElementById('before_img2') != null) {
      var before_img2 = document.getElementById('before_img2');
      if ( before_img2 != null ) {
        if ( before_img2.classList.contains( "hidden" ) != true ) {
          console.log("img2 == null"); // イメージ２が未選択
        } else {
          $('#post_img3_4').removeClass('hidden');
        }
      } else {
        $('#post_img3_4').removeClass('hidden');
      }
    } else if (id === '2') {
      // if (document.getElementById('before_img1') != null) {
      var before_img1 = document.getElementById('before_img1');
      if ( before_img1 != null ) {
        if ( before_img1.classList.contains( "hidden" ) != true ) {
          console.log("img1 == null"); // イメージ１が未選択
        } else {
          $('#post_img3_4').removeClass('hidden');
        }
      } else {
        $('#post_img3_4').removeClass('hidden');
      }
    }
    
    prev_img = `#prev_img${id}`;
    readURL(this);
  });
  
  // file_field 選択後の画像削除
  $('[id^=delete_img]').click(function() {
    var id = event.target.id[10]
    console.log(id);
    //$(`#prev_img${id}`).remove();             // 要素を削除
    $(`#db_img${id}`).removeClass('select_img');
    $(`#db_img${id}`).addClass('hidden');
    
    $(`#prev_img${id}`).removeClass('select_img');
    $(`#prev_img${id}`).addClass('hidden');
    
    $(`.before_img${id}`).removeClass('hidden');
    $(`#delete_button${id}`).addClass('hidden');
    
    // 削除フラグ変更
    delete_flag_img = `#delete_flag_img${id}`;
    $(delete_flag_img).attr('value', "true");
  });
});



/* スライダー */
var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1500,
  effect: 'slide',
  autoplay: { 
      delay: 4000,
      disableOnInteraction: false,
  },
  navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true
}
});

/* スムーススクロール */
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  var pc_offset = 0;
  var sp_offset = 0;
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var offset = window.innerWidth > 767 ? pc_offset : sp_offset;
  var position = target.offset().top - offset
  $('body,html').animate({scrollTop:position}, speed, 'swing');
});

// アコーディオン
$('.menu-ttl').click(function() {
  $('menu-list').slideToggle();
});

var open_position;
function scroll_lock(){
    var current_position = $(window).scrollTop();
    var is_open = $('.menu_modal').hasClass('modal_active');
    if(is_open && width < 768) {
        open_position = $(window).scrollTop();
        $('body, html').css({'width':'100%', 'position':'fixed', 'top': -(current_position)});
    } else {
        $('body, html').attr('style','');
        $('body, html').scrollTop(open_position);
    }
}

// ハンバーガー
$(function (){
  $('.menu_trigger').click(function(){
      $('.nav_block').slideToggle(200);
      $('.menu_modal').toggleClass('modal_active');
      scroll_lock();
  })
});
$(function() {
  $('.menu_modal').click(function() {
      $('.menu_modal').toggleClass('modal_active');
      $('.nav_block').slideToggle(200);
      scroll_lock();
  })
})


// レスポンシブデバイスジャッジ
// function deviceJudgment() {
//   var ua = navigator.userAgent;
//   if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
//       $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
//   } else {
//       $('head').prepend('<meta name="viewport" content="width=1200">');
//   }
// }
// deviceJudgment();



// /* Geocodingで緯度経度を取得 */
// $(function () {
//   function Callback(latlng) {
//     console.log(latlng.addr);
//     console.log(latlng.lat);
//     console.log(latlng.lng);
    
//     var googlemap = "https://maps.google.co.jp/maps?output=embed&q=" + latlng.lat + "," + latlng.lng;
//     console.log(googlemap);
    
//     /* Ajax通信により値をコントローラーへ渡す */
//     $.ajax({
//       url: "http://localhost:3000/users/" + gon.userid,
//       type: "GET", // WebAPIを指定
//       data: { gmap: googlemap } // 受け渡しパラメータオブジェクト
//     })
//       .done(function (data, textStatus, jqXHR) {
//         // サーバー通信成功した場合はこの中の処理が起動
//         // 引数のdataオブジェクトの中にはRailsから受け取ったパラメータが格納されている
//         console.log("接続が成功");
//         console.log(googlemap);
//       })
//       .fail(function() {
//         // サーバーエラーが起きた場合はこの中の処理が起動
//         console.log("接続失敗");
//       });
//   }
  
//   function errorCallback(error) {
//     console.log(error);
//   }
  
//   getLatLng(gon.address, Callback, errorCallback );
  
//   document.getElementById('exec').addEventListener('click', () => {
//     if (document.getElementById('address').value) {
//       getLatLng(document.getElementById('address').value, (latlng) => {
//         map.setCenter(latlng)
//       })
//     }
//   })
// });
