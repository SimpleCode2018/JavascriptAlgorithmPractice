// 最大公因数，也称最大公约数、最大公因子，指两个或多个整数共有约数中最大的一个

function commonDivisorOrg(a,b){
    if(!Number.isInteger(a) && !Number.isInteger(b)){
        console.log('The parameter format error.')
        return
    }

    if(a>b){
        let temp = a
        a = b
        b=temp
    }
    if(b%a===0) return a
    for(let i=a;i>0;i--){
        if(b%i===0 && a%i===0){
            return i
        }
    }
    return 1

}

console.log(commonDivisorOrg(10, 25))