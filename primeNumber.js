//判断一个数是否为素数
//素数大于1的自然数除1和自身外不能被整除
//查出1-100的全部素数

function isPrimeNumber(data){
    if( !Number.isInteger(data)) {
        console.log('Data type error')
        return false
    }
    
    let result=false
    if(data<2){
        return true
    }

    for(let i=2;i<data;i++){
        if(data%i==0){
            result = true
            break
        }
    }

    if(result){
        return false
    }else{
        return true
    }    
}

function isPrime(data){
    if( !Number.isInteger(data)) {
        console.log('Data type error')
        return false
    }
    //1-3一定为素数
    if(data>0 && data<4 ){
        return true
    }
    //可被2整除不是素数
    if(data%2 === 0){
        return false
    }
    //轮询3以上的数，只需轮询到Math.sqrt即可
    let limit=(Math.sqrt(data))
    for(let i=3;i<limit;i=i+2){
        if(data%i === 0){            
            return false
        }
    }
    return true
}
// isPrime(97)
for(let i=1 ;i<100; i++)
{
    if(isPrime(i)){
        console.log(i)
    }

}