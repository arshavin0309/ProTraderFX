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

        autoplay: {
            delay: 1750,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            600: {
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
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
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
        //     delay: 1750,
        //     disableOnInteraction: false,
        //     pauseOnMouseEnter: true,
        // },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    // Табы
    let assetsBtn = document.querySelectorAll('.assets__btn');
    let assetsBox = document.querySelectorAll('.assets__box');

    for (let i = 0; i < assetsBtn.length; i++) {
        assetsBtn[i].addEventListener('click', () => {
            for (let n = 0; n < assetsBtn.length; n++) {
                assetsBtn[n].classList.remove('active');
                assetsBox[n].classList.remove('active');
            };

            assetsBtn[i].classList.add('active');
            assetsBox[i].classList.add('active');
        });
    };

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

    // закрытие всех details при открытии нового details
    const details = document.querySelectorAll("details");

    details.forEach((detail) => {
        detail.addEventListener("toggle", () => {
            if (detail.open) setTargetDetail(detail);
        });
    });

    function setTargetDetail(targetDetail) {
        details.forEach((detail) => {
            if (detail !== targetDetail) {
                detail.open = false;
            }
        });
    }
});