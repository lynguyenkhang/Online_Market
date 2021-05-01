
import { storageRef } from '../../../firebase/storage'

const emptyFolderInStorage = async (store, next, action) => {
    const id =  store.getState().market.postedProduct.id
    const condition = id.length > 0
    if(condition) {
        const productsRef = storageRef.child(`products/${id}`)
        const lists = await productsRef.listAll()
        lists.items.map(async ref => {
            console.log(`delete ${ref.fullPath}`)
            await ref.delete()
        })
    }
    next(action)

}

export default emptyFolderInStorage;