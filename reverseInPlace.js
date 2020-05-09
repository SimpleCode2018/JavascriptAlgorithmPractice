//字符串原地反转

function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseInPlace('I like this place'))