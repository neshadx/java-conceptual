// let i = 0;
// while (i < friends.length) {
//     console.log(friends[i]);
//     i++;
// }

/**
 const friends = ["karim", "Rahim", "Alex"];
for (let i = 0; i < friends.length; i++) {
    const elements = friends[i]

    if (elements === "Rahim") {
        continue;
    }
    console.log(elements)
}

 */

const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let temp =[];
for (i = 1; i < numbers.length; i++) {
       if (i % 2 == 0) {
        temp.push(i);
       }
    }
    console.log(temp);

