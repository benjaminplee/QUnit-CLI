function newAddition(x, y) {
    return x + y;
}

function newSubtraction(x, y) {
    return x - y - y; // Intended bug!
}