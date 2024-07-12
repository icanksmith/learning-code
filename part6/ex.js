let name = "agus";
let result =  "";

for (let i = name.length - 1; i >= 0; i--) { // i = 4 - 1; 4 - 1 >= 0; i--
    result += name[i];
}

console.log(result);