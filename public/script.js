function getRand(amount,max){
    const randArray = []
    while (randArray.length < amount){
        const num = Math.floor(Math.random() * max + 1)
        if(randArray.indexOf(num)=== -1) randArray.push(num)

    }
    return(randArray)
}

async function diningHalls(){
    const requestHall = await fetch("/api/dining",{method:"get"});
    const diningHall = await requestHall.json();
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

async function mealChart(){
    const requestMeal = await fetch('api/meals');
    const requestMacro = await fetch('api/macros')
    const meal = await requestMeal.json();
    const macro = await requestMacro.json();
    const mealData = meal.data;
    const macroData = macro.data;
    const randIndex = getRand(10,meal.length);
    console.log(randIndex);
    console.log(meal[0]);
    console.table(macroData);
    const baseArray = [0,1,2,3,4,5,6,7,8,9]
    const selectedMeal = baseArray.map(element => {
        return meal[randIndex[element]]
    });
    const selectedMacro = baseArray.map(element => {
        return macro[randIndex[element]]
    });
    console.table(selectedMeal)
    console.table(selectedMacro)
    let chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        colorSet: "colorSet2",
        theme: "light1",
        title:{
          text: "Henry Chau's Lab 7"
        },
        toolTip: {
          shared: true
        },
        legend:{
          cursor: "pointer",
          itemclick: "toggleDataSeries"
        },
        data: [{
          type: "stackedBar",
          name: "Calories",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].calories },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].calories },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].calories },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].calories },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].calories },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].calories },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].calories },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].calories },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].calories },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].calories }
          ]
        },
        {
          type: "stackedBar",
          name: "Cholesterol",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].cholesterol },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].cholesterol },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].cholesterol },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].cholesterol },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].cholesterol },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].cholesterol },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].cholesterol },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].cholesterol },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].cholesterol },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].cholesterol }
          ]
        },
        {
          type: "stackedBar",
          name: "Sodium",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].sodium },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].sodium },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].sodium },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].sodium },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].sodium },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].sodium },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].sodium },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].sodium },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].sodium },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].sodium }
          ]
        },
        {
          type: "stackedBar",
          name: "Carbohydrates",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].carbs },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].carbs },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].carbs },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].carbs },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].carbs },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].carbs },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].carbs },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].carbs },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].carbs },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].carbs }
          ]
        },
        {
          type: "stackedBar",
          name: "Protein",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].protein },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].protein },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].protein },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].protein },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].protein },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].protein },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].protein },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].protein },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].protein },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].protein }
          ]
        },
        {
          type: "stackedBar",
          name: "Fat",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].fat },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].fat },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].fat },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].fat },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].fat },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].fat },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].fat },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].fat },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].fat },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].fat }
          ]
        },
        {
          type: "stackedBar",
          name: "Serving Size",
          showInLegend: "true",
          xValueFormatString: "",
          yValueFormatString: "#",
          dataPoints: [
            { label: selectedMeal[0].meal_name, y: selectedMacro[0].serving_size },
            { label: selectedMeal[1].meal_name, y: selectedMacro[1].serving_size },
            { label: selectedMeal[2].meal_name, y: selectedMacro[2].serving_size },
            { label: selectedMeal[3].meal_name, y: selectedMacro[3].serving_size },
            { label: selectedMeal[4].meal_name, y: selectedMacro[4].serving_size },
            { label: selectedMeal[5].meal_name, y: selectedMacro[5].serving_size },
            { label: selectedMeal[6].meal_name, y: selectedMacro[6].serving_size },
            { label: selectedMeal[7].meal_name, y: selectedMacro[7].serving_size },
            { label: selectedMeal[8].meal_name, y: selectedMacro[8].serving_size },
            { label: selectedMeal[9].meal_name, y: selectedMacro[9].serving_size }
          ]
        }
      ]
      });
      chart.render();
    }

    
diningHalls();
mealChart();
