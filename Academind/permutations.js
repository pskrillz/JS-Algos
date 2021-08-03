/**
 * What is a permutation?
 * An ordered combination of values. 
 * Two types: w/ and w/o repetition. 
 */

// Permutations without repetition

function getPermutations(options){
    const permutations = [];
    console.log('Function start');
    console.log(options)

    if (options.length === 1){
        return [options];
    }

    const partialPermutations = getPermutations(options.slice(1));

    console.log("After recursive step")
    console.log(partialPermutations)

    const firstOption = options[0];
    console.log(firstOption)

    for (let i = 0; i < partialPermutations.length; i++){
        const partialPermutation = partialPermutations[i]
        console.log('outer loop')
        console.log(partialPermutation)
  

        for (let j = 0; j <= partialPermutation.length; j++){
            const permutationInFront = partialPermutation.slice(0, j);
            const permutationAfter = partialPermutation.slice(j);
            permutations.push(permutationInFront.concat([firstOption], permutationAfter))
        }
    }

    return permutations;
}


const todoListItems = [
    'Walk the dog', 
    'clean the toilet', 
    'buy groceries', 
    'order food'
];


// console.log(getPermutations(todoListItems))

// Time complexity => O(n!) -- factorial time complexity!!

// Permutations with repetitions


const  getPermutations1 = (options, length) => {
    const permutations = []

    if (length === 1){
        return options.map(option => [option]);
    }

    const partialPermutations = getPermutations1(options, length - 1)


    for (const option of options){
        for(const existingPermutation of partialPermutations){
            permutations.push([option].concat(existingPermutation))
        }
    }

    return permutations;
}

const digits = [1,2,3]
const resultLength = 3


console.log(getPermutations1(digits, resultLength))