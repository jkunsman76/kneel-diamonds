import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            window.alert(`User chose style ${event.target.value}`)
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

