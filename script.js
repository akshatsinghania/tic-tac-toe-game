//selecting all required elements
const selectBox = document.querySelector(".select-box");
selectXBtn = selectBox.querySelector(".playerX");
selectOBtn = selectBox.querySelector(".playerO");
playBoard = document.querySelector(".play-board");

window.onload = () => {
  //once window loaded
  selectXBtn.onclick = () => {
    selectBox.classList.add("hide"); //hide the select box on playerX button clicked
    playBoard.classList.add("show"); //show the playboard section  on playerX button clicked
  };
  selectOBtn.onclick = () => {
    selectBox.classList.add("hide"); //hide the select box on playerO button clicked
    playBoard.classList.add("show"); //show the playboard section  on playerO button clicked
  };
};
