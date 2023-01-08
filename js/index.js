/* Tab navbar */

function openPage(pageName) {
  tabcontent = document.getElementsByClassName("tabcontent");
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* navBar responsive*/
let buttonNav = document.querySelectorAll(".tabcontent");

if (window.screenX <= 600) {
  console.log("estoy en pantalla pequeña");
  buttonNav.addEventListener(
    "click",
    (hideNav = () => {
      buttonNav.style.display = "none";
    })
  );
}

/*Galeria*/

const images = document.querySelectorAll(".gallery__item img");
let imgIndex;
let imgSrc;
// get images src onclick
images.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    //run modal function
    imgModal(imgSrc);
    //index of the next image
    imgIndex = i;
  });
});
//creating the modal
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add modal to the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  //creating the close button
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fa-solid fa-x closeBtn");
  //close function
  closeBtn.onclick = () => {
    modal.remove();
  };
  //next and previous buttons
  const prevBtn = document.createElement("i");
  prevBtn.setAttribute("class", "fa-solid fa-chevron-left fa-2x prevBtn");
  // change the src of current image to the src of pevious image
  prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg());
  };
  const nextBtn = document.createElement("i");
  nextBtn.setAttribute("class", "fa-solid fa-chevron-right fa-2x nextBtn");
  // change the src of current image to the src of next image
  nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg());
  };
  modal.append(prevBtn, newImage, closeBtn, nextBtn);
};
//next image function
let nextImg = () => {
  imgIndex++;
  //check if it is the the last image
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  //return src of the new image
  return images[imgIndex].src;
};
//previous image function
let prevImg = () => {
  imgIndex--;
  console.log(imgIndex);
  //check if it is the first image
  if (imgIndex < 0) {
    imgIndex = images.length - 1;
  }
  //return src of previous image
  return images[imgIndex].src;
};
