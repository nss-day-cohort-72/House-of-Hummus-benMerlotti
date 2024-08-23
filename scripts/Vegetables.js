import { getVeggies } from "./database.js"
import { setVeggies } from "./transientState.js"

const veggies = getVeggies()

document.addEventListener("change", (event) => {
    if (event.target.name === "vegetable") {
        setVeggies(parseInt(event.target.value))
    }
})

export const veggiesList = () => {

    let html = `<ul>
        ${
            veggies.map(veg => {
                return `<li>
                            <input type="radio" name="vegetable" value="${veg.id}" /> ${veg.type}
                        </li>`
            }).join("")
        }
    </ul>`

    return html
}
