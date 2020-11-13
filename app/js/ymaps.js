window.onload = function () {
  const shops = document.getElementsByClassName('show-location');
  for (i = 0; i < shops.length; i++) {
    shops[i].addEventListener('click', function (e) {
      e.preventDefault();
      var target = e.target.id;
      var targetObj = addressData[target];
      myMap.geoObjects.removeAll();
      for (i = 0; i < targetObj.length; i++) {
        var mark = new ymaps.Placemark(addressData[target][i].coordinates, addressData[target][i].properties, addressData[target][i].options);
        myMap.geoObjects.add(mark);
      }
    });
  }

  const allshops = document.getElementById('allshops');
  allshops.addEventListener('click', function (e) {
    e.preventDefault();
    placeMarks();
  });

  ymaps.ready(init);
  // Инициализация карты
  function init() {
    myMap = new ymaps.Map('map', {
      center: [53.902496, 27.561481],
      zoom: [11],
      controls: ['zoomControl'],
      scroll: false,
    });
    myMap.behaviors.disable('scrollZoom');
    placeMarks();
  }

  function placeMarks() {
    for (key in addressData) {
      for (i = 0; i < addressData[key].length; i++) {
        var mark = new ymaps.Placemark(addressData[key][i].coordinates, addressData[key][i].properties, addressData[key][i].options);
        myMap.geoObjects.add(mark);
      }
    }
  }

  var addressData = {
    xistore: [
      {
        coordinates: [53.890224, 27.554375],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'ул. Бобруйская, д. 6, ст. м. «Площадь Ленина» (1 этаж, возле главного входа) (ТРЦ "Galileo")',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.859605, 27.674022],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'Партизанский пр-т, д. 150А, ст. м. «Могилевская» (2 этаж, остров)',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.908649, 27.432321],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'ул. Притыцкого, д. 156, ст. м. «Каменная горка» (напротив 33–34 кассы гипермаркета)',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.858474, 27.476761],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'пр-т Дзержинского, д. 106, ст. м. «Петровщина»',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.840127, 27.568775],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'микрорайон Лошица, улица Иосифа Гошкевича, 3',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.924861, 27.598482],
        properties: {
          hintContent: 'Ксистор',
          balloonContent: 'ул. Сурганова, д. 20, ст. м. «Академия наук»',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    patio: [
      {
        coordinates: [53.908554, 27.548599],
        properties: {
          hintContent: '5 Элемент',
          balloonContent: 'проспект Победителей, 9',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    // "materik": [{
    //     "coordinates": [53.905557, 27.433740],
    //     "properties": {
    //         "hintContent": "Материк",
    //         "balloonContent": "ул. Притыцкого, 101"
    //     },
    //     "options": {
    //         "iconLayout": "default#image",
    //         "iconImageHref": "../img/pin.svg",
    //         "iconImageSize": [35, 35]
    //     }
    // }],
    svetilkin: [
      {
        coordinates: [53.888887, 27.580552],
        properties: {
          hintContent: 'Светилкин — светотехнический магазин',
          balloonContent: 'Минск, улица Ленина, 27, павильон 46 (шоу-рум). График работы: ежедневно с 10:00 до 20:00 без перерыва. Телефон: +375 (29) 602-33-11, +375 (29) 364-26-97',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.933439, 27.632295],
        properties: {
          hintContent: 'Светилкин — светотехнический магазин',
          balloonContent: 'Минск, улица Кедышко, 24 (магазин-склад). График работы: понедельник - пятница с 08:30 до 18:00 без перерыва. Выходной: Суббота, Воскресенье. Телефон: +375 (29) 603-01-43',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    flamingo: [
      {
        coordinates: [53.929611, 27.584702],
        properties: {
          hintContent: 'Фламинго — салон-магазин по продаже светильников',
          balloonContent: 'Минск, улица Сурганова, 54. График работы: c 10:00 до 20:00, без выходных. Телефон: +375 (44) 517-00-00',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    // "mile": [{
    //     "coordinates": [53.968892, 27.545212],
    //     "properties": {
    //         "hintContent": "Mile — строительный гипермаркет",
    //         "balloonContent": "Минск, Долгиновский тракт, 188"
    //     },
    //     "options": {
    //         "iconLayout": "default#image",
    //         "iconImageHref": "../img/pin.svg",
    //         "iconImageSize": [35, 35]
    //     }
    // }],
    lumio: [
      {
        coordinates: [53.957169, 27.605606],
        properties: {
          hintContent: 'Lumio — шоурум',
          balloonContent: 'Минск, улица Гамарника, 30',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    'xiaomi-store': [
      {
        coordinates: [53.916249, 27.579519],
        properties: {
          hintContent: 'Xiaomi-Store',
          balloonContent: 'Минск, ул. Веры Хоружей 1А, ТЦ "Силуэт", цокольный (подземный) этаж, 1 ряд 12 место (сектор В)',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    texus: [
      {
        coordinates: [53.925391, 27.570347],
        properties: {
          hintContent: 'Техника успеха',
          balloonContent: 'Минск, улица М. Богдановича, 143',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.861867, 27.48039],
        properties: {
          hintContent: 'Техника успеха',
          balloonContent: 'Минск, проспект Дзержинского, 104',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
    miby: [
      {
        coordinates: [53.90857, 27.548599],
        properties: {
          hintContent: 'МИ БАЙ',
          balloonContent: 'Минск, пр. Победителей, 9, ТРЦ "Галерея", 4-й этаж',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.933698, 27.652534],
        properties: {
          hintContent: 'МИ БАЙ',
          balloonContent: 'Минск, ул. Петра Мстиславца, 11, ТРЦ Dana Mall',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.871594, 27.572799],
        properties: {
          hintContent: 'МИ БАЙ',
          balloonContent: 'Минск, ул. Денисовская, 8, ТЦ "Корона-Сити"',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.908851, 27.470176],
        properties: {
          hintContent: 'МИ БАЙ',
          balloonContent: 'Минск, ул. Петра Глебки, 5, ТРЦ "Скала"',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
      {
        coordinates: [53.964277, 27.623801],
        properties: {
          hintContent: 'МИ БАЙ',
          balloonContent: 'Минск, пересечение Мирошниченко и МКАД, ТРЦ EXPOBEL',
        },
        options: {
          iconLayout: 'default#image',
          iconImageHref: '../img/pin.svg',
          iconImageSize: [35, 35],
        },
      },
    ],
  };
};
