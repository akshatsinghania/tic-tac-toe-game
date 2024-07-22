//selecting all required elements
const selectBox = document.querySelector(".select-box");
selectXBtn = selectBox.querySelector(".playerX");
selectOBtn = selectBox.querySelector(".playerO");
playBoard = document.querySelector(".play-board");
allBox = document.querySelectorAll("section span");
players = document.querySelector(".players");

window.onload = () => {
  //once window loaded
  for (let i = 0; i < allBox.length; i++) {
    // add onclick attribute in all available section spans
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }

  selectXBtn.onclick = () => {
    selectBox.classList.add("hide"); //hide the select box on playerX button clicked
    playBoard.classList.add("show"); //show the playboard section  on playerX button clicked
  };
  selectOBtn.onclick = () => {
    selectBox.classList.add("hide"); //hide the select box on playerO button clicked
    playBoard.classList.add("show"); //show the playboard section  on playerO button clicked
    players.setAttribute("class", "players active player"); //adding three classname in player element
  };
};
let playerXIcon = "fas fa-times"; //classname of fontawesome cross icon
let playerOIcon = "far fa-circle"; //classname of fontawesome circle icon
let playerSign = "X"; //suppose player will be X

//user clicked function
function clickedBox(element) {
  //console.log(element);
  if (players.classList.contains("player")) {
    //if players element has contains .player

    element.innerHTML = `<i class="${playerOIcon}"></i>`;
    players.classList.add("active");
    playerSign = "0";
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`; //adding circle icon tag inside user clicked elemen
    players.classList.add("active");
    element.setAttribute("id", playerSign);
  }
  element.style.pointerEvents = "none"; //once user select any box then that box cant be selected again
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed(); //generating randomly time delay to select box

  setTimeout(() => {
    bot(); // calling bot function
  }, randomDelayTime);
}

//bot click function
function bot() {
  playerSign = "0";
  let array = [];
  for (let i = 0; i < allBox.length; i++) {
    if (allBox[i].childElementCount == 0) {
      array.push(i);
      console.log(i + " " + "has no children");
    }
  }
  let randomBox = array[Math.floor(Math.random() * array.length)]; //getting random index from array so bot will select

  if (array.length > 0) {
    if (players.classList.contains("player")) {
      //if players element has contains .player
      allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
      players.classList.remove("active");
      playerSign = "X";
      allBox[randomBox].setAttribute("id", playerSign);
    } else {
      allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`; //adding circle icon tag inside user clicked elemen
      players.classList.remove("active");
      allBox[randomBox].setAttribute("id", playerSign);
    }
  }
  allBox[randomBox].style.pointerEvents = "none"; //once bot  select a box  than user cant select or click that box
}
//let work on select the winner
function getId(){
  return document.querySelector
}