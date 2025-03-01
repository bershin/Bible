function combine(inp1, inp2) {
    var result;
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        result = inp1 + inp2;
    }
    else {
        result = inp1.toString() + inp2.toString();
    }
    return result;
}
console.log(combine(10, 20));
console.log(combine("raja", "rani"));
