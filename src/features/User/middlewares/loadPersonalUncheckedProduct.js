import database from "../../../firebase/database";


const compareTime = (a,b) => {
    if(a.time > b.time) return -1
    if(a.time < b.time) return 1
    return 0
}




const loadPersonalUnCheckedProducts = (store, next, action) => {
    const productsListRef = database.ref(`products`)
    productsListRef.on('value', snapshot => {

        const userID = store.getState().auth.user.uid

        const objectData = snapshot.val()
        let data = Object.keys(objectData).map(key => ({...objectData[key], "id": key}));

        data = data.filter(({check, uid}) => {
            const condition1 = check === false
            const condition2 = uid === userID
            return condition1 && condition2
        })
        action.payload = data.sort(compareTime)
        next(action)
    })
}

export default loadPersonalUnCheckedProducts


