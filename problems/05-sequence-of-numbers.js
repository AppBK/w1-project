/*
    Sequence of Numbers
    The sequence of numbers is generated by describing each group
    of identical digits in the previous term.
    Given a string of numbers,
    translate the string into a sequence of numbers that describes the count of
    identical digits.
    
    For example, the string "1" has "one 1" and would be
    translated to 11.
    The string "11" is interpreted as "two 1s" which is
    translated to 21.
    The string "1211" is interpreted as "one 1, one 2,
    two 1s" which is translated to 111221.
    This is a tough one. Try not
    to look at the solution unless you spend more than 30 minutes on it.

    console.log(sequenceOfNumbers("1")) // prints 11;
    console.log(sequenceOfNumbers("11")) // prints 21;
    console.log(sequenceOfNumbers("1211")) // prints 111221;
*/

function sequenceOfNumbers(string) {
    
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = sequenceOfNumbers;
} catch (e) {
    module.exports = null;
}