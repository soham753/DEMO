let background_img = document.querySelector(".bgimage");
let previous = document.querySelector(".p");
let next = document.querySelector(".n");
let image_no = 1;
let image_number = document.querySelectorAll(`.num`);
let background_image_path = `src/bg${image_no}.png`;
background_img.style.backgroundImage = `url('${background_image_path}')`;


function image_numbar_style_apply(num) {
  image_number[num].style.backgroundColor = "#FFC53A";
  image_number[num].style.borderRadius = `25px`;
  image_number[num].style.width = `40px`;
  image_number[num].style.height = `15px`;
}


function image_numbar_style_none(num) {
  image_number[num].style.backgroundColor = "#FFFFFF";
  image_number[num].style.borderRadius = `50%`;
  image_number[num].style.width = `10px`;
  image_number[num].style.height = `10px`;
}

let c = document.addEventListener("keydown",(e) => {
  if(e.keyCode ==39){
    image_no++;
    if (image_no == 6) {
      image_no = 1;
    }
    background_image_path = `src/bg${image_no}.png`;
    background_img.style.backgroundImage = `url('${background_image_path}')`;
    for (let i = 0; i < 5; i++) {
      if (i === image_no - 1) {
        image_numbar_style_apply(i);
      } else {
        image_numbar_style_none(i)
      }
    }
  }
  else if(e.keyCode ==37){
    image_no--;

  if (image_no == 0) {
    image_no = 5;
  }
  background_image_path = `src/bg${image_no}.png`;
  background_img.style.backgroundImage = `url('${background_image_path}')`;

  for (let i = 0; i < 5; i++) {
    if (i === image_no - 1) {
      image_numbar_style_apply(i);
    } else {
      image_numbar_style_none(i)
    }
  }
  }
})

image_numbar_style_apply(image_no - 1);

previous.addEventListener("click", function () {
  image_no--;

  if (image_no == 0) {
    image_no = 5;
  }
  background_image_path = `src/bg${image_no}.png`;
  background_img.style.backgroundImage = `url('${background_image_path}')`;

  for (let i = 0; i < 5; i++) {
    if (i === image_no - 1) {
      image_numbar_style_apply(i);
    } else {
      image_numbar_style_none(i)
    }
  }
});
next.addEventListener("click", function () {
  image_no++;
  if (image_no == 6) {
    image_no = 1;
  }
  background_image_path = `src/bg${image_no}.png`;
  background_img.style.backgroundImage = `url('${background_image_path}')`;
  for (let i = 0; i < 5; i++) {
    if (i === image_no - 1) {
      image_numbar_style_apply(i);
    } else {
      image_numbar_style_none(i)
    }
  }
});
setInterval(function () {
  image_no++;
  if (image_no == 6) {
    image_no = 1;
  }
  let background_image_path = `src/bg${image_no}.png`;
  background_img.style.backgroundImage = `url('${background_image_path}')`;
  for (let i = 0; i < 5; i++) {
    if (i === image_no - 1) {
      image_numbar_style_apply(i);
    } else {
      image_numbar_style_none(i)
    }
  }
}, 7000);
