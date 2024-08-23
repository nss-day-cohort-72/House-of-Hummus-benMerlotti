import { getEntrees } from "./database.js"
import { setEntrees } from "./transientState.js"

const entrees = getEntrees()

document.addEventListener("change", (event) => {
    let selectedOption = event.target
    if (selectedOption.name === "entree") {
        setEntrees(parseInt(selectedOption.value))
    }
})

export const entreeList = () => {
    let html = "<ul>"
    entrees.map((entree) => {
        html += `<li>
                    <input type="radio" name="entree" value="${entree.id}">
                        <strong>${entree.name}</strong> // Price: ${entree.price}
        </li>`
    })
    return html + "</ul>"
}

// Requirement: The radio input elements that this component function renders must all have a name of "entree"
