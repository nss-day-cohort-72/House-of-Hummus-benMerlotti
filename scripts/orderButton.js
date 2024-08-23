import { saveOrder } from "./transientState.js"

export const saveButton = () => {
    document.addEventListener(
        "click",
        handleOrderClick
    )
    return `<button id="purchase">Purchase Combo</button>`
}

const handleOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveOrder()
    }
}