import database from "../../../firebase/database";


const compareTime = (a,b) => {
    if(a.time > b.time) return -1
    if(a.time < b.time) return 1
    return 0
}




const loadProductsInFirebase = (store, next, action) => {
    const productsListRef = database.ref(`products`)
    productsListRef.on('value', snapshot => {
        const objectData = snapshot.val()

        let data = Object.keys(objectData).map(key => ({...objectData[key], "id": key}));
        
        data = data.filter(({check}) => check === true)
        action.payload = data.sort(compareTime)
        next(action)
    })
}

export default loadProductsInFirebase


