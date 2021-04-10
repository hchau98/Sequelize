async function diningHalls(){
    const request = await fetch("/api/dining",{method:"get"});
    const diningHall = await request.json();
    const diningHallData = diningHall.data;
    
    const diningTable = document.querySelector(".table")
    console.table(diningTable);
    diningHallData.forEach((row) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${row.hall_id}</td>
            <td>${row.hall_name}</td>
            <td>${row.hall_address}</td>
        `;
        diningTable.append(newRow);
    });

}
diningHalls();