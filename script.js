$(function(){
    //this code will execute after the DOM is loaded
    var carouselList = $("#carousel ul");

    changeSlide()
    {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide)
    };
    setTimeout(changeSlide, 3000); //after 3 seconds will change the slide once
    setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
    moveFirstSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    };


});



/**
 * Created by Coshaleck on 18.05.2017.
 */
