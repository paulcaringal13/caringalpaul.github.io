// Sticky navbar
$(document).ready(function() {
    let lastScrollY = window.scrollY;
    
    $(window).on('scroll',function(){
        if (lastScrollY <= 50) {
            $(".sticky").removeClass("stickyadd");
        }
        else if(lastScrollY<=624){
            $(".sticky").addClass("stickyadd");
            $(".sticky").removeClass("hidesticky");
        }else if (lastScrollY > 624) {
            $(".sticky").removeClass("stickyadd");
            $(".sticky").addClass("hidesticky");
        }
        
        lastScrollY = window.scrollY;
    })
})