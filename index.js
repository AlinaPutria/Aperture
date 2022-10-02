// loader
let maskL = document.querySelector('.maskL');
window.addEventListener('load', () => {
  maskL.classList.add('hide');
  setTimeout(() => {
    maskL.remove();
  }, 1000)
});
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle("sticky", window.scrollY > 0);

});
// NAV ANIMATION AFTER
let links = document.querySelectorAll('.header-navigation-list-ul-link'),
    ind = document.querySelector('.indicator');
let target;

links.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        target = e.target;
        ind.style.width = `${target.offsetWidth}px`;
        ind.style.left = `${target.offsetLeft}px`;
    });
});

window.addEventListener('resize', (e) => {
    ind.style.width = `${target.offsetWidth}px`;
    ind.style.left = `${target.offsetLeft}px`;
});
// BURGER
const burger = document.getElementById('burger');
const burgerMenu = document.getElementById('burger-navigation-list');
burger.addEventListener('click', toggleNav);
function toggleNav() {
	console.log('clicked');
	burger.classList.contains('is-active') ? burger.classList.remove('is-active') : burger.classList.add('is-active');
	burgerMenu.classList.contains('active') ? burgerMenu.classList.remove('active') : burgerMenu.classList.add('active');
}
// ANIMATION
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
// .....................
//Get the button:
const mybutton = document.getElementById("myBtn");
const rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
mybutton.addEventListener("click", scrollToTop);
// 
// SLIDER
const swiper_home = new Swiper('.home-swiper', {
  speed: 1000,
  slidesPerView: 5,
  autoplay: {
    delay: 7000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    }
  }
});
// .....................
