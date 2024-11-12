// (function ($) {
//     "use strict";
    
//     /*----------------------------------------
//        Sticky Menu Activation
//     ---------------------------------*/
//     $(window).on('scroll', function () {
//         if ($(this).scrollTop() > 300) {
//             $('.header-sticky').addClass('sticky');
//         } else {
//             $('.header-sticky').removeClass('sticky');
//         }
//     });

//     /*----------------------------------------
//         Off Canvas
//     -------------------------------------------*/
//     $(".off-canvas-btn").on('click', function () {
//         $("body").addClass('fix');
//         $(".off-canvas-wrapper").addClass('open');
//     });

//     $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
//         $("body").removeClass('fix');
//         $(".off-canvas-wrapper").removeClass('open');
//     });

//     /*----------------------------------------
//         Off Canvas Menu
//     -------------------------------------------*/
//     $(".off-canvas-menu-btn").on('click', function () {
//         $("body").addClass('fix');
//         $(".off-canvas-menu-wrapper").addClass('open');
//     });

//     $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
//         $("body").removeClass('fix');
//         $(".off-canvas-menu-wrapper").removeClass('open');
//     });

//     /*----------------------------------------
//         Cart Plus Minus Button
//     ----------------------------------------*/
//     $('.cart-plus-minus').append(
//         '<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
//     );

//     $('.qtybutton').on('click', function () {
//         var $button = $(this);
//         var $input = $button.parent().find('input');
//         var oldValue = parseInt($input.val());
        
//         // If it's an increment button
//         if ($button.hasClass('inc')) {
//             var newVal = oldValue + 1;
//         } 
//         // If it's a decrement button
//         else {
//             var newVal = oldValue - 1;
//             // Allow it to go down to 0
//             if (newVal < 0) {
//                 newVal = 0; // Set the minimum value to 0
//             }
//         }
    
//         // Update the value in the input field
//         $input.val(newVal);
        
//         // Update the subtotal for this cart item
//         updateSubtotal(); // Update the cart totals after quantity change
//     });
    
//     /*----------------------------------------
//         Toggle Function Active
//     ----------------------------------------*/
//     $('#showlogin').on('click', function () {
//         $('#checkout-login').slideToggle(900);
//     });
//     $('#showcoupon').on('click', function () {
//         $('#checkout_coupon').slideToggle(900);
//     });
//     $('#cbox').on('click', function () {
//         $('#cbox-info').slideToggle(900);
//     });
//     $('#ship-box').on('click', function () {
//         $('#ship-box-info').slideToggle(1000);
//     });

//     /*----------------------------------------
//         Shop Grid Activation
//     ----------------------------------------*/
//     $('.shop_toolbar_btn > button').on('click', function (e) {
//         e.preventDefault();
//         $('.shop_toolbar_btn > button').removeClass('active');
//         $(this).addClass('active');
        
//         var parentsDiv = $('.shop_wrapper');
//         var viewMode = $(this).data('role');
//         parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

//         if (viewMode == 'grid_3') {
//             parentsDiv.children().addClass('col-lg-4 col-md-6 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
//         }
//         if (viewMode == 'grid_4') {
//             parentsDiv.children().addClass('col-lg-3 col-md-6 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
//         }
//         if (viewMode == 'grid_list') {
//             parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-6 col-sm-6 col-cust-5');
//         }
//     });

//     /*----------------------------------------
//         Price Slider Active
//     ----------------------------------------*/
//     $( "#slider-range" ).slider({
//         range: true,
//         min: 0,
//         max: 500,
//         values: [ 0, 500 ],
//         slide: function( event, ui ) {
//             $( "#amount" ).val("₹" + ui.values[ 0 ] + " - ₹" + ui.values[ 1 ]);
//         }
//     });
//     $( "#amount" ).val("₹" + $( "#slider-range" ).slider( "values", 0 ) +
//        " - ₹" + $( "#slider-range" ).slider( "values", 1 ));

//     /*----------------------------------------
//         Countdown
//     ----------------------------------------*/
//     $('[data-countdown]').each(function() {
//         var $this = $(this), finalDate = $(this).data('countdown');
//         $this.countdown(finalDate, function(event) {
//             $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
//         });
//     });

//     /*----------------------------------------
//         Popup Image
//     ----------------------------------------*/
//     $('.popup-gallery').magnificPopup({
//         delegate: 'a',
//         type: 'image',
//         tLoading: 'Loading image #%curr%...',
//         mainClass: 'mfp-img-mobile',
//         gallery: {
//             enabled: true,
//             navigateByImgClick: true,
//             preload: [0,1]
//         },
//         image: {
//             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
//         }
//     });

//     /*----------------------------------------
//         Ajax Contact Form JS
//     ----------------------------------------*/
//     const form = $('#contact-form'),
//           formMessages = $('.form-message');

//     $(form).submit(function (e) {
//         e.preventDefault();
//         var formData = form.serialize();
//         $.ajax({
//             type: 'POST',
//             url: form.attr('action'),
//             data: formData
//         }).done(function (response) {
//             $(formMessages).removeClass('alert alert-danger');
//             $(formMessages).addClass('alert alert-success fade show');
//             formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
//             formMessages.append(response);
//             $('#contact-form input,#contact-form textarea').val('');
//         }).fail(function (data) {
//             $(formMessages).removeClass('alert alert-success');
//             $(formMessages).addClass('alert alert-danger fade show');
//             if (data.responseText !== '') {
//                 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
//                 formMessages.append(data.responseText);
//             } else {
//                 $(formMessages).text('Oops! An error occurred and your message could not be sent.');
//             }
//         });
//     });

//     /*----------------------------------------
//         Scroll To Top
//     ----------------------------------------*/
//     function scrollToTop() {
//         var $scrollUp = $('.scroll-to-top'),
//             $lastScrollTop = 0,
//             $window = $(window);

//         $window.on('scroll', function () {
//             var topPos = $(this).scrollTop();
//             if (topPos > $lastScrollTop) {
//                 $scrollUp.removeClass('show');
//             } else {
//                 if ($window.scrollTop() > 200) {
//                     $scrollUp.addClass('show');
//                 } else {
//                     $scrollUp.removeClass('show');
//                 }
//             }
//             $lastScrollTop = topPos;
//         });

//         $scrollUp.on('click', function (evt) {
//             $('html, body').animate({
//                 scrollTop: 0
//             }, 600);
//             evt.preventDefault();
//         });
//     }
//     scrollToTop();

//     /*----------------------------------------
//         Nice Select
//     ----------------------------------------*/
//     $(document).ready(function () {
//         $('.nice-select').niceSelect();
//     });

//     /*----------------------------------------
//         Preloader
//     ----------------------------------------*/
//     $(window).on('load', function () {
//         $('#preloader').delay(350).fadeOut('slow');
//         $('body').delay(350).css({'overflow':'visible'});
//     });

//     /*----------------------------------------
//         Cart Total Calculation in Rupees
//     ----------------------------------------*/
//     function updateSubtotal() {
//         let cartSubtotal = 0;

//         // Loop through each cart item to calculate the subtotal
//         $('.cart-item').each(function () {
//             const price = parseFloat($(this).find('.product-price').data('price'));
//             const quantity = parseInt($(this).find('.cart-plus-minus-box').val());
//             const subtotal = price * quantity;

//             $(this).find('.product-subtotal').text('₹' + subtotal.toFixed(2)); // Update the subtotal for each product

//             cartSubtotal += subtotal;  // Add to cart subtotal
//         });

//         // Update the cart subtotal text
//         $('.cart-subtotal').text('₹' + cartSubtotal.toFixed(2));

//         // Update total (cart subtotal + shipping)
//         updateTotal(cartSubtotal);
//     }

//     // Function to update the total (including shipping cost)
//     function updateTotal(cartSubtotal) {
//         const shipping = parseFloat($('.cart-shipping').text().replace('₹', '').trim());

//         // Total is calculated as the subtotal plus shipping cost
//         const total = cartSubtotal + shipping;

//         // Update the total amount in the cart, using ₹ (rupee symbol)
//         $('.total-amount').text('₹' + total.toFixed(2));
//     }

//     // Initial cart total calculation on page load
//     $(document).ready(function () {
//         updateSubtotal();
//     });

//     function updateSubtotal() {
//         let cartSubtotal = 0;

//         // Loop through each cart item to calculate the subtotal
//         $('.cart-item').each(function () {
//             const price = parseFloat($(this).find('.product-price').data('price'));
//             const quantity = parseInt($(this).find('.cart-plus-minus-box').val());
//             const subtotal = price * quantity;

//             // Update the product subtotal for each item in ₹
//             $(this).find('.product-subtotal').text('₹' + subtotal.toFixed(2));

//             cartSubtotal += subtotal;  // Add to cart subtotal
//         });

//         // Update the cart subtotal text in ₹
//         $('.cart-subtotal').text('₹' + cartSubtotal.toFixed(2));

//         // Update total (cart subtotal + shipping)
//         updateTotal(cartSubtotal);
//     }

//     // Function to update the total (including shipping cost)
//     function updateTotal(cartSubtotal) {
//         // Ensure shipping is parsed correctly from text
//         const shipping = parseFloat($('.cart-shipping').text().replace('₹', '').trim()) || 0;

//         // Calculate total by adding shipping to subtotal
//         const total = cartSubtotal + shipping;

//         // Update the total amount in the cart (formatted in ₹)
//         $('.total-amount').text('₹' + total.toFixed(2));
//     }

//     // Event listener for quantity change in the cart
//     $('.cart-plus-minus-box').on('change', function () {
//         updateSubtotal(); // Recalculate subtotal when quantity changes
//     });

//     // Initial cart total calculation when page loads
//     $(document).ready(function () {
//         updateSubtotal();  // Initial calculation of subtotal and total on page load
//     });
//     function updateSubtotal() {
//         let cartSubtotal = 0;

//         // Loop through each cart item to calculate the subtotal
//         $('.cart-item').each(function () {
//             const price = parseFloat($(this).find('.product-price').data('price'));
//             const quantity = parseInt($(this).find('.cart-plus-minus-box').val());
//             const subtotal = price * quantity;

//             // Update the product subtotal for each item in ₹
//             $(this).find('.product-subtotal').text('₹' + subtotal.toFixed(2));

//             cartSubtotal += subtotal;  // Add to cart subtotal
//         });

//         // Update the cart subtotal text in ₹
//         $('.cart-subtotal').text('₹' + cartSubtotal.toFixed(2));

//         // Update total (cart subtotal + shipping)
//         updateTotal(cartSubtotal);
//     }

//     // Function to update the total (including shipping cost)
//     function updateTotal(cartSubtotal) {
//         // Get shipping cost from the cart shipping element (Assuming shipping is ₹70)
//         const shippingCost = 70;  // You can replace this with dynamic value if needed

//         // Calculate total by adding shipping to subtotal
//         const total = cartSubtotal + shippingCost;

//         // Update the total amount in the cart (formatted in ₹)
//         $('.total-amount').text('₹' + total.toFixed(2));
//     }

//     // Event listener for quantity change in the cart
//     $('.cart-plus-minus-box').on('change', function () {
//         updateSubtotal(); // Recalculate subtotal when quantity changes
//     });

//     // Initial cart total calculation when page loads
//     $(document).ready(function () {
//         updateSubtotal();  // Initial calculation of subtotal and total on page load
//     });
    
// })(jQuery);
(function ($) {
    "use strict";

    /*----------------------------------------
       Sticky Menu Activation
    ---------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.header-sticky').addClass('sticky');
        } else {
            $('.header-sticky').removeClass('sticky');
        }
    });

    /*----------------------------------------
        Off Canvas
    -------------------------------------------*/
    $(".off-canvas-btn").on('click', function () {
        $("body").addClass('fix');
        $(".off-canvas-wrapper").addClass('open');
    });

    $(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".off-canvas-wrapper").removeClass('open');
    });

    /*----------------------------------------
        Cart Plus Minus Button
    ----------------------------------------*/
    $('.cart-plus-minus').append(
        '<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
    );

    $('.qtybutton').on('click', function () {
        var $button = $(this);
        var $input = $button.parent().find('input');
        var oldValue = parseInt($input.val());

        // If it's an increment button
        if ($button.hasClass('inc')) {
            var newVal = oldValue + 1;
        } 
        // If it's a decrement button
        else {
            var newVal = oldValue - 1;
            // Allow it to go down to 0
            if (newVal < 0) {
                newVal = 0; // Set the minimum value to 0
            }
        }

        // Update the value in the input field
        $input.val(newVal);

        // Update the subtotal for this cart item
        updateSubtotal(); // Update the cart totals after quantity change
    });

    /*----------------------------------------
        Cart Total Calculation (Display in Rupees)
    ----------------------------------------*/
    function updateSubtotal() {
        let cartSubtotal = 0;

        // Loop through each cart item to calculate the subtotal
        $('.cart-item').each(function () {
            const price = parseFloat($(this).find('.product-price').data('price'));
            const quantity = parseInt($(this).find('.cart-plus-minus-box').val());
            const subtotal = price * quantity; // Price in Rupees (no conversion)

            $(this).find('.product-subtotal').text('₹' + subtotal.toFixed(2)); // Update the subtotal for each product

            cartSubtotal += subtotal;  // Add to cart subtotal
        });

        // Update the cart subtotal text
        $('.cart-subtotal').text('₹' + cartSubtotal.toFixed(2));

        // Update total (cart subtotal + shipping)
        updateTotal(cartSubtotal);
    }

    // Function to update the total (including shipping cost)
    function updateTotal(cartSubtotal) {
        // Get shipping cost from the cart shipping element (Assuming shipping is ₹70)
        const shipping = parseFloat($('.cart-shipping').text().replace('₹', '').trim()) || 0;

        // Total is calculated as the subtotal plus shipping cost
        const total = cartSubtotal + shipping;

        // Update the total amount in the cart, using ₹ (rupee symbol)
        $('.total-amount').text('₹' + total.toFixed(2));
    }

    // Event listener for quantity change in the cart
    $('.cart-plus-minus-box').on('change', function () {
        updateSubtotal(); // Recalculate subtotal when quantity changes
    });

    // Initial cart total calculation when page loads
    $(document).ready(function () {
        updateSubtotal();  // Initial calculation of subtotal and total on page load
    });

    /*----------------------------------------
        Proceed to Checkout Button Fix (Prevent Conversion)
    ----------------------------------------*/
    $('#proceed-to-checkout').on('click', function (e) {
        // Ensure that before proceeding, the prices are already in INR (₹) and there's no conversion happening
        var totalAmount = parseFloat($('.total-amount').text().replace('₹', '').trim());

        // If there's a non-number value (NaN), prevent proceeding and show an error
        if (isNaN(totalAmount)) {
            e.preventDefault();  // Prevent checkout
            alert("Error: Invalid total amount! Please ensure all items have correct prices.");
        } else {
            // Allow the user to proceed with the checkout if everything is valid
            console.log('Proceeding to checkout...');
        }
    });

    /*----------------------------------------
        Toggle Function Active
    ----------------------------------------*/
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(900);
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(900);
    });
    $('#cbox').on('click', function () {
        $('#cbox-info').slideToggle(900);
    });
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

    /*----------------------------------------
        Shop Grid Activation
    ----------------------------------------*/
    $('.shop_toolbar_btn > button').on('click', function (e) {
        e.preventDefault();
        $('.shop_toolbar_btn > button').removeClass('active');
        $(this).addClass('active');

        var parentsDiv = $('.shop_wrapper');
        var viewMode = $(this).data('role');
        parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

        if (viewMode == 'grid_3') {
            parentsDiv.children().addClass('col-lg-4 col-md-6 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
        }
        if (viewMode == 'grid_4') {
            parentsDiv.children().addClass('col-lg-3 col-md-6 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
        }
        if (viewMode == 'grid_list') {
            parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-6 col-sm-6 col-cust-5');
        }
    });

    /*----------------------------------------
        Price Slider Active
    ----------------------------------------*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val("₹" + ui.values[ 0 ] + " - ₹" + ui.values[ 1 ]);
        }
    });
    $( "#amount" ).val("₹" + $( "#slider-range" ).slider( "values", 0 ) +
       " - ₹" + $( "#slider-range" ).slider( "values", 1 ));

    /*----------------------------------------
        Countdown
    ----------------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
        });
    });

    /*----------------------------------------
        Popup Image
    ----------------------------------------*/
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });



    // Convert GBP (£) to INR (₹) function
    function convertGBPtoINR(gbpAmount) {
        const exchangeRate = 105;  // Example exchange rate: 1 GBP = 105 INR
        if (isNaN(gbpAmount)) {
            return 0;  // Return 0 if the value is invalid (NaN)
        }
        const inrAmount = gbpAmount * exchangeRate;
        return inrAmount.toFixed(2);
    }

    // Update product price and cart totals
    function updateCartCurrency() {
        // Convert all GBP amounts to INR
        $('.product-price').each(function () {
            const gbpText = $(this).text();
            const gbpAmount = parseFloat(gbpText.replace('£', '').trim());
            if (!isNaN(gbpAmount)) {
                const inrAmount = convertGBPtoINR(gbpAmount);
                $(this).text('₹' + inrAmount); // Update price with INR symbol
            }
        });

        // Update subtotal and total with INR symbol
        updateCartTotal();
    }

    // Update cart totals (subtotal and total)
    function updateCartTotal() {
        let cartSubtotal = 0;

        $('.cart-item').each(function () {
            const gbpText = $(this).find('.product-price').text();
            const gbpAmount = parseFloat(gbpText.replace('£', '').trim());
            const inrAmount = convertGBPtoINR(gbpAmount);
            cartSubtotal += parseFloat(inrAmount);  // Accumulate subtotal in INR
        });

        // Ensure subtotal is a valid number before updating
        if (!isNaN(cartSubtotal)) {
            $('.cart-subtotal').text('Subtotal: ₹' + cartSubtotal.toFixed(2));
        } else {
            $('.cart-subtotal').text('Subtotal: ₹0.00');
        }

        // Shipping cost (example: ₹70)
        const shippingCost = 2995;
        const totalAmount = cartSubtotal + shippingCost;

        // Ensure total is a valid number before updating
        if (!isNaN(totalAmount)) {
            $('.total-amount').text('Total: ₹' + totalAmount.toFixed(2));
        } else {
            $('.total-amount').text('Total: ₹0.00');
        }
    }

    $(document).ready(function () {
        updateCartCurrency();  // Call the function to update all prices when the page loads
    });

})(jQuery);
// Ensure that the document is fully loaded before running the script
$(document).ready(function () {
    // Get references to the button and message container
    const placeOrderButton = document.getElementById('placeOrderButton');
    const orderMessage = document.getElementById('orderMessage');

    // Add event listener for button click
    placeOrderButton.addEventListener('click', function() {
        // Hide the button (optional)
        placeOrderButton.style.display = 'none';

        // Show the order placed message
        orderMessage.style.display = 'block';
    });
});
