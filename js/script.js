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
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // virtual: {
        //     enabled: true,
        // },

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
});