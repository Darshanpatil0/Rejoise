

function scroll ()  {

    const scroll = new LocomotiveScroll({
        el: document.querySelector('.mine'),
        smooth: true
    });
}


function videoconanimation() {
    
    
    (function videoconanimation() {
        var videocon = document.querySelector("#video-contener");
        var playbtn = document.querySelector("#play");
        
        gsap.registerPlugin('left'); // Corrected the property name to 'left'
        
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        });
    });
    
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videocon.addEventListener("mousemove", function (dest) {
        gsap.to(playbtn, {
            left: dest.x - 30,
            top: dest.y - 30
        });
    });
})();

function lodiganimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5, 
        duration: 0.9,
        stagger: 0.2
    });

    gsap.from("#page1 #video-contener", {
        scale: 0.9,
        opacity: 0,
        delay: 1,
        duration: 0.3,
    });
}

lodiganimation();


document.addEventListener("mousemove", function(event) {
    gsap.to("#courue", {
        left: event.clientX,
        top: event.clientY,
        
    });
});

document.querySelectorAll(".child").forEach(function(element) {
    element.addEventListener("mouseenter", function() {
        gsap.to("#courue", {
            transform: "translate(-50%, -50%) scale(1)"
        });
    });
    
    element.addEventListener("mouseleave", function() {
        gsap.to("#courue", {
            transform: "translate(-50%, -50%) scale(0)"
            
        });
    });
});

}


    scroll()
    videoconanimation()