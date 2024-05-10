var t1=gsap.timeline();
t1.to(".element,.myname",{
    height:0,
    duration:4,
    
    ease:Expo.easeInOut
})

t1.to(".element2",{
    height:0,
    duration:1,
    delay:-2,
    ease:Expo.easeInOut
})

t1.to(".element3",{
    height:0,
    duration:.8,
    delay:-1.7,
    ease:Expo.easeInOut
})

