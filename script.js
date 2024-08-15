const hamMenu = document.querySelector("#ham-menu");
const overlay = document.querySelector("#overlay");
const button = document.querySelector("#toggle");
button.addEventListener("click", function () {
    hamMenu.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    hamMenu.classList.add('animate-slideIn');
    hamMenu.classList.remove('animate-slideOut');
});



overlay.addEventListener('click', () => {
    hamMenu.classList.add('animate-slideOut'); // Add class to slide out
    hamMenu.classList.remove('animate-slideIn');
    overlay.classList.toggle('hidden');
    setTimeout(() => {
        hamMenu.classList.toggle('hidden');
    }, 500)
});
const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if(isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }

}

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');


setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);    

const dt= document.querySelectorAll("dt");
const dd= document.querySelector("dd");

dt.forEach((item)=>{

    item.addEventListener('click',()=>{
        const target = item.getAttribute('aria-controls');
        const num = Number(target.slice(4,5));
        console.log(num)    
        const targetElement=document.getElementById(target);
        targetElement.classList.toggle('hidden');

        const targetSymbol = document.querySelectorAll('#faq-section .fa-chevron-up');
        targetSymbol[num-1].classList.toggle('-rotate-180');
    })

})      


