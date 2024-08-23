import { getEntrees, getPurchases, getSides, getVeggies } from "./database.js"

const buildOrderListItem = (order) => {
    const veggies = getVeggies()
    const sides = getSides()
    const entrees = getEntrees()

    const veggiePrice = veggies.find((veg) => order.veggieId === veg.id)

    const sidePrice = sides.find((side) => order.sideId === side.id)

    const entreePrice = entrees.find((entree) => order.entreeId === entree.id)

    const total = veggiePrice.price + entreePrice.price + sidePrice.price

    return `<li>
        Receipt #${order.orderId} = ${total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}
    </li>`
}

export const Sales = () => {
    const sales = getPurchases()
    return `
        <ul>
            ${sales.map(
                (sale) => {
                    // Reflect: What is the scope of this `return` keyword?
                    return buildOrderListItem(sale)
                }
            ).join("")}
        </ul>
    `
}

