let n = +prompt("Nhập độ dài của mảng"); 
let array = [];
function convertDateFormat(arr, n) {
    if (n === 0) {
        return "Mảng không có phần tử nào";
    } else {
        let result = [];
        for (let i = 0; i < n; i++) {
            let [year, month, day] = arr[i].split("-"); 
            result.push(`${day}/${month}/${year}`); 
        }
        return result; 
    }
}
if (n >= 0) {
    for (let i = 0; i < n; i++) {
        let newElement = prompt(`Nhập phần tử thứ ${i + 1} (YYYY-MM-DD):`);
        if (/^\d{4}-\d{2}-\d{2}$/.test(newElement)) {
            array.push(newElement);
        } else {
            alert("Định dạng ngày không hợp lệ! Vui lòng nhập lại.");
            i--; 
        }
    }
    console.log("Mảng sau khi chuyển đổi:", convertDateFormat(array, n));
} else {
    alert("Dữ liệu không hợp lệ");
}