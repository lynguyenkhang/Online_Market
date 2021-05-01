import database from "../../../firebase/database"

const changeProductStatusFirebase = (store, next, action) => {
    const { id, newStatus } = action.payload
    const ref = database.ref(`products/${id}`)
    ref.update({
        check: newStatus,
    })
    next(action)
}

export default changeProductStatusFirebase