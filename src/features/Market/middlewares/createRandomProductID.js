import generateID from '../../../tools/generateID'

const createRandomProductID = (store, next, action) => {
    const newID = generateID(10)
    action.payload = newID;
    next(action)
} 

export default createRandomProductID