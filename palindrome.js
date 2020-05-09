//判断是字符串否回文

function isPalindromeOrg(str){
    if(typeof(str)!=='string'){
        console.log('The parameter format error.')
        return false
    }
    let arr = str.split('')
    let length=arr.length
    if(length%2!==0){
        return false
    }
    for(let i=0;i<length/2;i++){
        if(arr[i]!==arr[length-i-1]){
            return false
        }
    }
    return true
    
}

console.log(isPalindromeOrg('thisisht'))