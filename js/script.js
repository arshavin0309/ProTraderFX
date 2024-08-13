document.addEventListener('DOMContentLoaded', () => {
    const swiper1 = new Swiper('.swiper-1', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // autoplay: {
        //     delay: 1750,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },

        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            900: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },
            1500: {
                slidesPerView: 4.5,
                spaceBetween: 30
            },
        }
    });


    const swiper2 = new Swiper(".swiper-2", {

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },

        slidesPerView: 1,
        spaceBetween: 30,

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + ('0' + (index + 1)) + "</span>";
            },
        },
    });


    const swiper5 = new Swiper('.swiper-5', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

    const swiper6 = new Swiper('.swiper-6', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    let responsibilityBtn = document.querySelectorAll('.responsibility__btn');
    let responsibilityBox = document.querySelectorAll('.responsibility__box');

    for (let i = 0; i < responsibilityBtn.length; i++) {
        responsibilityBtn[i].addEventListener('click', () => {
            for (let n = 0; n < responsibilityBtn.length; n++) {
                responsibilityBtn[n].classList.remove('active');
                responsibilityBox[n].classList.remove('active');
            };

            responsibilityBtn[i].classList.add('active');
            responsibilityBox[i].classList.add('active');
        });
    };

    let instrumentsBtn = document.querySelectorAll('.instruments__btn');
    let instrumentsTable = document.querySelectorAll('.instruments__table');

    let instrumentsShow = document.querySelector('.instruments__show');
    let instrumentsTr = document.querySelectorAll('.instruments__table tr');

    if (instrumentsShow) {
        instrumentsShow.addEventListener('click', () => {
            if (instrumentsShow.textContent === 'Смотреть больше') {
                for (let i = 0; i < instrumentsTr.length; i++) {
                    instrumentsTr[i].classList.add('active');
                };
                instrumentsShow.textContent = 'Скрыть';
                instrumentsShow.classList.add('active');
            } else {
                for (let i = 0; i < instrumentsTr.length; i++) {
                    instrumentsTr[i].classList.remove('active');
                };
                instrumentsShow.textContent = 'Смотреть больше';
                instrumentsShow.classList.remove('active');
            };
        });
    };

    for (let i = 0; i < instrumentsBtn.length; i++) {
        instrumentsBtn[i].addEventListener('click', () => {
            instrumentsShow.textContent = 'Смотреть больше';

            for (let i = 0; i < instrumentsTr.length; i++) {
                instrumentsTr[i].classList.remove('active');
            };

            for (let n = 0; n < instrumentsBtn.length; n++) {
                instrumentsBtn[n].classList.remove('active');
                instrumentsTable[n].classList.remove('active');
            };

            instrumentsBtn[i].classList.add('active');
            instrumentsTable[i].classList.add('active');
        });
    };

    $(function () {
        $("#accordion").accordion({
            active: false,
            collapsible: true,
            heightStyle: "content"
        });
    });

    for (let table of document.getElementsByTagName("table")) {
        let tableOverflow = document.createElement("div");
        tableOverflow.className = "table-overflow";
        table.parentElement.replaceChild(tableOverflow, table);
        tableOverflow.appendChild(table);
    }

    let headerBurger = document.querySelector('.header__burger');
    let headerMenu = document.querySelector('header .menu');

    headerBurger.addEventListener('click', () => {
        let menuItems = document.querySelectorAll('header .menu .menu-item')

        for (let m = 0; m < menuItems.length; m++) {
            menuItems[m].classList.remove('active')
        }

        headerMenu.classList.toggle('active');
        let menuItem = document.querySelectorAll('header .menu.active .menu-item');

        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].addEventListener('click', () => {
                for (let n = 0; n < menuItem.length; n++) {
                    menuItem[n].classList.remove('active');
                };

                menuItem[i].classList.add('active');
            });
        };
    });

    // окно с предупреждением о куки
    function getCookie(name) {
        let matches = document.cookie.match(
            new RegExp(
                '(?:^|; )' +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
                '=([^;]*)'
            )
        )
        return matches ? decodeURIComponent(matches[1]) : undefined
    }

    function setCookie(name, value, options = {}) {
        options = {
            path: '/',
            ...options,
        }

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString()
        }

        let updatedCookie =
            encodeURIComponent(name) + '=' + encodeURIComponent(value)

        for (let optionKey in options) {
            updatedCookie += '; ' + optionKey
            let optionValue = options[optionKey]
            if (optionValue !== true) {
                updatedCookie += '=' + optionValue
            }
        }

        document.cookie = updatedCookie
    }

    if (!getCookie('cookies')) {
        document.querySelector('.cookies').style = 'display: flex'
    }

    document.querySelector('.cookies .btn').addEventListener('click', () => {
        document.querySelector('.cookies').style = 'display: none'
        setCookie('cookies', 'true', { 'max-age': 3600 * 24 * 365 })
    })






    $('.responsibility__tab').on('click', function () {
        $('.responsibility__dropdown').slideToggle();
    });

    let partnersBtn = document.querySelector('.responsibility__tab');
    let partnersItem = document.querySelectorAll('.responsibility__item');
    let partnersContainer = document.querySelectorAll('.responsibility__box');

    for (let i = 0; i < partnersItem.length; i++) {
        if (partnersItem[i].innerHTML === partnersBtn.innerHTML) {
            partnersItem[i].style = 'display: none;';
        };
    };

    for (let i = 0; i < partnersItem.length; i++) {
        partnersItem[i].addEventListener('click', () => {
            for (let e = 0; e < partnersItem.length; e++) {
                partnersItem[e].style = 'display: flex';
            };

            partnersItem[i].style = 'display: none';

            partnersBtn.innerHTML = partnersItem[i].innerHTML;
            $('.responsibility__dropdown').slideToggle();

            for (let m = 0; m < partnersContainer.length; m++) {
                partnersContainer[m].classList.remove('active');
            };

            partnersContainer[i].classList.add('active');
        });
    };
});