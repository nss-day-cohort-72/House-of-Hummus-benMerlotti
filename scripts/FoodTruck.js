import { entreeList } from "./Entrees.js"
import { saveButton } from "./orderButton.js"
import { Sales } from "./Sales.js"
import { sidesList } from "./SideDishes.js"
import { veggiesList } from "./Vegetables.js"

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <h2>Entrees</h2>
            ${entreeList()}
        </article>

        <article>
            <h2>Veggies</h2>
            ${veggiesList()}
        </article>

        <article>
            <h2>Sides</h2>
            ${sidesList()}
        </article>

        <article>
            ${saveButton()}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
