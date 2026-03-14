import React from 'react'

function Sum() {
    console.log("Sum is rendered");


    function calculateSum() {
        let sum = 0;
        for (let i = 1; i <= 1000; i++) {
            sum = sum + i;
        }
        return sum;
    }
    let totalValue = calculateSum();
    return (
        <>
            <p>This is  our Math Library</p>
            <h2>Sum is {totalValue}</h2>
        </>
    )
}

export default Sum