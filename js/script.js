document.addEventListener('DOMContentLoaded', () => {
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                        if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("w3-include-html");
                        includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }
    }
    includeHTML();
})




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

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

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
});