/** 
 * Trial Division
 * Returns the list of prime factors of a natural number 
 * @param {integer} n > 1, integer to get its prime factors
 */
function tdiv(n) {
    /* Trial division of all numbers from `2` to `n-1` */

    // Declaring a empty list to populate factors into
    let f = [];

    // Test divisor
    let i = 2;

    // Run the loop until `n` is reduced to 1 by successive division
    while (n > 1) {

        // If `n` is divisible by `i`, `i` is a factor of `n`
        if (n % i == 0) {

            // Appends to the factor list
            f.push(i);

            // Break the number by dividing `n` by `i`
            n /= i;
        }
        else {

            // Assign the next divisor for testing
            i += 1;
        }
    }

    return f;
}

/** 
 * Trial Division 2 - Fast version
 * Returns the list of prime factors of a natural number 
 * @param {integer} n > 1, integer to get its prime factors
 */
function tdiv2(n) {
    /* Trial division of all numbers from `2` to `sqrt(n)` */

    // Declaring a empty list to populate factors into
    let f = [];

    // Check for divisiblity by 2 if n is even
    while (n % 2 == 0) {
        f.push(2);
        n /= 2;
    }

    let i = 3;

    // Run the loop until `i` goes till `sqrt(n)` by successive division
    while (i * i <= n) {

        // If `n` is divisible by `i`, `i` is a factor of `n`
        if (n % i == 0) {

            // Appends to the factor list
            f.push(i);

            // Break the number by dividing `n` by `i`
            n /= i;
        }

        else {

            // Assign the next divisor for testing
            // Since even factors are already out, we can move to odd numbers by adding 2
            i += 2;
        }
    }

    // If the last factor is prime, push it as the last factor
    if (n != 1) { f.push(n); }

    return f;
}

/** 
 * GCD - Greatest Common Divisor
 * Returns the gcd of two natural numbers
 * @param {integer} a - First natural number
 * @param {integer} b - Second natural number
 */
function gcd(a, b) {
    /* Finds GCD by prime factorization */

    // Get prime factors of a
    let fa = tdiv2(a);  

    // Get prime factors of b
    let fb = tdiv2(b);  

    // Find common factors
    let cd = fa.filter(x => fb.includes(x));

    // Multiply the common factors
    let g = 1;
    while (cd.length > 0) {
        g *= cd.pop();
    }

    return g;
}

/** 
 * LCM - Lowest Common Multiple
 * Returns the lcm of two natural numbers
 * @param {integer} a - First natural number
 * @param {integer} b - Second natural number
 */
function lcm(a, b) {
    /* Finds LCM by dividing the product of a and b by their gcd */
    return (a * b) / (gcd(a, b));
}

console.log(lcm(8, 48));