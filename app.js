var btn = document.querySelector(".btn");
var input = document.querySelector(".input");
var output = document.querySelector(".output");



btn.addEventListener("click", clickHandler);



function checkYear(year) {
    if (year % 400 == 0)
        return "Leap Year";
    else if (year % 100 == 0)
        return "Not a Leap Year";
    else if (year % 4 == 0)
        return "Leap Year";
    else {
        return "Not A Leap Year";
    }
}


function clickHandler() {
    if (input.value === "") {
        alert("Year field is mandatory");
    } else {
        output.innerText = checkYear(input.value);
    }
}