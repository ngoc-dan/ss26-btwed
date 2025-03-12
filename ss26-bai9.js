let n = +prompt("Nhập độ dài của mảng");
let numbers = [];
check = 0;
function searchEven(arr, n) {
    if (n === 0) {
        return "Mảng không chứa phần tử";
    } else {
        let even = arr.filter(num => num % 2 == 0);
        let sumc = even.reduce( (total, num) => total + num, 0);
        return sumc;
    }
}
function searchOdd(arr, n) {
    if (n === 0) {
        return "Mảng không chứa phần tử";
    } else {
        let odd = arr.filter(num => num % 2 != 0);
        let suml = odd.reduce( (total, num) => total + num, 0);
        return suml;
    }
}
if (n >= 0) {
    for (let i = 0; i < n; i++) {
        numbers[i] = +prompt(`Nhập phần tử thứ ${i + 1}`);
        let testValue = numbers[i];
        if (Number.isInteger(testValue)) {
        } else {
            check++;
        }
    }
    if (check !== 0) {
        alert("Giá trị không hợp lệ");
    } else {
        alert("totalEven = " + searchEven(numbers, n));
        alert("totalOdd = " + searchOdd(numbers, n));
    }
} else {
    alert("Độ dài mảng không hợp lệ");
}