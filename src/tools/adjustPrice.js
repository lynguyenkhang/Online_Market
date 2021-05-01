export const addDotsToPrice = str => {
    var result = ''
    for(var i = 1 ; i <= str.length ; i++){
        var index = str.length - i;
        if( (i - 1) !== 0 && ((i - 1) % 3) === 0) {
            result = str[index] + '.' + result;
        } else {
            result = str[index] + result;
        }
    }
    return result;
}


export const removeWord = (str, word) => {
    while(str.indexOf(word) > -1){
        str = str.replace(word,'');
    }
    return str;
}