const table = document.getElementById("sampleTable");

function insert_Row() {
    // Create a new row
    const newRow = document.createElement("tr");

    // Create two new cells
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");

    // Set their text
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";

    // Append cells into row
    newRow.append(cell1, cell2);

    // Insert row at the top of the table
    table.insertBefore(newRow, table.firstChild);
}
