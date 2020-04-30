(function ($) {
  $(function () {
    $('.nav-toggle').on('click', function () {
      $('header').toggleClass('open');
    });
  });
})(jQuery);

//メニューを押すとトグルが閉じる

$('.gloval-nav-sp a[href]' && '.gloval-nav-sp').on('click', function (event) {
  $('.nav-toggle').trigger('click');
});

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
