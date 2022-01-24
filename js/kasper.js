// Animate Our Skills Section & Animate Stats Section:
let skills = document.querySelector(".skills");
let langs = document.querySelectorAll(".prog span");

console.log(langs[3]);

let myStats = document.querySelector(".stats");
let stats = document.querySelectorAll(".number");
let started = false; //Function started ? No

window.onscroll = function () {
  //Our Skills
  if (
    window.scrollY >= skills.offsetTop - 200 &&
    window.scrollY <= skills.offsetTop + 200
  ) {
    langs.forEach((lang) => (lang.style.width = lang.dataset.progress));
  } else {
    langs.forEach((lang) => (lang.style.width = "0px"));
  }
  //Stats Section
  if (window.scrollY >= myStats.offsetTop - 200) {
    if (!started) {
      stats.forEach((stat) => startCount(stat));
      started = true;
    }
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
