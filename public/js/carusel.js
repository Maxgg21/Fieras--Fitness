let swiper = new Swiper(".swiper", {
    effect:"coverflow",   
    grabCursor:true,
    centeredSlides:true,
    initialSlide: 2,
    speed: 600,
    prevenctClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
    }, 
    },
    pagination: {
        el: ".swiper-pagination",
    },
}
)