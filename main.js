import "normalize.css";
import "./style.css";

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const mainNavLinks = document.querySelector(".main__nav-links");
const projectsSection = document.querySelector(".projects-section");

const slidesBtn = document.querySelector(".slides-btn");
const boxBtn = document.querySelector(".box-btn");
const dayNightBtn = document.querySelectorAll(".day-night-btn");

const msgOpenBtns = document.querySelectorAll(".msg-open-btn");
const msgCloseBtn = document.querySelector(".msg-close-btn");
const msgSection = document.querySelector(".msg-section");

const projects = document.querySelector(".projects");
const project = document.querySelectorAll(".project");
const msgStarBtns = document.querySelectorAll(".msg-star-btn");

msgOpenBtns.forEach((msgOpenBtn) => {
  msgOpenBtn.addEventListener("click", () => {
    msgSection.classList.add("msg-section-display");
    header.classList.add("opacity");
    mainNavLinks.classList.add("opacity");
    projectsSection.classList.add("opacity");
  });
});

msgCloseBtn.addEventListener("click", () => {
  msgSection.classList.remove("msg-section-display");
  header.classList.remove("opacity");
  mainNavLinks.classList.remove("opacity");
  projectsSection.classList.remove("opacity");
});

msgStarBtns.forEach((starBtn) => {
  starBtn.addEventListener("click", () => {
    const star = starBtn.firstElementChild;
    if (star.getAttribute("class").charAt(2) === "r") {
      star.classList.remove("far");
      star.classList.remove("fa-star");
      star.classList.add("fa");
      star.classList.add("fa-star");
    } else {
      star.classList.remove("fa");
      star.classList.remove("fa-star");
      star.classList.add("far");
      star.classList.add("fa-star");
    }
  });
});

dayNightBtn.forEach((singleBtn) => {
  singleBtn.addEventListener("click", () => {
    document.body.classList.toggle("night");
  });
});

slidesBtn.addEventListener("click", () => {
  slidesBtn.classList.add("nav-link-active");
  boxBtn.classList.remove("nav-link-active");
  projects.classList.add("projects-slides");
  project.forEach((project) => {
    project.classList.add("project-grid");
  });
});
boxBtn.addEventListener("click", () => {
  slidesBtn.classList.remove("nav-link-active");
  boxBtn.classList.add("nav-link-active");
  projects.classList.remove("projects-slides");
  project.forEach((project) => {
    project.classList.remove("project-grid");
  });
});
