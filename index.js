// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let newArray = drivers.slice(0, 2)
    return newArray
}

const returnLastTwoDrivers = function(drivers) {
    let newArray = drivers.slice(-2)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function(num2) {
        return num2 * num1
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers)
}
