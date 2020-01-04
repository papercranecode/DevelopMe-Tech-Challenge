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
    let array1 = myArray.slice(0, Math.round(myArray.length / 2));
    let array2 = myArray.slice(Math.ceil(myArray.length / 2), myArray.length);

    //testing that we are getting two separate, randomised arrays
    console.log(array1);
    console.log(array2);

    //get the HTML elements we want to insert the names into by their ID
    const insert1 = document.getElementById('insert1'),
            insert2 = document.getElementById('insert2');

            //using a function to put the names from the two arrays into the HTML, the function does the same for both arrays so can be called upon twice, once for each array
            const insertList = (elm, arr) => {
                //using a while loop to clear the textarea each time we have randomised the names, so that it doesn't duplicate them
                while (elm.hasChildNodes()) {
            elm.removeChild(elm.lastChild);
        }

        //using a for loop to insert HTML tags so that we can put each name on a new line
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];

            elm.insertAdjacentHTML('beforeend', '<div>' + el + '</div>');
        }
    }

    //we call the above function twice, once for each array
    insertList(insert1, array1);
    insertList(insert2, array2);

}); //event listener ends here

//this clears the text area
function clearTextArea() {
    document.getElementById('textarea').value = '';
};

//MVP checklist:
//1. get the textbox info and push all names into the empty array - done
//2. use a function to shuffle the names - done
//3. divide the names into the two separate lists - use .slice to separate the array - done
//4. use map to iterate over each item in both new arrays and output them into <li>s - didn't work, converted to strings instead
//5. create button that fires the above events - done
//6. create a button that clears the text - done