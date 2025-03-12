let n = +prompt("Nhập độ dài của mảng");
let array = [];
function convertDateFormat(arr, n) {
    if (n === 0) {
        return "Mảng không có phần tử nào";
    } else {
        let result = "";
        for (let i = 0; i < n; i++) {
            if (/^\d{4}-\d{2}-\d{2}$/.test(arr[i])) {
                let [year, month, day] = arr[i].split("-");
                result= result +" "+(`${day}/${month}/${year}`);
            }
        }
        return result;
    }
}
if (n >= 0) {
    for (let i = 0; i < n; i++) {
        let newElement = prompt(`Nhập phần tử thứ ${i + 1} (YYYY-MM-DD):`);
            array.push(newElement);
    }
    alert(convertDateFormat(array, n));
} else {
    alert("Dữ liệu không hợp lệ");
}