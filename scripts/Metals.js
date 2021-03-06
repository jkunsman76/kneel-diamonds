import { getMetals,setMetal } from "./database.js"


const metals = getMetals()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    const listItems = metals.map(Metal => {
        return `<li>
            <input type="radio" name="metal" value="${Metal.id}" /> ${Metal.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}
