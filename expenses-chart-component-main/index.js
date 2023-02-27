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
          label: "$",
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
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
          },
        },
      },
    },
  });
}
