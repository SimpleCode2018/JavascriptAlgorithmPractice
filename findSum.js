//给出一个数组及一个整数，判断数组中是否有两个数的和等于整数

function findSum(arr, num){
    let res=[]
    if(!arr || !Number.isInteger(num)){
        console.log("The parameter format error")
        return res
    }
    arr.map(item =>{
        if(!Number.isInteger(item)){
            console.log("The parameter format error")
            return res
        }
    })

    arr.map(item=>{
        if(arr.includes(num-item)){
            res.push(item)
        }
    })
    return res
}

console.log(findSum([6,4,3,2,10,8,1],9))