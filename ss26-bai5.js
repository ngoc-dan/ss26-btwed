let n = +prompt("Nhập độ dài của mảng");
let numbers = [];
check = 0;
function search(arr, n) {
    if (n === 0) {
        return "Mảng không chứa phần tử";
    } else {
        let max = 0
        for (let i = 0; i < n; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        return max
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
        let position = 0
        for (let i = 0; i < n; i++) {
            if (numbers[i] == search(numbers, n)) {
                position = i
            }
        }
        alert("max = " + search(numbers, n));
        alert("position : " + position)
    }
} else {
    alert("Độ dài mảng không hợp lệ");
}