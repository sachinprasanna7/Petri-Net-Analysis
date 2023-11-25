
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

var placeButtonClicked = false;
var transitionButtonClicked = false;
var arcButtonClicked = false;

var createNodeButton = document.querySelector('.button');
var createTransitionButton = document.querySelector('.TransitionButton');
var createArcButton = document.querySelector('.arcButton');


createNodeButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    placeButtonClicked = true;
    transitionButtonClicked = false;
    arcButtonClicked = false;
});


createTransitionButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = true;
    placeButtonClicked = false;
    arcButtonClicked = false;
});

createArcButton.addEventListener('click', function () {
    // Update the flag to true after the first click
    transitionButtonClicked = false;
    placeButtonClicked = false;
    arcButtonClicked = true;

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
        console.log("arc button clicked");
        createArc(event);
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
    }
  }


function createArc(event) {

}



