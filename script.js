//Strcuture of Petri Net

class Transition {
    constructor(name) {
        this.name = name;
        this.incoming = [];
        this.outgoing = [];
    }

    // Custom comparator for sorting
    static compare(a, b) {
        return a.name.localeCompare(b.name);
    }
}

class Place {
    constructor(name, tokens) {
        this.name = name;
        this.tokens = tokens;
        this.incoming = [];
        this.outgoing = [];
    }
}

class PetriNet {
    constructor() {
        this.places = [];
        this.transitions = [];
    }
}

class Node {
    constructor(name) {
        this.name = name;
        this.neighbours = [];
    }
}




//For UI

let placeCoordinates = [];
let transitionCoordinates = [];


function checkIfPlaceExists(xCoordinate, yCoordinate) {

    for (let i = 0; i < placeCoordinates.length; i++) {
        let xCentre = placeCoordinates[i][0];
        let yCentre = placeCoordinates[i][1];

        let distance = Math.sqrt(Math.pow(xCentre - xCoordinate, 2) + Math.pow(yCentre - yCoordinate, 2));

        if (distance < 10) {
            //remove the pair from placeCoordinates
            placeCoordinates.splice(i, 1);
            return true;

        }
    }

    return false;
}

function checkIfTransitionExists(xCoordinate, yCoordinate) {

    const halfLength = 22 / 2;
    const halfBreadth = 6 / 2;

    for (let i = 0; i < transitionCoordinates.length; i++) {
        let xCentre = transitionCoordinates[i][0];
        let yCentre = transitionCoordinates[i][1];

        const leftBound = xCentre - halfBreadth;
        const rightBound = xCentre + halfBreadth;
        const topBound = yCentre - halfLength;
        const bottomBound = yCentre + halfLength;

        console.log(xCoordinate, yCoordinate);

        //make a rectangle the xCentre and yCentre as the centre

        if (xCoordinate >= leftBound && xCoordinate <= rightBound && yCoordinate >= topBound && yCoordinate <= bottomBound) {
            return true;
        }
    }

    return false;
}


var placeButtonClicked = false;
var transitionButtonClicked = false;
var arcButtonClicked = false;
var deletePlaceClicked = false;
var deleteTransitionClicked = false;

var createNodeButton = document.querySelector('.button');
var createTransitionButton = document.querySelector('.TransitionButton');
var createArcButton = document.querySelector('.arcButton');
var deletePlaceButton = document.querySelector('.deleteButton');
var deleteTransitionButton = document.querySelector('.deleteTransitionButton');


createNodeButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    placeButtonClicked = true;
    transitionButtonClicked = false;
    arcButtonClicked = false;
    deletePlaceClicked = false;
    deleteTransitionClicked = false;
});


createTransitionButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = true;
    placeButtonClicked = false;
    arcButtonClicked = false;
    deletePlaceClicked = false;
    deleteTransitionClicked = false;
});

createArcButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = false;
    placeButtonClicked = false;
    arcButtonClicked = true;
    deletePlaceClicked = false;
    deleteTransitionClicked = false;

});

deletePlaceButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = false;
    placeButtonClicked = false;
    arcButtonClicked = false;
    deletePlaceClicked = true;
    deleteTransitionClicked = false;

});

deleteTransitionButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = false;
    placeButtonClicked = false;
    arcButtonClicked = false;
    deletePlaceClicked = false;
    deleteTransitionClicked = true;
});


var nodeCount = 0;
var transitionCount = 0;

document.addEventListener('click', function (event) {
    if (placeButtonClicked) {
        createNode(event);
    } 
    else if (transitionButtonClicked) {
        createTransition(event);
    }

    else if (arcButtonClicked) {
        createArc(event);
    }

    else if (deletePlaceClicked) {
        deletePlace(event);
    }

    else if (deleteTransitionClicked) {
        deleteTransition(event);
    }
});



function createNode(event) {
    
    if (event.pageX > window.innerWidth / 6 && event.pageY > window.innerHeight / 6) {
        var node = document.createElement('div');
        node.className = 'node';
        node.style.left = event.pageX + 'px';
        node.style.top = event.pageY + 'px';
        document.body.appendChild(node);
        nodeCount++;
        placeCoordinates.push([event.pageX + 10, event.pageY + 10]);
        console.log(event.pageX+10, event.pageY+10);
    }
}


function createTransition(event) {

    if (event.pageX > window.innerWidth / 6 && event.pageY > window.innerHeight / 6) {
    
      var transition = document.createElement('div');
      transition.className = 'transition';
      transition.style.left = event.pageX + 'px';
      transition.style.top = event.pageY + 'px';
      document.body.appendChild(transition);
      transitionCount++;
      transitionCoordinates.push([event.pageX+3, event.pageY+11]);
      console.log(event.pageX+3, event.pageY+11);
    }
}


function deletePlace(event){
    if (event.pageX > window.innerWidth / 6 && event.pageY > window.innerHeight / 6) {
    
        var xCoordinate = event.pageX;
        var yCoordinate = event.pageY;

        var isPresent = checkIfPlaceExists(xCoordinate, yCoordinate);

        if (isPresent === true) {
            console.log("Place exists");
            //remove the div which exists at the given coordinates
            document.body.removeChild(document.elementFromPoint(xCoordinate, yCoordinate));
            
            //decrement the nodeCount
            nodeCount--;
        }

      }
}

function deleteTransition(event){
    if (event.pageX > window.innerWidth / 6 && event.pageY > window.innerHeight / 6) {
    
        var xCoordinate = event.pageX;
        var yCoordinate = event.pageY;

        var isPresent = checkIfTransitionExists(xCoordinate, yCoordinate);

        console.log(isPresent);

        if (isPresent === true) {
            console.log("Transition exists");

            //remove the div which exists at the given coordinates
            document.body.removeChild(document.elementFromPoint(xCoordinate, yCoordinate));
            
            //decrement the nodeCount
            transitionCount--;
        }

    }
}

function createArc(event) {
    
}