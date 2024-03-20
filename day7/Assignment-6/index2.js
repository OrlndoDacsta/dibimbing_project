function evenNumber(limit) {
    for (let i = 2; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Example usage with limit 10
console.log(evenNumber(10));
