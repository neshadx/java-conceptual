// Here's another problem that involves validation and calculation!

// Problem: Calculate the Discount on a Product
// A store is offering a discount on products, but only if the price of the product is valid. The discount is 15% of the product's price.

// Problem Description:
// The function should take a number as input, which represents the price of a product.
// If the price is valid (i.e., a number greater than 0), calculate the discount as 15% of the price.
// If the input is not a number or less than or equal to 0, return "Invalid".

// function discountProduct (price) {
//     if (typeof price !== "number" || price <= 0) {
//         return "Invalid"
//     } 
    
//     let discount = price * 15 /100;
//     return discount;

// }

// const product = discountProduct(500);
// console.log(product);



function cashOut( money ) {
   if (typeof money !== "number" || money < 0) {
    return "Invalid";
   }
   
    let cashoutAmount = money * 1.75 / 100;
    return cashoutAmount;
}

const result = cashOut(0);
console.log(result);