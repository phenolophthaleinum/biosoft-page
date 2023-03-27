gsap.to(".stripe", {
    duration: 1,
    scale: 0, 
    opacity: 0, 
    // y: 60, 
    ease: "power1.inOut",
    // delay: 3,
    // yoyo: true, 
    // repeat: -1,
    transformOrigin: "center center",
    stagger: {
        each: 0.1,
        yoyo: true, 
        repeat: -1,
        grid: "auto",
        from: "0"
    }
});

// const el = Array.from(document.querySelectorAll(".accordion-header")).map(elem => {return elem.children[0]})

// // .forEach(elem => {elem.querySelector("button")})
// // const buttons = el.forEach((elem) => { elem.querySelector("button") })
// console.log(el)



// el.addEventListener("click", () => {
//     el.scrollIntoView({ behavior: "smooth", block: "start"});
// })

// Array.from(document.querySelectorAll(".accordion-header")).forEach(elem => {
//     elem_sib = elem.nextElementSibling;
//     target = elem_sib.children[0];
//     console.log(elem_sib);
//     elem.addEventListener("click", () => {
//         if (target.getBoundingClientRect().bottom > window.innerHeight) {
//             // target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
//             target.scrollIntoView(false);
//         }
//     })
// })

// Array.from(document.querySelectorAll(".accordion-header")).forEach(elem => {
//     elem_sib = elem.nextElementSibling;
//     target = elem_sib.children[0];
//     console.log(elem_sib);
//         if (target.getBoundingClientRect().bottom > window.innerHeight) {
//             // target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
//             target.scrollIntoView(false);
//             console.log("is it even?")
//         }
// });

const accordionElement = document.getElementById('accordionFlushExample');

accordionElement.addEventListener('shown.bs.collapse', function (event) {
  // code to run after accordion item is shown
//   console.log('Accordion item shown!');
//   console.log(event.target.previousElementSibling);
  event.target.previousElementSibling.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});

});

accordionElement.addEventListener('hide.bs.collapse', function (event) {
    // code to run after accordion item is shown
  //   console.log('Accordion item shown!');
  //   console.log(event.target.previousElementSibling);
    scrollTo({top: 100, behavior: "smooth"});
    // document.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest"});
  
});