let counterGlobal = 0;
document.getElementById("counter").innerHTML = ` ${counterGlobal}`;
setup();
let inputs = document.getElementsByTagName('input');


const rotateCallback = e=>{
  e.preventDefault();
  let moveForm = document.getElementById("rotate");
  let color;
  for (let i=0;i<4;i++)
  {
    let radio = moveForm.getElementsByTagName('input')[i];
    if (radio.checked)
    {
      color = radio.value;
      break;
    }
  }
  let num = parseInt(moveForm.getElementsByTagName('input')[4].value,10);
  let rotate = parseInt(moveForm.getElementsByTagName('select')[0].value, 10);
  rotateRobots(color, num, rotate);
  counterGlobal ++;
  document.getElementById("counter").innerHTML = ` ${counterGlobal}`;
}

const moveCallback = e=>{
  e.preventDefault();
  let moveForm = document.getElementById("move");
  let color;
  for (let i=0;i<4;i++)
  {
    let radio = moveForm.getElementsByTagName('input')[i];
    if (radio.checked)
    {
      color = radio.value;
      break;
    }
  }
  let num = parseInt(moveForm.getElementsByTagName('input')[4].value,10);
  let squares = parseInt(moveForm.getElementsByTagName('input')[5].value,10);
  moveRobots(color, num, squares);
  counterGlobal ++;
  document.getElementById("counter").innerHTML = ` ${counterGlobal}`;
}

document.getElementById("move").addEventListener("submit", e=>{moveCallback(e)});
document.getElementById("rotate").addEventListener("submit", e=>{rotateCallback(e)});
