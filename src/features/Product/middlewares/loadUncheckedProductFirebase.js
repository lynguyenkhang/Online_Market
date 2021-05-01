
const loadUncheckedProductFirebase = (store, next, action) => {
    const id = action.payload
    const productsList = store.getState().user.uncheckedPosts
    const chosenProduct = productsList.filter(product => product.id === id)[0]
    
    action.payload = {...chosenProduct}

    next(action)
}

export default loadUncheckedProductFirebase