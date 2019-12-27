// function addNames() {
//     names.push(document.getElementById("textarea").value);
//     console.log(names);
// }


((d) => { //Immediately Invoked Function Expression - this means all variables will be local
    
    //this gets the names inputted in the text area and puts them into an array. '\n' puts each item on a new line.
    let getNames = d.getElementById('textarea').value.split('\n');
    
    //this shuffles the items in the array form the text area
    function shuffle() {
        getNames.sort(() => Math.random() - 0.5);
      };

    let team1 = []
    let team2 = []

    for (let i = 0; i < 10; i += 1) {

    };

})(document); //this calls the function immediately

//https://www.youtube.com/watch?v=myL4xmtAVtw
//https://javascript.info/task/shuffle

//1. get the textbox info and push all names into the empty array
//2. use a function to shuffle the names
//3. divide the names into the two separate lists - use .slice to separate the array
//4. use map to iterate over each item in both new arrays and output them into <li>s 