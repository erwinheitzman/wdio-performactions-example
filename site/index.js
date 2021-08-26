const dataRow = document.querySelectorAll("tbody tr");

console.log(dataRow);

let selectedRows = [];

function unselectAll() {
    selectedRows = [];
    dataRow.forEach(row => {
        row.classList.remove("activeRow")
    })
}

dataRow.forEach(row => {
    row.addEventListener("click", (event) => {
        if (event.ctrlKey || event.metaKey) {
            selectedRows.push(row.dataset.id)
            row.classList.toggle("activeRow")
            console.log(row)
        } else {
            unselectAll();
            selectedRows.push(row.dataset.id)
            row.classList.toggle("activeRow")
        }
        console.log(selectedRows)
    })
})