import database from '../../../firebase/database'

const loadProductFirebase = (store, next, action) => {
    const id = action.payload
    const productsList = store.getState().market.list
    const chosenProduct = productsList.filter(product => product.id === id)[0]
    
    // increase view
    const newView = chosenProduct.view + 1
    const ref = database.ref(`products/${id}`)
    ref.update({view: newView})

    
    action.payload = {...chosenProduct, view: newView}

    next(action)
}

export default loadProductFirebase