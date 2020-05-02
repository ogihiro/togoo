//SP ナビゲーション設定
(function ($) {
  $(function () {
    $('.nav-toggle').on('click', function () {
      $('header').toggleClass('open');
    });
  });
})(jQuery);

//メニューを押すとトグルが閉じる
$('.global-nav-sp a[href]' && '.global-nav-sp').on('click', function (event) {
  $('.nav-toggle').trigger('click');
});


//FAQ 設定
$(function () {
  // [.syncer-acdn]にクリックイベントを設定する
  $('.faq__question').click(function () {

    $("faq__asnwer").addClass("faq__asnwer-open");
    // [data-target]の属性値を代入する
    var target = $(this).data('target');

    // [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
    $('#' + target).slideToggle();

    // 終了
    return false;
  });
});
// ↓ .faq__questionがクリックされたら特定クラスの付与、削除
$(".faq__question").click(function () {
  if ($(this).hasClass("faq__question-clicked")) {
    $(this).removeClass("faq__question-clicked");
  } else {
    $(this).addClass("faq__question-clicked");
  }
});


//スムーススクロール 設定
var headerHight = $("header").outerHeight();
$("a").click(function () {
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? "body" : href);
  var position = target.offset().top - headerHight;
  $("html, body").animate({ scrollTop: position }, 500, "swing");
  //return false;
});


//mvのキャッチコピーを動かす設定 textyle使用
$(function () {
  $('.site-copy').textyle({
    duration: 350, //エフェクト時間(ミリ秒)
    delay: 50, //文字間のエフェクト間隔(ミリ秒)
    easing: 'swing', //エフェクトのイージングパターン
    callback: null //エフェクト完了後の処理（コールバック）
  });
});
