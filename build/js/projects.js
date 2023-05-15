const hamMenuBtn = document.getElementById("menu-btn");
const hamMenu = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");
const body = document.getElementsByName("body");
const mobileProjectsBtn = document.getElementById("mobileBtn");
const webProjectsBtn = document.getElementById("webBtn");
const webProjects = document.getElementById("web");
const mobileProjects = document.getElementById("mobile");
let projectView = "mobile";

hamMenuBtn.addEventListener("click", () => {
  hamMenuBtn.classList.toggle("open");
  hamMenu.classList.toggle("hidden");
  hamMenu.classList.toggle("flex");
});

function onHover(projectNum) {
  if (projectView === "mobile") {
    let projectBtn = document.getElementById("projectBtn" + projectNum);
    let projectDet = document.getElementById("projectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  } else {
    let projectBtn = document.getElementById("webProjectBtn" + projectNum);
    let projectDet = document.getElementById("webProjectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  }
}

function onHoverEnd(projectNum) {
  if (projectView === "mobile") {
    let projectBtn = document.getElementById("projectBtn" + projectNum);
    let projectDet = document.getElementById("projectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  } else {
    let projectBtn = document.getElementById("webProjectBtn" + projectNum);
    let projectDet = document.getElementById("webProjectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  }
}

mobileProjects.addEventListener("blur", () => {
  if (projectView === "mobile") {
    let projectBtn = document.getElementById("projectBtn" + projectNum);
    let projectDet = document.getElementById("projectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  } else {
    let projectBtn = document.getElementById("webProjectBtn" + projectNum);
    let projectDet = document.getElementById("webProjectDetails" + projectNum);
    projectBtn.classList.toggle("hidden");
    projectBtn.classList.toggle("flex");
    projectDet.classList.toggle("hidden");
    projectDet.classList.toggle("flex");
  }
});

mobileProjectsBtn.addEventListener("click", () => {
  projectView = "mobile";
  mobileProjectsBtn.classList.add("shadow-xl");
  mobileProjectsBtn.classList.add("font-extrabold");
  webProjectsBtn.classList.remove("shadow-xl");
  webProjectsBtn.classList.remove("font-extrabold");
  mobileProjects.classList.replace("hidden", "flex");
  webProjects.classList.replace("flex", "hidden");
});

webProjectsBtn.addEventListener("click", () => {
  projectView = "web";
  webProjectsBtn.classList.add("shadow-xl");
  webProjectsBtn.classList.add("font-extrabold");
  mobileProjectsBtn.classList.remove("shadow-xl");
  mobileProjectsBtn.classList.remove("font-extrabold");
  mobileProjects.classList.replace("flex", "hidden");
  webProjects.classList.replace("hidden", "flex");
});
