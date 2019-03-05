const shops = document.getElementsByClassName('show-location');

for (i = 0; i < shops.length; i++) {
    shops[i].addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target.id;
        var targetObj = addressData[target];
        myMap.geoObjects.removeAll();
        for (i = 0; i < targetObj.length; i++) {
            var mark = new ymaps.Placemark(addressData[target][i].coordinates, addressData[target][i].properties,
                addressData[target][i].options);
            myMap.geoObjects.add(mark);
        }
    })
}

ymaps.ready(init);
// Инициализация карты
function init() {
    myMap = new ymaps.Map('map', {
        center: [53.902496, 27.561481],
        zoom: [11],
        controls: ['zoomControl']
    });
    placeMarks();
}

function placeMarks() {
    for (key in addressData) {
        for (i = 0; i < addressData[key].length; i++) {
            var mark = new ymaps.Placemark(addressData[key][i].coordinates, addressData[key][i].properties,
                addressData[key][i].options);
            myMap.geoObjects.add(mark);
        }
    }
}

// Объект с адресами
var addressData = {
    'xistore': [{
            coordinates: [53.890224, 27.554375],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'ул. Бобруйская, д. 6, ст. м. «Площадь Ленина» (1 этаж, возле главного входа) (ТРЦ "Galileo")'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        },
        {
            coordinates: [53.859605, 27.674022],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'Партизанский пр-т, д. 150А, ст. м. «Могилевская» (2 этаж, остров)'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        },
        {
            coordinates: [53.908649, 27.432321],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'ул. Притыцкого, д. 156, ст. м. «Каменная горка» (напротив 33–34 кассы гипермаркета)'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        },
        {
            coordinates: [53.858474, 27.476761],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'пр-т Дзержинского, д. 106, ст. м. «Петровщина»'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        },
        {
            coordinates: [53.840127, 27.568775],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'микрорайон Лошица, улица Иосифа Гошкевича, 3'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        },
        {
            coordinates: [53.924861, 27.598482],
            properties: {
                hintContent: 'Ксистор',
                balloonContent: 'ул. Сурганова, д. 20, ст. м. «Академия наук»'
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: '../img/pin.svg',
                iconImageSize: [35, 35],
            }
        }

    ],
    'patio': [{
        coordinates: [53.908554, 27.548599],
        properties: {
            hintContent: '5 Элемент',
            balloonContent: 'проспект Победителей, 9'
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: '../img/pin.svg',
            iconImageSize: [35, 35],
        }
    }],
    'materik': [{
        coordinates: [53.905557, 27.433740],
        properties: {
            hintContent: 'Материк',
            balloonContent: 'ул. Притыцкого, 101'
        },
        options: {
            iconLayout: 'default#image',
            iconImageHref: '../img/pin.svg',
            iconImageSize: [35, 35],
        }
    }]
}