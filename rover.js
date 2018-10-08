var rover = {
  direction: "n"
}

function turnleft(pudim) {
  if (pudim.direction === "N") {
    pudim.direction = "W";
  }
  else if (pudim.direction === "W") {
    pudim.direction = "S";
  }
  else if (pudim.direction === "S") {
    pudim.direction === "E");
  }
  else {
    pudim.direction === "N";
  }
}

  function turnright(pudim) {
    if (pudim.direction === "N") {
      pudim.direction = "E";
    }
    else if (pudim.direction === "E") {
      pudim.direction = "S";
    }
    else if (pudim.direction === "S") {
      pudim.direction = "W"
    }
    else {
      pudim.direction = "N";
    }
  }

  function moveFoward (rover) {
    if (rover.direction === "N") {
      rover.y--;
    }
    else if (rover.direction === "E") {
      rover.x++;
    }
    else if (rover.direction === "S") {
      rover.y++;
    }
    else {
      rover.x--;
    }
  
    console.log(x + ", " + y)
  }

  function commands (texto, pudim) {
    for (var i = 0;i < texto.length; i++) {
      if (texto[i] === "f") {
        moveFoward(pudim);
      }
      else if (texto[i] === "r") {
        turnRight(pudim);
      }
      else if (texto[i] === "l") {
        turnLeft(pudim);
      }
      else {
        console.log ("Invalid Command. Try again.");
      }
    }

var rover = {
  travelLog: []
}

function log (obj) {
  obj.travelLog.push({obj.x,obj.y});
}


  turnleft (rover)