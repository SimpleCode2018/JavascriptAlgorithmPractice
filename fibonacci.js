// 斐波那契数列（Fibonacci sequence），又称黄金分割数列,又称为“兔子数列”，
// 指的是这样一个数列：1、1、2、3、5、8、13、21、34、……
// 在数学上，斐波那契数列以如下被以递推的方法定义：
// F(1)=1，F(2)=1, F(n)=F(n - 1)+F(n - 2)（n ≥ 3，n ∈ N*）

function fibonacciOrg(num){
    if(!Number.isInteger(num)){
        console.log('The parameter format error.')
        return
    }
    let array=[1,1]
    for(let i=2;i<num;i++){
        array.push(array[i-1]+array[i-2])
    }
    console.log(array[num-1])
}

function fibonacciRecursive(num){
    if(!Number.isInteger(num) || num<1){
        console.log('The parameter format error.')
        return 0
    }
    if(num<3){
        return 1
    }

    return fibonacciRecursive(num-1)+fibonacciRecursive(num-2)

}

fibonacciOrg(5)
console.log(fibonacciRecursive(5))