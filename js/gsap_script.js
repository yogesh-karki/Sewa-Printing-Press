gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scrollContainer"),
    smooth: true
  });


// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scrollContainer", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scrollContainer").style.transform ? "transform" : "fixed"
});






gsap.from('ul.sewa-navigation li', {
    opacity: 0,
    yPercent: -100,
    stagger: 0.1,
    duration: 0.5,
    
});

var logoAnimation = gsap.timeline();

logoAnimation    
    .from('.logo img', {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.out",
    })

    .from('.logo h5', {
        yPercent: 100,
        opacity: 0,
        duration: 0.5,
    })

    .from('.logo p' ,{
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
    }, "-=0.1" );

var bannerAnimation = gsap.timeline();

bannerAnimation
    .from('.banner-text', {
        opacity:0,
        delay: 1,
        duration: 2,
        ease: "slow(0.7, 0.7, false)",
    })

    .from('.banner-text h1', {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        yPercent:100,
        
    },"-=2" )

    .from('.bsm-im', {
        yPercent: 60,
        duration: 0.8,
        opacity: 0,
        ease: "power1.inOut",
    },"-=0.8")

    .from('.big-img', {
        yPercent: 60,
        duration: 1,
        opacity: 0,
        ease: "power1.inOut",

    },"-=1")

    .from('.bsm-half', {
        yPercent: 80,
        duration: 0.8,
        opacity: 0,
        ease: "power1.inOut",
    },"-=1.5");



const secTitle = document.querySelectorAll ('.sech h3 ');
secTitle.forEach ((head) => {
    gsap.from (head, {
            scrollTrigger: {
                trigger: head.querySelector ('.sech h3 span'),
                toggleActions: 'play reset restart reverse',
                start: 'top center+=35%',
                scroller: '.scrollContainer',
                
            },
            opacity: 0,
            yPercent: 100,
            duration: 0.8,
            
        });
});

const secPara = document.querySelectorAll('.secp p ')
secPara.forEach((para) => {
    gsap.from(para, {
        scrollTrigger: {
            trigger: para.querySelector ('.secp p span'),
            toggleActions: 'play reset restart reverse',
            start: 'top center+=35%',
            scroller: '.scrollContainer',

        },

        yPercent: 100,
        duration: 0.8,
        
    });
});



gsap.from('.about p', {
    y: 50,
    opacity: 0,
    duration: 0.6,

    scrollTrigger: {
        trigger: '.sech h3',
        start: "top center+=25%",
        scroller: '.scrollContainer',
        toggleActions: 'play reset restart reverse',
     

    }

});


gsap.from('.client-slider .swiper-slide', {
    opacity: 0,
    stagger: 0.1,
    duration: 0.8,

    scrollTrigger: {
        trigger: '.client-slider',
        start: 'top center+=20%',
        scroller: '.scrollContainer',
       
        
    }
})

gsap.from('.pr-sing', {
    opacity: 0,
    stagger: 0.2,
    duration: 1,

    scrollTrigger: {
        trigger: '.prd-wrapper',
        start: 'top center+=20%',
        scroller: '.scrollContainer',
        
    }
});

gsap.from('.yel-btn', {

    yPercent: 100,
    ease: "none",
    duration: 0.5,

    scrollTrigger: {
        trigger: '.yel-btn',
        scroller: '.scrollContainer',
        start: 'top center+=45%',
        
    }
})


gsap.from('ul.serv-list li h3', {
    xPercent: -100,
    duration: 0.8,
    stagger: 0.3,

    scrollTrigger: {
        trigger: 'ul.serv-list li',
        scroller: '.scrollContainer',
        start: 'top center+=25%',
        toggleActions: 'play reset restart reverse',
    }
})

gsap.from('ul.sol-list li', {
    x: "-=200",
    duration: 2,
    ease: Linear.easeNone,

    scrollTrigger: {
        trigger: 'ul.sol-list',
        scroller: '.scrollContainer',
        start: 'top bottom',
        scrub: true,

    }

})


gsap.to('.clients .swiper-slide', {
    backgroundColor: '#1f1f1f',
    duration: 0.6,
    scrollTrigger: {
        trigger: '.clients',
        start: 'bottom-=10% center',
        scroller: '.scrollContainer',
        toggleActions: 'play reset restart reverse',


    }
})


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();






