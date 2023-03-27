// Code your solution here
function findMatching(drivers,name){
    return drivers.filter((driver)=>{
        return driver.toUpperCase() === name.toUpperCase()
    })

}
function fuzzyMatch(drivers,name){
  return drivers.filter((driver)=>{
    return driver.substring(0,name.length) === name
  })
}
function matchName(drivers, name){
    return drivers.filter((driver)=>{
        return driver.name === name
    })
}


