        // 1. ერთ განზომილებიანი მასივი

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(i = 0; i < array.length; i++){
//     console.log(array[i])
// }

        // 2. ერთ ფუნქციაში მეორეს გამოყენება

// function priceCategoryFunc(price) {
//     if(price > 50) {
//         return "Expensive";
//     }
//     else if(price >=20 && price <=50) {
//         return "Medium"
//     }
//     else {
//         return "Cheap"
//     }
// }

// function displayInfo(price, categoryFunc) {
//     let category = categoryFunc(price);

//     if(category === "Expensive") {
//         console.log("The item is too Expensive");
//     }
//     else if(category === "Medium") {
//         console.log("The item price is normal");
//     }
//     else {
//         console.log("The item price is too cheap");
//     }
// }

// let itemPrice = prompt("შეიყვანეთ ნივთის ფასი:")

// displayInfo(itemPrice, priceCategoryFunc)

        // 3. ყველაზე დიდი რიცხვი მასივში

// let Array = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];

// // გამოიტანებს მასივში ყველაზე დიდ რიცხვს
// let maxNumber = Math.max(...Array);

// console.log("ყველაზე დიდი რიცხვი:", maxNumber);