
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }




})(jQuery);


var swiper = new Swiper(".main-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    effect: "fade", // Use the fade effect
    fadeEffect: {
        crossFade: true, // Enables smooth crossfading
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".testimonial-swiper", {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: false,
    speed: 1500,
    // centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },

    }
});


var swiper = new Swiper(".features-slider", {
    slidesPerView: "auto",
    loop: true,
    freeMode: false,
    spaceBetween: 0,
    speed: 1000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            freeMode: true,


        },
        1024: {
            slidesPerView: 3,

        },
        1181: {
            slidesPerView: 4,

        },
    }
});

//======== Old Working Logic ==========

// document.addEventListener("DOMContentLoaded", () => {
//     const mobileIpadVisible = document.querySelector(".mobile-ipad-visible");
//     const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

//     const observer = new MutationObserver((mutations) => {
//         mutations.forEach((mutation) => {
//             if (mutation.attributeName === "class") {
//                 if (mobileIpadVisible.classList.contains("show")) {
//                     mobileMenuOverlay.classList.add("active");
//                 } else {
//                     mobileMenuOverlay.classList.remove("active");
//                 }
//             }
//         });
//     });

//     // Observe changes to the class attribute of the .mobile-ipad-visible element
//     observer.observe(mobileIpadVisible, { attributes: true });
// });

//=======================





document.addEventListener("DOMContentLoaded", () => {
    const mobileIpadVisible = document.querySelector(".mobile-ipad-visible");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

    // Select all links in the accordion
    const links = document.querySelectorAll(".dropdown-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            // Prevent the default link behavior immediately
            e.preventDefault();

            // Close the accordion (remove 'show' class)
            mobileIpadVisible.classList.remove("show");
            mobileMenuOverlay.classList.remove("active");

            // Set a timeout to allow the accordion to close before navigating
            setTimeout(() => {
                // Get the href of the clicked link
                const targetUrl = link.getAttribute("href");

                // Manually change the window location to navigate
                window.location.href = targetUrl;
            }, 300);  // Adjust this delay (in ms) to match your accordion's transition time
        });
    });

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === "class") {
                if (mobileIpadVisible.classList.contains("show")) {
                    mobileMenuOverlay.classList.add("active");
                } else {
                    mobileMenuOverlay.classList.remove("active");
                }
            }
        });
    });

    // Observe changes to the class attribute of the .mobile-ipad-visible element
    observer.observe(mobileIpadVisible, { attributes: true });
});





// document.addEventListener("DOMContentLoaded", function() {
//     const menu = document.querySelector(".mobile-ipad-visible");
//     const menuToggler = document.querySelector(".navbar-toggler");

//     let menuOpen = false;

//     // Toggle menu on toggler click
//     menuToggler.addEventListener("click", function(event) {
//         event.stopPropagation(); // Prevent click from propagating to document
//         if (menuOpen) {
//             menu.classList.remove("show");
//             menuOpen = false;
//         } else {
//             menu.classList.add("show");
//             menuOpen = true;
//         }
//     });

//     // Close menu when clicking outside
//     document.addEventListener("click", function(event) {
//         // Only close the menu if it's open and the click is outside the menu and toggler
//         if (menuOpen && !menu.contains(event.target) && !menuToggler.contains(event.target)) {
//             menu.classList.remove("show");
//             menuOpen = false;
//         }
//     });

//     // Prevent the document click listener from closing the menu if clicking inside the menu
//     menu.addEventListener("click", function(event) {
//         event.stopPropagation(); // Prevent click inside the menu from triggering document click
//     });
// });




// document.getElementById("shopNowBtn").addEventListener("click", function () {
//     const buttonContainer = document.querySelector(".shopnowbtn");

//     buttonContainer.innerHTML = `
//         <div class="hidden-contact-btn--wrapper">
//                                                 <a href="https://wa.me/918160767517"
//                                                     class="c-custom-opacity hidden-contact-btn p-2 border-0"
//                                                     target="_blank">
//                                                     <i class="fa-brands fa-whatsapp fa-xl" style="color: #343434;"></i>
//                                                 </a>
//                                                 <a href="tel:+918160767517"
//                                                     class="c-custom-opacity hidden-contact-btn p-2 border-0">
//                                                     <i class="fa-solid fa-phone fa-lg" style="color: #343434;"></i>
//                                                 </a>
//                                             </div>
//     `;
// });


// document.getElementById("shopNowBtn").addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent overlay from closing

//     const buttonContainer = document.querySelector(".shopnowbtn");

//     // Add the hidden contact buttons
//     buttonContainer.innerHTML = `
//         <div class="hidden-contact-btn--wrapper">
//             <a href="https://wa.me/918160767517"
//                 class="c-custom-opacity hidden-contact-btn p-2 border-0"
//                 target="_blank">
//                 <i class="fa-brands fa-whatsapp fa-xl" style="color: #343434;"></i>
//             </a>
//             <a href="tel:+918160767517"
//                 class="c-custom-opacity hidden-contact-btn p-2 border-0">
//                 <i class="fa-solid fa-phone fa-lg" style="color: #343434;"></i>
//             </a>
//         </div>
//     `;
// });

// // Prevent overlay from closing when clicking inside it
// document.querySelector(".hidden-overlay-content").addEventListener("click", function (event) {
//     event.stopPropagation();
// });




// document.getElementById("shopNowBtn").addEventListener("click", function () {
//     const buttonContainer = document.querySelector(".shopnowbtn");

//     // Save original button content
//     const originalContent = buttonContainer.innerHTML;

//     // Change the button content to WhatsApp & Call options
//     buttonContainer.innerHTML = `
//         <div class="hidden-contact-btn--wrapper">
//                                                 <a href="https://wa.me/918160767517"
//                                                     class="c-custom-opacity hidden-contact-btn p-2 border-0"
//                                                     target="_blank">
//                                                     <i class="fa-brands fa-whatsapp fa-xl" style="color: #343434;"></i>
//                                                 </a>
//                                                 <a href="tel:+918160767517"
//                                                     class="c-custom-opacity hidden-contact-btn p-2 border-0">
//                                                     <i class="fa-solid fa-phone fa-lg" style="color: #343434;"></i>
//                                                 </a>
//                                             </div>
//     `;
// });





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Contact us Page JS





window.onload = function () {
    if (window.location.hash) {
        setTimeout(function () {
            document.querySelector(window.location.hash).scrollIntoView({ behavior: "smooth" });
        }, 500); // Delay to ensure the page has loaded
    }
};

// Fetch Component JS Logic

// $(document).ready(function () {
//     async function fetchAndReplace(url, selector) {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Failed to load ${url}`);
//             const html = await response.text();
//             const element = document.querySelector(selector);
//             if (element) {
//                 element.insertAdjacentHTML("beforeend", html); // Properly insert HTML
//             }
//         } catch (error) {
//             console.error(`Error fetching ${url}:`, error);
//         }
//     }

//     async function loadComponents() {
//         await fetchAndReplace("/components/header.html", "#headerWrap");
//         await fetchAndReplace("/components/footer.html", "#footerWrap");
//     }

//     loadComponents();
// });












// document.addEventListener("scroll", function() {
//     let scrolled = window.scrollY;
//     document.querySelectorAll(".main-body--wrapper").forEach((element) => {
//       element.style.transform = `translateY(${scrolled * 0.9}px)`; // Adjust speed (0.3 for a subtle effect)
//     });
//   });



// var
//   animRequestID,
//   settingsStr = document.getElementById('smooth-scroll').dataset.scrollSettings,
//   settings = parseSettings(settingsStr);

// function parseSettings(str) {
//   var r = {};
//   str.split(' ').forEach(s => {
//     var t = s.split(':');
//     r[t[0]] = t[1];
//   });
//   return r;
// };

// function addListeners(element, events, callback) {
//   events.split(' ').forEach(e => element.addEventListener(e, callback, false));
// };

// function handleResize() {
//   var bodyHeight = document.getElementById('smooth-scroll').offsetHeight;
// //   gsap.set('body', { height: bodyHeight });
//   cancelAnimationFrame(animRequestID);
// };

// function handleScroll() {
//   scrollTo(window.scrollY);
// };

// function scrollTo(y) {
//   cancelAnimationFrame(animRequestID);
//   animRequestID = requestAnimationFrame(function() {
//     gsap.to('#smooth-scroll', {
//       duration: settings.duration,
//       y: -y,
//       ease: settings.ease
//     });
//   });
// };

// gsap.set('#smooth-scroll', {
//   force3D: true
// });

// if(settings.smoother == 'on') {
//   // gsap.set('.viewport', { perspective: 1000 });
//   gsap.set('#smooth-scroll', {
//     rotation: .001
//     // z: .01
//   });
// };

// addListeners(window, 'load resize', handleResize);
// addListeners(window, 'scroll', handleScroll);



// const text = document.querySelector(".text p");

// text.innerHTML = text.innerText
//     .split("")
//     .map(
//         (char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
//     )
//     .join("");
