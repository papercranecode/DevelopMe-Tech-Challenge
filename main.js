// function addNames() {
//     names.push(document.getElementById("textarea").value);
//     console.log(names);
// }

// let shuffleArray = shuffle(
//     getNames.sort(() => Math.random() - 0.5)
// );

// function alert() {
//     console.log("Hello");
// }


//((d) => { //Immediately Invoked Function Expression - this means all variables will be local

    //we need to use preventDefault to keep the browser from immediately running the array
    let prevent = document.getElementById('textarea').addEventListener("click", event => {
        event.preventDefault();
    })

    //this gets the names inputted in the text area and puts them into an array. '\n' puts each item on a new line.
    let arra1 = document.getElementById('textarea').value.split('\n');
    console.log(arra1);

    //we get the button by its ID and add an event listener to it
    let button = document.getElementById('button');
    button.addEventListener("click", () => console.log("clicked"));

    // this shuffles the items in the array from the text area
    function shuffle() {
        let ctr = arra1.length, temp, index;
    
    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
    }
    var myArray = arra1;
    console.log(shuffle(arra1));

    //outputting thr array into the HTML
    ul = document.createElement('ul');

    document.getElementById('insert').appendChild(ul);
    
    arra1.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
    
        li.innerHTML += item;
    });

    //this splits the array into two separate arrays
    // let array1 = shuffleArray.slice(0, 4);
    // let array2 = shuffleArray.slice(5, 9);
 
    //these are the teams which we want to push the values of the array into
    // let team1 = []
    // let team2 = []

    //this loop pushes the names into the two separate arrays
    //for (let i = 0; i < 10; i += 1) {

    // };

// })(document); //this calls the function immediately

//https://www.youtube.com/watch?v=myL4xmtAVtw
//https://www.youtube.com/watch?v=JBdyASuhq1c
//https://javascript.info/task/shuffle
//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php

//1. get the textbox info and push all names into the empty array
//2. use a function to shuffle the names
//3. divide the names into the two separate lists - use .slice to separate the array
//4. use map to iterate over each item in both new arrays and output them into <li>s 
//5. create onClick on button