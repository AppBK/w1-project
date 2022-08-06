/*
    Translation Training
    Write a function translationTraining(sentence) that accepts a sentence string and returns a new version of the sentence
    with the new words that alternate between having their first or last vowel removed.

    THe first word of the sentence should have its first vowel removed.
    The second word of the sentence should have its last vowel removed.
    The third word of the sentence should have its first vowel removed.
    The fourth word of the sentence should have its last vowel removed.

    A word without vowels should remain unchanged

    And so on. See examples below:

    console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
    console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
    console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
    console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

    Hint: Use helper methods.
*/

function remFirst(word) {
  let vowels = 'aeiou';
  let temp = word.split('');

  for (let i = 0; i < temp.length; i++) {
    let char = temp[i];

    if (vowels.includes(char)) {
        temp.splice(i, 1);
        return temp.join('');
    }
  }
  return temp.join('');
}

function remLast(word) {
    let vowels = 'aeiou';
    let temp = word.split('');

    for (let i = temp.length - 1; i >= 0; i--) {
        let char = temp[i];

        if (vowels.includes(char)) {
            temp.splice(i, 1);
            return temp.join('');
        }
    }
    return temp.join('');
}

function translationTraining(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i & 1) {  //If i is an odd number
            words[i] = remLast(words[i]);
        } else {
            words[i] = remFirst(words[i]);
        }
    }
    return words.join(' ');
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = translationTraining;
} catch (e) {
    module.exports = null;
}
