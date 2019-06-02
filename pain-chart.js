var canvas = $("<canvas>")
.attr("id", "myChart")
.attr("width", "250")
.attr("height", "250")
.attr("aria-label", "pain-journal")
.attr("role", "img");

$("body").prepend(canvas);

var buttonContainer = $("<div>").attr("class", "button-container");

var dailyButton = $("<button>")
.attr("id", "daily-button")
.attr("class", "button")
.text("Daily");

var weeklyButton = $("<button>")
.attr("id", "weekly-button")
.attr("class", "button")
.text("Weekly");

var monthlyButton = $("<button>")
.attr("id", "monthly-button")
.attr("class", "button")
.text("Monthly");

buttonContainer.append(dailyButton, weeklyButton, monthlyButton);

$("body").append(buttonContainer);



var ctx = $("#myChart")[0].getContext("2d");


$(document).on("click", "#daily-button", () => {
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "12:00am",
      "3:00am",
      "6:00am",
      "9:00am",
      "12:00pm",
      "3:00pm",
      "6pm",
      "9:00pm"
    ],
    datasets: [
      {
        label: "Pain Journal",
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: "rgb(255, 99, 132)",
        data: [2, 2, 2, 0, 0, 2, 4, 2]
      }
    ]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Pain Level"
          },
          ticks: {
            min: 0,
            max: 10,
            beginAtZero: true // minimum value will be 0.
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0
      }
    }
  }
});
});



$(document).on("click", "#weekly-button", () => {
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Pain Journal",
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: "rgb(255, 99, 132)",
        data: [2, 2, 4, 0, 6, 8]
      }
    ]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Pain Level"
          },
          ticks: {
            min: 0,
            max: 10,
            beginAtZero: true // minimum value will be 0.
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0
      }
    }
  }
});
});


$(document).on("click", "#monthly-button", () => {
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Pain Journal",
        // backgroundColor: 'rgb(255, 99, 132)',
        borderColor: "rgb(255, 99, 132)",
        data: [4, 4, 2, 2, 2, 6]
      }
    ]
  },

  // Configuration options go here
  options: {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Pain Level"
          },
          ticks: {
            min: 0,
            max: 10,
            beginAtZero: true // minimum value will be 0.
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0
      }
    }
  }
});
});