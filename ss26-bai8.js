let n = +prompt("Nhập độ dài của mảng");
let numbers = [];
check = 0;
function searchs(arr, n) {
    if (n === 0) {
        return "Mảng không chứa phần tử";
    } else {
        let array = arr.filter(num => num % 2 != 0);
        let str = "";
        for (let i = 0; i < n; i++) {
            let search = 0
            for (let j = 2; j < array[i]; j++) {
                if (array[i] % j == 0) {
                    search++;
                }
            }
            if (search == 0 && array[i] > 1) {
                str = str + " " + array[i];
            }
        }
        return str;
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
        alert(searchs(numbers, n));
    }
} else {
    alert("Độ dài mảng không hợp lệ");
}