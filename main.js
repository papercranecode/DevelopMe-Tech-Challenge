//((d) => { //Immediately Invoked Function Expression - this means all variables will be local

    //we get the button by it's ID and store it in a variable
    let buttonClick = document.getElementById('button');
    
        //we wrap the code in an event listener so that it doesn't fire until the button is clicked
        buttonClick.addEventListener("click", myFunction => {

        //this gets the values that have been entered in the text area and puts them into an array. '\n' puts each item on a new line. 
        let arra1 = document.getElementById('textarea').value.split('\n');

        //testing the button click  is firing by using console log
        let button = document.getElementById('button');
        button.addEventListener("click", () => console.log("clicked"));

        //testing that we're getting an array using console log
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

        //storing the shuffle function in the variable myArray so that we can use it later
        let myArray = shuffle();
        //testing that we're getting a randomised array using console log
        console.log(myArray);

        //this splits the array into two separate arrays
        let array1 = myArray.slice(0, (myArray.length / 2));
        let array2 = myArray.slice((myArray.length / 2), myArray.length);

        //testing that we are getting two separate, randomised arrays
        console.log(array1);
        console.log(array2);

        //br = document.createElement('br');

        //converting the array items into strings so that we can output them on the page
        let arrayTeamOne = array1.toString().split(',').join('\n');
        let arrayTeamTwo = array2.toString().split(',').join('\n');

        //inserting the strings into each team card section
        document.getElementById('insert1').textContent = arrayTeamOne;
        document.getElementById('insert2').textContent = arrayTeamTwo;

    }); //event listener ends here

    //this clears the text area
    function clearTextArea() {
        document.getElementById('textarea').value = '';
    };

// })(document); //this calls the function immediately

//MVP checklist:
//1. get the textbox info and push all names into the empty array - done
//2. use a function to shuffle the names - done
//3. divide the names into the two separate lists - use .slice to separate the array - done
//4. use map to iterate over each item in both new arrays and output them into <li>s - didn't work, converted to strings instead
//5. create button that fires the above events - done
//6. create a button that clears the text - done