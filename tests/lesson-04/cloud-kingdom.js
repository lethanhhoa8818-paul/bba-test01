// - Biến playerName có giá trị là “Mario”.
let playerName = "Mario"
// - Biến currentLives có giá trị là 3.
const currentLives = 3
// - Các hằng số lưu coins theo level: ■ Level 1: 25; ■ Level 2: 30; ■ Level 3: 45;
const coins_Level_1 = 25;
const coins_Level_2 = 30;
const coins_Level_3 = 45;
// - Tính giá trị trung bình coin của 3 level và in ra console.
const average = (coins_Level_1 + coins_Level_2 + coins_Level_3) / 3;
// console.log ("Giá trị trung bình coin của 3 levels là:", average);
// - In ra số coin dư khi chia cho 3
const remainder = average % 3;
console.log ("Số coin dư khi chia cho 3 là:", remainder);