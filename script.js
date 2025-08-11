

function homePageAnimation() {
    gsap.set(".scalem",{
    scale:3
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        // pin: true
    }

})
 tl
 .to(".video-div", {
    "--clip": "0%",
    ease: "power2",

},'home')

.to(".scalem", {
    scale: 1,
    ease: "power2"
    
},'home')
.to(".lft", {
    x: "-10%",
    ease: "power2"

},'home1')
.to(".rgt", {
    x: "0%",
    ease: "power2"

},'home1');
}
function slideAnimation(){
gsap.to(".slides",{
    scrollTrigger: {
        trigger: ".real",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        // markers: true,
        // pin: true
    },
    xPercent: -100,
    ease: "power4",
})
   let counter = { value: 0 };
gsap.to(counter, {
        value: 26, // target number
        scrollTrigger: {
            trigger: ".real", // same trigger or adjust as needed
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
        },
        onUpdate: () => {
            document.querySelector(".num").textContent = Math.floor(counter.value);
        }
    });
}


const listItems = document.querySelectorAll(".listelem");

function teamAnimation(){
listItems.forEach((elm)=>{
    elm.addEventListener("mousemove",(dets)=>{
        const timeline = gsap.timeline();
        timeline.to(elm.querySelector(".picture"),{
            opacity: 1,
            x: gsap.utils.mapRange( 0, window.innerWidth, -200, 200,dets.clientX),
            duration: 0.5
        },'a')
        .to(elm.querySelector(".upcolor"),{
            height: "100%",
            duration: 0.5
        },'a')
    })
    elm.addEventListener("mouseleave",()=>{
        const timeline = gsap.timeline();
        timeline.to(elm.querySelector(".picture"),{
            opacity: 0,
            duration: 0.5
        },'a')
        .to(elm.querySelector(".upcolor"),{
            height: "0%",
            duration: 0.5
        },'a')
    })
})}

let clutter=''
function paraAnimation(){
document.querySelectorAll(".textpara").forEach((elm1) => {
    let clutter = ""; // reset for each element
    
    elm1.textContent.split('').forEach((elm) => {
        // Optional: keep spaces wrapped separately
        if (elm === ' ') {
            clutter += `<span>&nbsp;</span>`;
        } else {
            clutter += `<span>${elm}</span>`;
        }
    });

    elm1.innerHTML = clutter; // update the current element, not the first one
});


gsap.set(".textpara span", {
    opacity: 0.1
});

gsap.to(".textpara span", {
    scrollTrigger: {
        trigger: ".para", // parent container
        start: "top 50%",
        end: "bottom 90%",
        scrub: 0.2,
        // markers: true
    },
    opacity: 1,
    ease: "power2",
    stagger: 0.05 // delay between each letter
});

}


function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}



function capsuleAnimation(){
    

    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".lstrght",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
            // markers: true
        },
        y: 0,
        
    });
}
loco();
function body(){
document.querySelectorAll(".section").forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
            const color = section.dataset.color;
            document.body.setAttribute("theme", color);
        },
        onEnterBack: () => {
            const color = section.dataset.color;
            document.body.setAttribute("theme", color);
        }
    });
});
}
function buttonAnimation() {
    const buttons = document.querySelectorAll(".masker span");

    buttons.forEach((button) => {
        let clutter = '';

        // Wrap each character in span
        button.textContent.split('').forEach((char) => {
            clutter += `<span class="inline-block">${char === " " ? "&nbsp;" : char}</span>`;
        });

        button.innerHTML = clutter;
        const letters = button.querySelectorAll("span");

        button.parentElement.addEventListener("mouseenter", () => {
            // Step 1: Move letters up
            gsap.to(letters, {
                y: "-100%",
                opacity: 0,
                stagger: 0.03,
                duration: 0.5,
                ease: "power4.inOut",
                onComplete: () => {
                    // Step 2: Bring them back from bottom
                    gsap.fromTo(
                        letters,
                        { y: "100%", opacity: 0 },
                        {
                            y: "0%",
                            opacity: 1,
                            stagger: 0.03,
                            duration: 0.5,
                            ease: "power4.inOut",
                            onComplete: () => {
                                // Reset position
                                gsap.set(letters, { clearProps: "all" });
                            }
                        }
                    );
                }
            });
        });
    });
}

function circle(){gsap.to(".circle-text", {
  rotation: 360,
  transformOrigin: "50% 50%",
  duration: 20,
  ease: "linear",
  repeat: -1
});
}

function footerlink() {
    const containers = document.querySelectorAll(".icon-container");

    containers.forEach((container) => {
        const label = container.querySelector(".link");

        // Start hidden
        gsap.set(label, { opacity: 0, x: -100, display: "none" });

        container.addEventListener("mouseenter", () => {
            gsap.set(label, { display: "inline-block",
                duration: 2,
                ease: "power2"
             });
            gsap.to(label, {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power2"
            });
        });

        container.addEventListener("mouseleave", () => {
            gsap.to(label, {
                opacity: 0,
                x: -100,
                duration: 1,
                ease: "power2.in",
                onComplete: () => gsap.set(label, { display: "none" })
            });
        });
    });
}



body();
footerlink();
buttonAnimation();
circle();
homePageAnimation();
slideAnimation();
teamAnimation();
paraAnimation();
capsuleAnimation();
