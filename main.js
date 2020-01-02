//((d) => { //Immediately Invoked Function Expression - this means all variables will be local

    //we need to use preventDefault to keep the browser from immediately running the array
    let buttonClick = document.getElementById('button');
    
        //we wrap the code in an event listener so that it doesn't fire until the button is clicked
        buttonClick.addEventListener("click", myFunction => {

        //this gets the names inputted in the text area and puts them into an array. '\n' puts each item on a new line.
        let arra1 = document.getElementById('textarea').value.split('\n');

        //we get the button by its ID and add an event listener to it
        let button = document.getElementById('button');
        button.addEventListener("click", () => console.log("clicked"));

        console.log(arra1)

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

        //we store the shuffle function in the variable myArray so that we can use it later
        let myArray = shuffle();
        console.log(myArray);

        //this splits the array into two separate arrays
        let array1 = myArray.slice(0, (myArray.length / 2));
        let array2 = myArray.slice((myArray.length / 2), myArray.length);

        console.log(array1);
        console.log(array2);

        //br = document.createElement('br');

        //we convert the array items into strings so that we can output them on the page
        let arrayUno = array1.toString().split(',').join('\n');
        let arrayDos = array2.toString().split(',').join('\n');

        //inserting the strings into each paragraph
        document.getElementById('insert1').textContent = arrayUno;
        document.getElementById('insert2').textContent = arrayDos;

    }); //event listener ends here

    //this clears the text area
    function clearTextArea() {
        document.getElementById('textarea').value = '';
    };

// })(document); //this calls the function immediately

//1. get the textbox info and push all names into the empty array
//2. use a function to shuffle the names
//3. divide the names into the two separate lists - use .slice to separate the array
//4. use map to iterate over each item in both new arrays and output them into <li>s 
//5. create button that fires the above events
//6. create a button that clears the text