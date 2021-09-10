//Бегущая строка
Marquee3k.init();

//Карта яндекс
ymaps.ready(function () {
  const map = new ymaps.Map('map', {
    center: [57.613130, 39.888019],
    zoom: 16,
    controls: []
  }, {
    suppressMapOpenBlock: true
  });

  const hint = {
    iconLayout: 'default#image',
    iconImageHref: 'static/img/map-hint.svg',
    iconImageSize: [43, 73],
    iconImageOffset: [-21, -73]
  };

  const meetupData = {
    yaroslav: {
      date: '23 сентября 2021 года четверг',
      place: 'Ярославль, Гостиничный комплекс «Любим», 2-я Мельничная ул., 3',
      coords: [57.613130, 39.888019]
    },
    kaluga: {
      date: '30 сентября 2021 года четверг',
      place: 'Калуга, отель «Амбассадор Калуга» Ул. Автомобильная, 6 ',
      coords: [54.563917, 36.362581]
    },
    ryazan: {
      date: '7 октября 2021 года четверг',
      place: 'Рязань, конгресс-отель Амакс Первомайский проспект, 54',
      coords:  [54.629773, 39.720349]
    },
  };

  const yaroslavl = new ymaps.Placemark(
      meetupData.yaroslav.coords, {}, hint
  );
  const kaluga = new ymaps.Placemark(
      meetupData.kaluga.coords, {}, hint
  );
  const ryazan = new ymaps.Placemark(
      meetupData.ryazan.coords, {}, hint
  );

  map.geoObjects.add(yaroslavl).add(kaluga).add(ryazan);

  const links = document.querySelectorAll('.map-nav__link');
  const $yaroslavlLink = document.querySelector("#yaroslavl");
  const $kalugalLink = document.querySelector('#kaluga');
  const $ryazanLink = document.querySelector('#ryazan');

  const mapSetter = (e, meetupData) => {
    e.preventDefault();
    links.forEach(item => item.classList.remove('map-nav__link--active'))
    e.target.classList.add('map-nav__link--active');
    map.panTo(meetupData.coords);
    const date = document.querySelector('.address-info__date');
    const place = document.querySelector('.address-info__place');
    date.textContent = meetupData.date;
    place.textContent = meetupData.place;
  };
  $yaroslavlLink.addEventListener('click', (e) => mapSetter(e, meetupData.yaroslav));
  $kalugalLink.addEventListener('click', (e) => mapSetter(e, meetupData.kaluga));
  $ryazanLink.addEventListener('click', (e) => mapSetter(e, meetupData.ryazan));
});


// modal
const modal = document.querySelector(".modalJS");
const modalClose = document.querySelector(".modal-close");

document.addEventListener('click', function (e) {
  if(e.target.classList.contains('showPopupJS')) {
    modal.style.display = "block";
  }
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
modalClose.addEventListener('click', function () {
  modal.style.display = "none";
});

document.addEventListener('click', function (e) {
  if(e.target.classList.contains('showPopupJS')) {
    modal.style.display = "block";
  }
});


// mobile menu
const mobileMenu = document.querySelector(".mobileJS");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function (e) {
    mobileMenu.style.display = "block";
    this.classList.add('hamburger--active');
});
document.addEventListener('click', function (e) {
  if (e.target === mobileMenu) {
    mobileMenu.style.display = "none";
    hamburger.classList.remove('hamburger--active');
  }
});
mobileMenuClose.addEventListener('click', function (e) {
    mobileMenu.style.display = "none";
    hamburger.classList.remove('hamburger--active');
});

// confirm modal

const modalConfirm = document.querySelector(".confirm-modalJS");
const modalConfirmClose = document.querySelector(".modal-confirm-close");

modalConfirmClose.addEventListener('click', function () {
  modalConfirm.style.display = "none";
});
document.addEventListener('click', function (e) {
  if (e.target === modalConfirm) {
    modalConfirm.style.display = "none";
  }
});


// smooth anchor scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}