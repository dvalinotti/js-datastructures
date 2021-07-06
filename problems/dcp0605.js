// cons(a, b) constructs a pair
// car(pair) and cdr(pair) returns the first and last element of a pair, respectively.
// For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
// Given this implementation of cons:
function cons(a, b) {
    function pair(f) {
        return f(a, b);
    }
    return pair;
}

// Implement car and cdr.

function car(pair) {
  
}

function cdr(pair) {

}