$(function() {
    
    var appendNumber = 1;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        // Disable preloading of all images
        preloadImages: false,
        // Enable lazy loading
        lazyLoading: true,
        // enable lazy loading for the closest slides images (for previous and next slide images)
        lazyLoadingInPrevNext: true,
        loop: true,
        autoplay: 5000
        
    });
})