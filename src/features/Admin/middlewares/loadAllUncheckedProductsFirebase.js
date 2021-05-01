import database from "../../../firebase/database";

const compareTime = (a,b) => {
    if(a.time > b.time) return -1
    if(a.time < b.time) return 1
    return 0
}



const loadAllUncheckedProductsFirebase = async (store ,next, action) => {
    const {email} =  store.getState().auth.user
    const condition = email === process.env.REACT_APP_ADMIN
    if(condition){
        const productsListRef = database.ref(`products`)
        productsListRef.on('value', snapshot => {
            const objectData = snapshot.val()
    
            let data = Object.keys(objectData).map(key => ({...objectData[key], "id": key}));
            
            data = data.filter(({check}) => check === false)
            action.payload = data.sort(compareTime)
            next(action)
        })
    } else {
        next(action)
    }
}

export default  loadAllUncheckedProductsFirebase;