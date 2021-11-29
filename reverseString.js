//Reverse a string

let newStr = '';

function reverseAString(str){
    for (let i = str.lenght - 1; i >= 0;  i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let resultado = reverseAString('Hello Gama Academy')