const lineData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      pointBackgroundColor: "yellow",
      pointBorderColor: "black",
      data: [2, 10, 5, 2, 20, 30],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "pink",
      pointBorderColor: "black",
      data: [1, 4, 10, 1, 10, 40],
    },
  ],
};
const barData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
      data: [2, 10, 5, 2, 20, 30],
    },
    {
      label: "My Second dataset",
      backgroundColor: [
        'rgba(9, 99, 132, 0.7)',
        'rgba(256, 162, 235, 0.7)',
        'rgba(98, 206, 86, 0.7)',
        'rgba(109, 192, 192, 0.7)',
        'rgba(98, 102, 255, 0.7)',
        'rgba(4, 159, 64, 0.7)'
    ],
      borderColor: [
        'rgba(9, 5, 132, 1)',
        'rgba(65, 55, 235, 1)',
        'rgba(89, 88, 86, 1)',
        'rgba(100, 56, 192, 1)',
        'rgba(200, 78, 255, 1)',
        'rgba(56, 100, 64, 1)'
    ],
      data: [1, 4, 10, 1, 10, 40],
    },
  ],
};
const doughnutData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        'rgba(255, 99, 132, 2)',
        'rgba(54, 162, 235, 2)',
        'rgba(255, 206, 86, 2)',
        'rgba(75, 192, 192, 2)',
        'rgba(153, 102, 255, 2)',
        'rgba(255, 159, 64, 2)'
    ],
      data: [2, 10, 5, 2, 20, 30],
    }
  ]
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

const barOptions = {
  title: {
    display: true,
    text: "Bar chart",
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

const doughnutOptions = {
  title: {
    display: true,
    text: "Doughnut chart",
  }
};
export { lineData, lineOptions, barData, barOptions, doughnutData, doughnutOptions };
