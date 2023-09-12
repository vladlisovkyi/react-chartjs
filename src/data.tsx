// src/data.js
export const companyData = [
  {
    label: "Сompany A",
    data: [50, 45, 60, 55, 70, 65, 80],
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    borderColor: "rgba(255, 99, 132, 0.5)",
    hoverBackgroundColor: "rgba(255, 99, 132, 0.75)",
  },
  {
    label: "Сompany B",
    data: [30, 40, 35, 45, 50, 55, 60],
    backgroundColor: "rgba(53, 162, 235, 0.5)",
    borderColor: "rgba(53, 162, 235, 0.5)",
    hoverBackgroundColor: "rgba(53, 162, 235, 0.75)",
  },
];

export const radarData = {
  labels: [
    "Sales",
    "Revenue",
    "Profit",
    "Market Share",
    "Customer Satisfaction",
    "Innovation",
  ],
  datasets: [
    {
      label: "Company A",
      data: [90, 75, 80, 70, 85, 95],
      backgroundColor: "rgba(186, 82, 183, 0.5)",
      hoverBackgroundColor: "rgba(186, 82, 183, 1)",
    },
    {
      label: "Company B",
      data: [85, 70, 75, 80, 90, 88],
      backgroundColor: "rgba(245, 252, 134, 0.5)",
      hoverBackgroundColor: "rgba(245, 252, 134, 1)",
    },
  ],
};

export const scatterData = {
  labels: ["Scatter 1", "Scatter 2", "Scatter 3", "Scatter 4", "Scatter 5"],
  datasets: [
    {
      label: "Company A",
      data: [
        { x: 25, y: 11 },
        { x: 38, y: 33 },
        { x: 13, y: 67 },
        { x: 65, y: 46 },
        { x: 22, y: 12 },
        { x: 28, y: 52 },
        { x: 57, y: 22 },
        { x: 39, y: 42 },
      ],
      backgroundColor: "rgba(45, 196, 133, 1)",
      pointBorderColor: "rgba(42, 130, 93, 1)",
      pointBackgroundColor: "rgba(14, 179, 110, 1)",
    },
    {
      label: "Company B",
      data: [
        { x: 13, y: 25 },
        { x: 29, y: 17 },
        { x: 34, y: 49 },
        { x: 47, y: 34 },
        { x: 51, y: 65 },
        { x: 43, y: 31 },
        { x: 55, y: 66 },
        { x: 44, y: 333 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointBorderColor: "rgba(255, 99, 132, 1)",
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};
