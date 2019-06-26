
setup();
document.getElementById("counter").innerHTML = ` ${configuration.counter}`;
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
  configuration.counter ++;
  rotateRobots(color, num, rotate);
  document.getElementById("counter").innerHTML = ` ${configuration.counter}`;
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
  configuration.counter ++;
  moveRobots(color, num, squares);
  document.getElementById("counter").innerHTML = ` ${configuration.counter}`;

}

document.getElementById("move").addEventListener("submit", e=>{moveCallback(e)});
document.getElementById("rotate").addEventListener("submit", e=>{rotateCallback(e)});

const restart = ()=>{
  configuration.robots = JSON.parse(JSON.stringify(startConf.robots));
  configuration.squares = [];
  for(let i=0;i<configuration.dimensions.height;i++)
    {
      let row = [];
      for(let j=0;j<configuration.dimensions.width;j++)
      {
        row.push(0);
      }
      configuration.squares.push(row);
    }
  setBlanks();
  loadRobots();
}

const newGoal = ()=>{
  configuration.goal = [];
  makeGoalConf();
  setGoalBlanks();
  loadGoalbots();
}
