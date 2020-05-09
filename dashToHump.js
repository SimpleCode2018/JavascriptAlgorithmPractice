//带连字符的字符串，转驼峰

function dashToHumpOrg(str){

    if(typeof(str) !== 'string'){
        console.log('The parameter format error')
        return str
    }
    let first = true
    return str.split('-').map(item => {
        if(item.length>0){
            if(first){
                first = false
                return item
            }
            return item[0].toUpperCase()+item.substring(1)
        }
    }).join('')

}

console.log(dashToHumpOrg('main-button-span'))