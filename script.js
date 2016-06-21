document.getElementById("form-saySomething").addEventListener("submit", saySomething);

// main function that is attached to the form submit event
function saySomething(event){
    event.preventDefault(); // prevent the form from submitting
    var val = document.getElementById('statement').value; // get the input value as a string
    var result = ''; // no results yet

    // enter your code here



    // output the final result
    document.getElementById('result').innerHTML = result;
}