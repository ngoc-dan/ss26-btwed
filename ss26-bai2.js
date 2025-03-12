let n = +prompt("Nhập độ dài của mảng")
let array = []
function string(arr, n) {
    if (n == 0) {
        return "Mảng không có phần tử nào"
    } else {
        let str = ""
        for (let i = 0; i < n; i++) {
            if (arr[i].length >= 5) {
                str = str + " " + arr[i]
            }
        }
        return str
    }
}
if (n >= 0) {
    for (let i = 0; i < n; i++) {
        array[i] = prompt(`Nhập phần tử thứ ${i + 1}`);
    }
    alert(string(array, n))
} else {
    alert("Dữ liệu không hợp lệ")
}