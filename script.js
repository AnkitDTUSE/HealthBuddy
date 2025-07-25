// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// LocomotiveScroll instance
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  lerp: 0.04,
});

// Tell ScrollTrigger to use LocomotiveScroll as the scroller
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// Update ScrollTrigger on scroll
scroll.on("scroll", ScrollTrigger.update);

// Refresh both LocomotiveScroll and ScrollTrigger after page load
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

window.addEventListener("mousemove", (event) => {
  gsap.to(".customCursor", {
    x: event.x,
    y: event.y,
    ease: "back.out",
  });
});

let splitter = () => {
  let arr = document.querySelectorAll(".text");
  arr.forEach((ele) => {
    let sentence = ele.textContent;
    let splittedText = sentence.split("");
    let clutter = "";
    splittedText.forEach((letter) => {
      if (letter === " ") {
        clutter += "&nbsp;";
      } else {
        clutter += `<span >${letter}</span>`;
      }
    });
    ele.innerHTML = clutter;
  });
};
splitter();
gsap.to(".hero span", {
  duration: 1,
  y: 0,
  stagger: 0.03,
});
gsap.to(".banner span", {
  duration: 0.7,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".banner",
    start: "top 90%",
    scroller: ".main",
  },
});
gsap.to(".fourthText span", {
  duration: 0.7,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".fourthText",
    start: "top 60%",
    scroller: ".main",
  },
});
gsap.to(".circleText span", {
  duration: 0.7,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".circleText",
    start: "top 80%",
    scroller: ".main",
  },
});
gsap.to(".ring", {
  rotate: -360,
  duration: 14,
  ease: "power3.Out",
  scrollTrigger: {
    trigger: ".circleAnimation",
    scroller: ".main",
    start: "top 0%",
    end: "top -150%",
    pin: true,
    scrub: 5,
  },
});
gsap.to(".fifthText span", {
  duration: 0.7,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".fifthText",
    start: "top 60%",
    scroller: ".main",
  },
});
gsap.to(".fifthSecText span", {
  duration: 0.4,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".fifthSecText",
    start: "top 60%",
    scroller: ".main",
  },
});
gsap.to(".sixthText span", {
  duration: 0.4,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".sixthText",
    start: "top 60%",
    scroller: ".main",
  },
});
gsap.from(".sixth img", {
  filter: "blur(4px)",
  scale: 0.2,
  duration: 7,
  scrollTrigger: {
    trigger: ".sixth img",
    scroller: ".main",
    start: "top 100%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.to(".sevenText span", {
  y: 0,
  duration: 0.4,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".sevenText",
    scroller: ".main",
    start: "top 60%",
  },
});
gsap.to(".sevenLeft", {
  y: -80,
  duration: 2,
  scrollTrigger: {
    trigger: ".sevenLeft",
    scroller: ".main",
    start: "top 0%",
    end: "top -100% ",
    scrub: true,
    pin: true,
  },
});
gsap.to(".eightText span", {
  y: 0,
  duration: 0.4,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".eightText",
    scroller: ".main",
    start: "top 60%",
  },
});
let tl = gsap.timeline();
let tl3 = gsap.timeline();
document.querySelectorAll(".waitlistBlack").forEach((ele) => {
  ele.addEventListener("click", () => {
    tl.to(".overlay", {
      duration: 0.6,
      autoAlpha: 1,
      backgroundColor: "#00000066",
      stagger: 0.01,
    }).to(".waitListMenu", {
      x: 0,
      onComplete: () => {
        console.log("reach");
      },
    });
  });
});
document.querySelectorAll(".arrow").forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    gsap.to(".arrow", {
      scale: 0.9,
      ease: "back.out",
    });
    tl3
      .to(".arrow1", {
        x: 40,
        y: -40,
        duration: 0.4,
      })
      .to(".arrow1", {
        x: 0,
        y: 0,
      });
  });
  ele.addEventListener("mouseleave", () => {
    gsap.to(".arrow", {
      scale: 1,
    });
    tl3
      .to(".arrow1", {
        x: -40,
        y: 40,
        duration: 0.4,
      })
      .to(".arrow1", {
        x: 0,
        y: 0,
      });
  });
});

let whiteButtons = document.querySelectorAll(".waitlistWhite");
let whiteArrows = document.querySelectorAll(".whiteArrow");
whiteButtons.forEach((element) => {
  element.addEventListener("click", () => {
    tl.to(".overlay", {
      duration: 0.6,
      autoAlpha: 1,
      backgroundColor: "#00000099",
      stagger: 0.01,
    }).to(".waitListMenu", {
      x: 0,
    });
  });
});
whiteArrows.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    gsap.to(".whiteArrow", {
      scale: 0.9,
      ease: "back.out",
    });
    tl3
      .to(".whiteArrow1", {
        x: 50,
        y: -50,
        duration: 0.4,
      })
      .to(".whiteArrow1", {
        x: 0,
        y: 0,
      });
  });
  ele.addEventListener("mouseleave", () => {
    gsap.to(".whiteArrow", {
      scale: 1,
    });
    tl3
      .to(".whiteArrow1", {
        x: -40,
        y: 40,
        duration: 0.4,
      })
      .to(".whiteArrow1", {
        x: 0,
        y: 0,
      });
  });
});
let tl2 = gsap.timeline();
document.querySelector(".crossButton").addEventListener("click", () => {
  tl2
    .to(".waitListMenu", {
      x: 1200,
      duration: 0.6,
      stagger: 0.01,
    })
    .to(".overlay", {
      autoAlpha: 0,
    });
});
gsap.to(".ninthRightContent", {
  y: -30,
  duration: 1,
  scrollTrigger: {
    trigger: ".ninthRightContent",
    scroller: ".main",
    start: "top 50%",
    scrub: true,
  },
});
gsap.to(".ninthText span", {
  duration: 0.7,
  y: 0,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".ninthText",
    start: "top 80%",
    scroller: ".main",
  },
});
gsap.from(".tenth", {
  scale: 0.5,
  duration: 3,
  ease: "power.out",
  scrollTrigger: {
    trigger: ".tenth",
    scroller: ".main",
    start: "top 100%",
    scrub: 3,
    end: "top 60%",
  },
});
gsap.to(".tenthText span", {
  y: 0,
  duration: 0.4,
  stagger: 0.02,
  scrollTrigger: {
    trigger: ".tenthText",
    scroller: ".main",
    start: "top 60%",
  },
});
gsap.to(".eleventhLeft", {
  y: -80,
  duration: 2,
  scrollTrigger: {
    trigger: ".eleventh",
    scroller: ".main",
    start: "top 0%",
    end: "top -80% ",
    scrub: true,
    pin: ".eleventhLeft",
  },
});

let boxes = document.querySelectorAll(".eleventhBox");
console.log(boxes);
boxes.forEach((box, i) => {
  box.classList.add(`box${i}`);
  box.innerHTML += `<p id=para${i}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime soluta vitae labore vel provident nihil laudantium quasi aut inventore assumenda eius saepe sequi laborum atque, ducimus iusto non autem eligendi. Sapiente a unde, molestias quod omnis saepe at magni. </p>`;
});

var tl4 = gsap.timeline();
var tl5 = gsap.timeline();
let buttons = document.querySelectorAll("#headButt");
buttons.forEach((button, i) => {
  button.classList.add(`headbutt${i}`);
  const id = `#para${i}`;
  button.addEventListener("click", (event) => {
    console.log("clicked")
    if (button.className === `headbutt${i}`) {
      gsap.to(`.headbutt${i}`, {
        rotate: 45,
      });

      tl4
        .to(`.box${i}`, {
          height: "100px",
        })
        .to(id, {
          y: 35,
        });
      button.className += "use";
      console.log(button.className);
    } 
    else if (button.className === `headbutt${i}use`) {
      console.log('hello',button.className)
      gsap.to(`.${button.className}`, {
        rotate:0,
        onComplete:()=>{
          console.log("here")
        }
      });
      tl5
        .to(id, {
          y: 100,
          duration:0.8,
        })
        .to(`.box${i}`, {
          height: "50px",
        });
      button.className = `headbutt${i}`;
    }
  });
});
