// Prompt user for number inputs
function get_num() {
    return prompt("Give a number");
}

// given the user number inputs, find that number's factors and add them to an array
// cycle up to <=num/2 because the largest factor will be (num/2) * 2
function find_factors(num, factor_list) {
    for (let i = 1; i <= num/2; i++) {
        if ((num % i) == 0) {
            factor_list.push(i)
        }
    }
}

// cycle through the array of factors and find the sum of all indexes
function add_factors(factor_list) {
    factors_sum = 0;
    for (let i = 0; i < factor_list.length; i++) {
        factors_sum += factor_list[i]
    }
    return factors_sum;
}

// determine if both user inputs are 'amicable' by comparing number inputs
// and the sum of their factors
function is_amicable(num1, num2, sum1, sum2) {
    return ((num1 == sum2) && (num2 == sum1));
}

// write the output depending on whether the numbers are 'amicable'
function output(amicable, num1, num2, factorList1, factorList2) {
    answer = document.getElementById("answer");

    string = "The numbers: " + num1 + " and " + num2 + " are ";
    if (amicable) {
        answer.innerHTML += (string + "amicable");
    }
    else {
        answer.innerHTML += (string + "not amicable");
    }
}

// list the factors of each of the numbers
function output_factors(num, factor_list, factor_list_div) {
    factor_list_div.innerHTML = ("Factors of " + num + ": ");
    for (let i = 0; i < factor_list.length; i++) {
        factor_list_div.innerHTML += (factor_list[i] + " ");
    }
}

// the run function, which is essentially the 'main' of the code and calls respective functions
function run() {
    num1 = get_num();
    num2 = get_num();

    factorList1 = [];
    factorList2 = [];

    // determine each numbers' factors
    find_factors(num1, factorList1);
    find_factors(num2, factorList2);

    // find each numbers' factors sums
    sum1 = add_factors(factorList1);
    sum2 = add_factors(factorList2);

    // determine of numbers are amicable
    amicability = is_amicable(num1, num2, sum1, sum2, factorList1, factorList2);

    // call function to show user whether their numbers are amicable
    output(amicability, num1, num2, factorList1, factorList2);
    
    factorList1_div = document.getElementById("factorList1");
    factorList2_div = document.getElementById("factorList2");

    // call function to list the factors of the numbers
    output_factors(num1, factorList1, factorList1_div);
    output_factors(num2, factorList2, factorList2_div);


    console.log(num1 + ": " + sum1 + " - " + factorList1);
    console.log(num2 + ": " + sum2 + " - " + factorList2);

}

run();
