const valor1 = false;
const valor2 = 0;
const valor3 = "";
const valor4 = null;
const valor5 = undefined;
const valor6 = NaN;

if (valor1) {
    console.log("false é Truthy");
} else {
    console.log("false é Falsy");
}

if (valor2) {
    console.log("0 é Truthy");
} else {
    console.log("0 é Falsy");
}

if (valor3) {
    console.log('"" (string vazia) é Truthy');
} else {
    console.log('"" (string vazia) é Falsy');
}

if (valor4) {
    console.log("null é Truthy");
} else {
    console.log("null é Falsy");
}

if (valor5) {
    console.log("undefined é Truthy");
} else {
    console.log("undefined é Falsy");
}

if (valor6) {
    console.log("NaN é Truthy");
} else {
    console.log("NaN é Falsy");
}
