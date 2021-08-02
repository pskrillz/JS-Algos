/**
 * Take in two 'sets' (arrays) and 
 * create a new array that has every combination
 * from the two input arrays. 
 *
 * 
 */


function cartProduct(setA, setB){
    const product = [];

    for (let setAEl of setA){
        if (!Array.isArray(setAEl)){
            setAEl = [setAEl]
        }
        for(const setBEl of setB){
            product.push([...setAEl, setBEl])
        }
    }

    return product;
}


const colors = ['blue', 'red'];
const sizes = ['s', 'm', 'l', 'xl'];
const styles = ['round neck', 'v neck']
// console.log(cartProduct(colors, sizes))


// what about an unknown number of sets?

// the rest (not spread) '...' operator will aggregate multiple inputs
function cartesian(...sets){
    let tempProduct = sets[0]

    for (let i = 1; i < sets.length; i++){
       tempProduct = cartProduct(tempProduct, sets[i])
    }

    return tempProduct;
}

console.log(cartesian(colors, sizes, styles))

