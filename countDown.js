function countDown(n) {
    if (n < 1) return 0;
    const sum = n + countDown(n - 1);
    return sum;
}

console.log(countDown(4));



