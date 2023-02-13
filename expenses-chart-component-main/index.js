getData();
async function getData() {
  const response = await fetch(`./data.json`);
  const data = await response.json();
  console.log(data);
  length = data.length;
  console.log(length);
  labels = [];
  values = [];
  for (i = 0; i < length; i++) {
    labels.push(data[i].day);
    values.push(data[i].amount);
  }
  new Chart(document.getElementById("myCanvas"), {
    type: "bar",

    data: {
      labels: labels,
      datasets: [
        {
          label: "day",
          backgroundColor: [
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
            "hsl(10, 79%, 65%)",
          ],

          data: values,
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Spending- Last 7 days",
      },
    },
  });
  document
    .getElementById("myCanvas")
    .setAttribute("style", "display:block;width:300px;");
  document.getElementById("myCanvas").style.width = "300px";
  
}
