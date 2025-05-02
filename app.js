const widthDisplay = document.getElementById('widthDisplay');

function updateWidth() {
  widthDisplay.textContent = `عرض صفحه: ${window.innerWidth}px`;
}

window.addEventListener('resize', updateWidth);
updateWidth();





let listPic = document.querySelector(".baner__slider-items-thumbnail");
let sliderItems = document.querySelector(".baner__slider-items");
let btnNext = document.getElementById("baner__btnNext");
let btnPrev = document.getElementById("baner__btnPrev");
let all = Array.from(document.querySelectorAll(".baner__slider-item"));
let items = Array.from(document.querySelectorAll(".baner__slider-item-thumbnail"));
let n = all.length;

let h = [0, 1, 2, 3, 4];

btnNext.addEventListener("click", () => {

all.forEach((item , index) => {
  item.classList.remove("activNext", "activPrev");
  item.style.zIndex = 0;
});

  sliderItems.children[0].classList.add("activNext");
  sliderItems.appendChild(sliderItems.firstElementChild);



  items.forEach((item, index) => {
    item.classList.remove("moveLeft", "moveRight");
});



  listPic.children[0].classList.add("moveRight");
  listPic.classList.add("moveWidth");

  listPic.appendChild(listPic.firstElementChild);
  btnNext.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth" , "moveWidthBack");
    btnNext.disabled = false;
  }, 1000)

});

// /////////////////////prev

btnPrev.addEventListener("click", () => {

  all.forEach((item , index) => {
    item.classList.remove("activNext", "activPrev");
    item.style.zIndex = 0;
  });

    sliderItems.insertBefore(sliderItems.lastElementChild, sliderItems.firstElementChild);
    sliderItems.children[0].classList.add("activPrev");
    sliderItems.children[0].style.zIndex = 5;

  items.forEach((item , index) => {
    item.classList.remove("moveLeft" , "moveRight");
  });

  
  listPic.classList.add("moveWidthBack");

  listPic.insertBefore(listPic.lastElementChild, listPic.firstElementChild);
  listPic.children[0].classList.add("moveLeft");

  btnPrev.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth" , "moveWidthBack");
    btnPrev.disabled = false;
    list.children[0].style.zIndex = -1;
  }, 1000)
  setTimeout(() => {
    list.children[0].style.zIndex = -1;
  }, 500)

});

/////////////////////
//  banerSecond ///

const listSecond = document.querySelector(".banerSecond__slider-items");
const btnNextSecond = document.getElementById("banerSecond__btnNext");
const btnPrevSecond = document.getElementById("banerSecond__btnPrev");
const itemsSecond = Array.from(document.querySelectorAll(".banerSecond__slider-item"));

let positions = [0, 1, 2, 3, 4];

updateClassesSecond();

function updateClassesSecond() {
  itemsSecond.forEach((item, index) => {

    item.className = "banerSecond__slider-item";
    item.classList.add(`position-${positions[index]}`);

  });
}

btnNextSecond.addEventListener("click", () => {
  positions.unshift(positions.pop());
  updateClassesSecond();

});

btnPrevSecond.addEventListener("click", () => {
  positions.push(positions.shift());
  updateClassesSecond();
});

// END banerSecond ///