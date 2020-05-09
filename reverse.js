//反转数组元素
function reverseOrg(arr){
    if(!arr) return arr
    let tmp, end=arr.length-1, middle=end/2
    for(let i=0;i<middle;i++){
        tmp=arr[i]
        arr[i]=arr[end-i]
        arr[end-i]=tmp
    }
    return arr
}

let arr=[1,2,3,4,5,6,7,8,9]
console.log(arr)
console.log(reverseOrg(arr))