import { addPurchase } from "./database.js"

const transientState = {
    orderId: 1,
    entreeId: 0,
    veggieId: 0,
    sideId: 0
}

export const setEntrees = (entreeClick) => {
    transientState.entreeId = entreeClick
    // console.log (transientState)
}

export const setVeggies = (entreeClick) => {
    transientState.veggieId = entreeClick
    // console.log (transientState)
}

export const setSides = (entreeClick) => {
    transientState.sideId = entreeClick
    // console.log (transientState)
}

export const saveOrder = () => {
    addPurchase({...transientState})
    transientState.orderId++
    
    const customEvent = new CustomEvent("orderRefresh")
    document.dispatchEvent(customEvent)
}