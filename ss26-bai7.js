let n = +prompt("Nhập độ dài của mảng");
let numbers = [];
check = 0;
function search(arr, n) {
    if(n === 0){
        return "Mảng không chứa phần tử";
    }else{
        let number = arr.filter(num => num % 2 == 0);
        let array = number.map(num => num * num);
        return array;
    }
}
if(n >= 0){
    for(let i = 0; i < n; i++){
        numbers[i] = +prompt(`Nhập phần tử thứ ${i + 1}`);
        let testValue = numbers[i];
        if(Number.isInteger(testValue)){
        }else{
            check++;
        }
    }
    if(check !== 0){
        alert("Giá trị không hợp lệ");
    }else{
        alert(search(numbers, n));    
    }
}else{
    alert("Độ dài mảng không hợp lệ");
}