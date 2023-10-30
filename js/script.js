//Icon menu bar

let menuIcon = document.querySelector("#menu_icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Sticky header here
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove navbar

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Change settings for screens with a width of 768px and above
        settings: {
          slidesToShow: 1, // Display 1 slides on screens with a width of 768px and above
        }
      }
      // Add more breakpoints and settings as needed
    ],
    prevArrow: '<button class="slick-prev"> < </button>',
    nextArrow: '<button class="slick-next"> > </button>',

  });
});


//DarkMode

let darkMode = document.querySelector("#darkMode-Icon");

darkMode.onclick = () => {
  darkMode.classList.toggle("bxs-sun");
  document.body.classList.toggle("dark-mode");
};

//Scroll Reveal

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home_content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home_banner img,.abt-content, .service_cont, .contacts form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".abt_img img", { origin: "left" });

//Contact form here
let form = document.querySelector(".contacts form");

function sendMail(e) {
  e.preventDefault();

  var params = {
    name: document.querySelector(".contacts form .name").value,
    email: document.querySelector(".contacts form .email").value,
    message: document.querySelector(".contacts form .msg").value,
  };

  const serviceID = "service_sk2nd6p";
  const templateID = "template_0vjlz26";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      document.querySelector(".contacts form .name").value = "";
      document.querySelector(".contacts form .email").value= "";
      document.querySelector(".contacts form .msg").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

form.addEventListener("submit", sendMail);

//typed js

const typed = new Typed(".multiple",{
  strings: ['Frontend Developer', 'Youtuber', 'Writer','Photographer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
})
