import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = FoodTruck()
}

renderAllHTML()

document.addEventListener("orderRefresh", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
