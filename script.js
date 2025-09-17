const table = document.getElementById("sampleTable");

function insert_Row() {
    // Insert new row at position 0 (top of table)
    const newRow = table.insertRow(0);

    // Insert two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set text content
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}
