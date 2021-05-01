
const loadProductFirebase = (store, next, action) => {
    const id = action.payload

    const uncheckedProductsList = store.getState().admin.uncheckedList
    const productsList = store.getState().market.list
    const chosenList = [...uncheckedProductsList, ...productsList]

    const chosenProduct = chosenList.filter(product => product.id === id)[0]
    action.payload = {...chosenProduct}

    next(action)
}

export default loadProductFirebase