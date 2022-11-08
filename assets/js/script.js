// SearchForm Section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
}

$(document).ready(function(){

     //owl owlCarousel
     $('.owl-carousel').owlCarousel({
        margin: 5,
        mavigation: true,
        loop: true,
        autoplay: true,
        autopplayTimeOut: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav : false
            }
        }
     });
});