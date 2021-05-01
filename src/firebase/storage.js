import firebaseApp from './index'
import database from './database'

const storage = firebaseApp.storage()
export const storageRef = storage.ref()
export default storage


export const clearOldAvatars = async ref => {
    let files = await ref.listAll()
    let imagesRefs = files.items
    if(imagesRefs.length){
        imagesRefs.map(async ref => {
            await ref.delete()
        })
    }
}



const cleanJunkPhotos = async () => {
    let validItems = await database.ref(`products`).get()
    validItems = Object.keys(validItems.val())
    
    let images = await storageRef.child(`products`).listAll()
    images = images.prefixes

    images.map(async folderRef => {
        const result = validItems.indexOf(folderRef.name)
        if(result < 0) {
            const productsRef = await folderRef.listAll()
            productsRef.items.map(async ref => {
                console.log(`delete ${ref.fullPath}`)
                await ref.delete()
            })
        }
    })
}

