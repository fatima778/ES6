export function add(a,b) {
    return a + b;   
}

export function sub(a,b) {
    return a - b;
}

export function multi(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b===0){
        return "Mathematics error";
    }
    return a/b;
}