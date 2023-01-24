/* Tab navbar */

const hamburguer = document.querySelector(".hamburguer");
const navLink = document.querySelector(".nav__link");

hamburguer.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
navLink.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

function openPage(pageName) {
  tabcontent = document.getElementsByClassName("tabcontent");
  var i, tabcontent;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}

document.getElementById("defaultOpen").click();

/*Galeria*/

const images = document.querySelectorAll(".gallery__item img");
let imgIndex;
let imgSrc;
images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
    imgIndex = i;
  });
});
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".main").append(modal);
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fa-solid fa-x closeBtn");
  closeBtn.onclick = () => {
    modal.remove();
  };

  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fa-solid fa-chevron-left fa-2x prevBtn");
  prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg());
  };

  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fa-solid fa-chevron-right fa-2x nextBtn");
  nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg());
  };
  modal.append(prevBtn, newImage, closeBtn, nextBtn);
};

let nextImg = () => {
  imgIndex++;
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  return images[imgIndex].src;
};

let prevImg = () => {
  imgIndex--;
  console.log(imgIndex);
  if (imgIndex < 0) {
    imgIndex = images.length - 1;
  }
  return images[imgIndex].src;
};
