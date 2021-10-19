import { getStyles, setStyle } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    const listItems = styles.map(Style => {
        return `<li>
        <input type="radio" name="style" value="${Style.id}" /> ${Style.style}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

