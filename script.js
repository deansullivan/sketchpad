// Creating global variables --------------------

let gridSize = 16;
let columns = gridSize;
let rows = (gridSize * columns) - 1;
let color = "black";
let opacity = 1;// Opacity variable
let funkyTime = "false";
const sketchbox = document.querySelector('#sketchbox');
const userInput = document.querySelector('#userInput');
const btn = document.querySelector('#btn');// Creates new grid
const btn2 = document.querySelector('#btn2');// Changes color to black
const btn3 = document.querySelector('#btn3');// Changes color to greyscale
const btn4 = document.querySelector('#btn4');// Activates Funkytown

// Creating functions --------------------------------

function CreateGrid(rows, columns){
  sketchbox.style.setProperty('--grid-rows', columns);
  sketchbox.style.setProperty('--grid-cols', columns); 
  for (i = 0; i <= rows; i++){
      let cell = document.createElement("div");
      CellProperty(cell);
  }
}

// Clears current grid and adds a new one based on input value
function OnCreate(){
  while(sketchbox.firstChild){
    sketchbox.removeChild(sketchbox.firstChild)};
  var inputValue = document.getElementById("input").value;
  gridSize = inputValue;
  columns = gridSize;
  rows = (gridSize * columns) - 1;
  CreateGrid(rows, columns);
}


// Makes the cells do stuff
function CellProperty(cell){
  cell.addEventListener("mouseenter", () => {
  if(funkyTime === "true"){
    FunkyTown();
    };
  if(opacity === .1){
    GrayscalePen(cell);
  };
  event.target.style.opacity = opacity;
  event.target.style.backgroundColor = color;
  })
  sketchbox.appendChild(cell).className = "grid-item";
}

function NormalDraw(){
  color = "black";
  opacity = 1;
  funkyTime = "false";
}

//Activates GrayscaleDraw
function GrayscaleDraw(){
  color = "black";
  opacity = .1;
  funkyTime = "false";
}

function GrayscalePen(cell){
   opacity = opacity + .1;
}

// Creates a random color
function FunkyTown(){
  color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

// Like it says on the tin
function ActivateFunkytown(){
  funkyTime = "true";
  opacity = 1;
}


// Implementing code -----------------------------------------

CreateGrid(rows, columns);

btn.addEventListener('click', OnCreate);
btn2.addEventListener('click', NormalDraw);
btn3.addEventListener('click', GrayscaleDraw);
btn4.addEventListener('click', ActivateFunkytown);
