import { getSides } from "./database.js"
import { setSides } from "./transientState.js"

const sideDishes = getSides()

document.addEventListener("change", (event) => {
    if (event.target.name === "sideDish") {
        setSides(parseInt(event.target.value))
    }
})

// Requirement: The radio input elements that this component function renders must all have a name of "sideDish"
export const sidesList = () => {
    let html = "<ul>"

    const listItems = sideDishes.map(dish => {
        return `<li>
            <input type="radio" name="sideDish" value="${dish.id}" />${dish.title}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

