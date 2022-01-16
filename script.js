function setup(){
  cells = [[document.getElementById("cell1"),
    document.getElementById("cell2"),
    document.getElementById("cell3")],

    [document.getElementById("cell4"),
      document.getElementById("cell5"),
      document.getElementById("cell6")],

    [document.getElementById("cell7"),
      document.getElementById("cell8"),
      document.getElementById("cell9")]]
  ;
  placePictures();
}

function randomUnique() {
  var myArray = [];
  while (myArray.length < 8) {
    var y = Math.floor(Math.random() * 8) + 1;
    if (myArray.indexOf(y) === -1)
      myArray.push(y);
  }
  return myArray;
}

function displayButton(){
  document.getElementById("r").innerHTML = `<button onClick="window.location.reload()";">Restart</button>`;
}

function placePictures()
{
  var result= randomUnique();
  var b=10;
  for (let a = 0; a<=8; a++){
    document.getElementById("img"+b).setAttribute("src","image_part_00"+result[a]+".jpg");
    b+=1;
  }
}

function doClick(row,col){

 var top = row-1;
 var bottom=row+1;
 var left= col-1;
 var right=col+1;

 if(top!=-1 && cells[top][col].innerHTML=="")
   swap(cells[row][col],cells[top][col]);

 else if(right!=3 && cells[row][right].innerHTML=="")
   swap(cells[row][col],cells[row][right]);

 else if(bottom!=3 && cells[bottom][col].innerHTML=="")
   swap(cells[row][col],cells[bottom][col]);

 else if(left!=-1 && cells[row][left].innerHTML=="")
   swap(cells[row][col],cells[row][left]);

 else
   alert("You can't move this piece!");

 checkWin();
}

function swap(first, second){
 second.innerHTML=first.innerHTML;
 first.innerHTML="";
}

function checkWin(){
  var winRate = 0;
  for (let l = 1; l<=8;l++){
    if (document.getElementById("cell"+l).innerHTML.startsWith(`<img src="image_part_00`+l+".jpg"))
    winRate+=1;

    if (winRate==8){
      alert("Congratulations, You Win!");
      displayButton();
    }
  }
}

window.addEventListener("load",setup,false);

