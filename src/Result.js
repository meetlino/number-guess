import React from "react";
function Result({num, inp} ){
let result;
if(inp){
if (inp>num) {
    result = "higher";
} else if(inp<num) {
    result = "Lower";
}
else if (inp == num){
result = " correct value";
}
else{
    result = "enter valid number";
}}
return(
    <h3>You guessed: {result}</h3>
)
}
export default Result