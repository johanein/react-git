const lineData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointBackgroundColor: "yello",
      pointBorderColor: "black",
      data: [0, 10, 5, 2, 20, 30],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "pink",
      pointBorderColor: "black",
      data: [0, 4, 10, 1, 10, 40],
    },
  ],
};

const lineOptions = {
  title: {
    display: true,
    text: "Line chart",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 40,
          stepSize: 5,
          beginAtZero: true,
        },
      },
    ],
  },
};
export { lineData, lineOptions };
