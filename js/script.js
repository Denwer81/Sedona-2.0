const hamburger = document.querySelector('.hamburger');
const LinkItem = document.querySelectorAll('.main-nav__item');
const mediaQueryMobile = window.matchMedia('(max-width: 767px)');


if (mediaQueryMobile.matches) {
  hamburger.classList.add('hamburger__active');
  LinkItem.forEach(function (item) {
    if (!item.classList.contains('main-nav__item_order_first'))
      item.classList.add('main-nav__item_closed')
  })
}

window.addEventListener('resize',function(){
  if (mediaQueryMobile.matches) {
    hamburger.classList.remove('is-active');
    hamburger.classList.add('hamburger__active');
    LinkItem.forEach(function (item) {
      if (!item.classList.contains('main-nav__item_order_first'))
        item.classList.add('main-nav__item_closed')
    })
  } else {
    hamburger.classList.remove('hamburger__active');
    LinkItem.forEach(function (item) {
      if (!item.classList.contains('main-nav__item_order_first'))
        item.classList.remove('main-nav__item_closed')
    })
  }
});

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  LinkItem.forEach(function (item) {
    if (!item.classList.contains('main-nav__item_order_first'))
      item.classList.toggle('main-nav__item_closed')
  })
})