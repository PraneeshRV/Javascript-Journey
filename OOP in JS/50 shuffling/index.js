//shuffling
// Fisher-Yates algorithm
/* 
"The Fisher–Yates shuffle is an algorithm for shuffling a finite sequence.
The algorithm takes a list of all the elements of the sequence, 
and continually determines the next element in the shuffled sequence by randomly drawing an element from the list
until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. 
The modern version of the algorithm takes time proportional to the number of items being shuffled 
and shuffles them in place."

Eberl, Manuel (2016). "Fisher–Yates shuffle". Archive of Formal Proofs. Retrieved 28 September 2023.*/

const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}