// get the button by its ID and store it in a variable
let buttonClick = document.getElementById('button');

// wrap the code in an event listener so that it doesn't fire until the button is clicked
buttonClick.addEventListener("click", myFunction => {

    // get the names that have been entered in the text area and puts them into an array. '\n' puts each item on a new line. 
    let arra1 = document.getElementById('textarea').value.split('\n');

    // shuffle the items in the array from the text area by selecting a random index
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
        };
        return arra1;
    };

    // store the shuffle function in the variable myArray so that we can use it later
    let myArray = shuffle();

    // split the array into two separate arrays, using Math.round to round to the nearest integer, and Math.ceil to round up to the nearest whole number
    let array1 = myArray.slice(0, Math.round(myArray.length / 2));
    let array2 = myArray.slice(Math.ceil(myArray.length / 2), myArray.length);

    // get the HTML elements we want to insert the names into by their ID
    const insert1 = document.getElementById('insert1'),
          insert2 = document.getElementById('insert2');

            // use a function to put the names from the two arrays into the HTML, the function does the same for both arrays so can be called upon twice, once for each array
            const insertList = (elm, arr) => {
                // use a while loop to clear the textarea each time we have randomised the names, so that it doesn't duplicate them
                while (elm.hasChildNodes()) {
            elm.removeChild(elm.lastChild);
        };

        // use a for loop to insert each name into a new div tag in the HTML
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];

            elm.insertAdjacentHTML('beforeend', '<div>' + el + '</div>');
        };
    };

    // call the above function twice, once for each array
    insertList(insert1, array1);
    insertList(insert2, array2);

}); // event listener ends here

// clear the text area by setting the value to an empty string
function clearTextArea() {
    document.getElementById('textarea').value = '';
};