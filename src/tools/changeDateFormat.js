const changeDateFormat = str => {
    const index1 = str.indexOf('/')
    const index2 = str.lastIndexOf('/')
    const month = str.slice(0, index1)
    const date = str.slice(index1 + 1, index2)
    const year = str.slice(index2 + 1)
    const result = `${date}/${month}/${year}`
    return result
}
export default changeDateFormat