import cities from '../assets/data/cities'


const filterCityName = name => {
    const tinhIndex = name.indexOf("Tỉnh")
    const tpIndex = name.indexOf("Thành phố")
    if(tinhIndex > -1){
        return name.slice(tinhIndex + 4 + 1)
    }
    if(tpIndex > -1){
        return name.slice(tpIndex + 9 + 1)
    }
}


export const triggerCities = () => {
    return cities.map(({Name}) => filterCityName(Name))

}


export const triggerDistricts = chosenCity => {
    const index = cities.findIndex(({Name}) => filterCityName(Name) === chosenCity )
    const { Districts } = cities[index]
    return [...Districts]
}



