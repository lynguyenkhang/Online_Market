const generateID = (length) => {
    let result= '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    const date = new Date()
    const dateStr = date.getTime()
    return `${result}${dateStr}`;
}

export default generateID
