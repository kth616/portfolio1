$(document).ready(function() {
    $('.drawer').drawer();
  });

jQuery('.drawer-icon').on('click', function(e){
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active')
  jQuery('.drawer-content').toggleClass('is-active')
  jQuery('.drawer-background').toggleClass('is-active')

  return false;
});

jQuery('a[href^="#"]').click(function() {
  // .headerクラスがついた要素の高さを取得
  let header = jQuery(".header").innerHeight();
  let speed = 300;
  let id = jQuery(this).attr("href");
  let target = jQuery("#" == id ? "html" : id);
  // トップからの距離からヘッダー分の高さを引く
  let position = jQuery(target).offset().top - header;
  // その分だけ移動すればヘッダーと被りません
  jQuery("html, body").animate(
    {
      scrollTop: position
    },
    speed
  );
  return false;
});