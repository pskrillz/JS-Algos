/**
 * You got a list of items, where every item 
 * has a value and a weight. You got a bag that holds
 * a maximum weight of X
 * 
 * Write an algo that maxmimises the value of the items
 * you put into the bag without exceeding the maximum weight.
 */


function knapsack(items, cap, itemIndex){
    console.log("running")
    if(cap === 0 || itemIndex < 0){
        return { items: [], value: 0, weight: 0}
    }


    if (cap < items[itemIndex].weight){
        return knapsack(items, cap, itemIndex - 1)
    }

    const sackWithItem = knapsack(
        items,
        cap - items[itemIndex].weight, 
        itemIndex - 1    
    );
    console.log("sack with item", sackWithItem)

    const sackWithoutItem = knapsack(
        items,
        cap, 
        itemIndex - 1
    )
    console.log("sack without item", sackWithoutItem)

    const valueWithItem = sackWithItem.value + items[itemIndex].value
    const valueWithoutItem = sackWithoutItem.value;

    if(valueWithItem > valueWithoutItem){
        const updatedSack = {
            items: sackWithItem.items.concat(items[itemIndex]),
            value: sackWithItem.value + items[itemIndex].value,
            weight: sackWithItem.weight + items[itemIndex].weight,
        };
        return updatedSack;
    } else {
        return sackWithoutItem;
    }
}



// inputs
const items = [
    {name: 'a', value: 3, weight: 3 },
    {name: 'b', value: 6, weight: 8 },
    {name: 'c', value: 10, weight: 3 },
]

const maxCap = 8;

// console.log(knapsack(items, maxCap, items.length-1))



/**
 * Greedy knapsack problem
 */

function greedyKnapsack(items, cap){
    const sack = {items: [], value: 0, weight: 0}
    let remainingCap = cap

    for (const item of items){
        if (item.weight <= remainingCap){
            sack.items.push(item);
            sack.value += item.value;
            sack.weight += item.weight
            remainingCap -= item.weight

        }
    }

    return sack;
}

console.log(greedyKnapsack(items, maxCap))

// Get's the same result, but is misleading, in that it won't work everytime, 
// just changing the order of the items makes the result incorrect. 

// Greedy algos sometimes work the best, but not always, and the best way is to check is by doing
// such things such as testing different orders of the items and stuff like that. 

// So it may be a good idea to check the greedy approach first, to come up with the simplest solution
// before trying a different approach to see if it could be made better. But make sure to verify
// the solution and then see if a better solution can be made using a different approach. 

// dynamic solutions typically are the best solution. With the best possible runtime. 
// in an interview - it is perfectly fine to start with the greedy approach by saying that 
// and then moving on to a dynamic solution to compare against. 


/**
 * Final problem solving plan. 
 * 
 * 
 * 1. Verify inputs/Problem
 * 2. Think about the problem and verbal solution  
 * 3. Write down a first version
 *      (For 2 + 3, maybe go with a simple, greedy approach first.)
 * 4. Verify results (and try different inputs)
 * 5. Derive time complexity (to judge algo)
 * 6. Explore alternative approaches. 
 * 
 */