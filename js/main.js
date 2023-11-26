document.addEventListener("DOMContentLoaded", function () {
  let mobileNav = document.querySelector(".mnav");
  let closeBtn = document.querySelector(".mnav__close-btn");
  let closeBtnIcon = document.querySelector(".mnav__close-btn-icon");

  const navOpenClass = "left-0";
  const navCloseClass = "-left-[300px]";
  const arrowLeftClass = "ri-arrow-left-s-line";
  const arrowRightClass = "ri-arrow-right-s-line";

  closeBtn.addEventListener("click", () => {
    console.log("clicked");
    if (mobileNav.classList.contains(navCloseClass)) {
      mobileNav.classList.toggle(navOpenClass);
      closeBtnIcon.classList.toggle(arrowLeftClass);
      closeBtnIcon.classList.toggle(arrowRightClass);
    }
  });
});

// scroll reveal

const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 300,
});

// hero
sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".hero__image");

// about
sr.reveal(".stats__item", {
  origin: "top",
  delay: 300,
  distance: "100px",
  interval: 100,
});

// services
sr.reveal(".services");
sr.reveal(".services__top");
sr.reveal(".services__item", {
  origin: "bottom",
  delay: 300,
  distance: "100px",
  interval: 100,
});


// download
sr.reveal(".download", { origin: "top" });
sr.reveal(".download__text");

// contact
sr.reveal(".contact", { origin: "top" });
sr.reveal(".contact");