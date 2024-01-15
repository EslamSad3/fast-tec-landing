

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

// footer
sr.reveal(".footer", { origin: "top" });
sr.reveal(".footer");