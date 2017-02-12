'use strict';
$(document).on('ready', function () {
    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };

    /* BUBLE CHART STARTS HERE */
    window.randomScalingFactor = function () {
        return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
    }

    var DEFAULT_DATASET_SIZE = 7;

    var addedCount = 0;
    var color = Chart.helpers.color;
    var bubbleChartData = {
        animation: {
            duration: 10000
        },
        datasets: [{
            label: "My First dataset",
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            borderWidth: 1,
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }]
        }, {
            label: "My Second dataset",
            backgroundColor: color(window.chartColors.orange).alpha(0.5).rgbString(),
            borderColor: window.chartColors.orange,
            borderWidth: 1,
            data: [{
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }, {
                x: randomScalingFactor(),
                y: randomScalingFactor(),
                r: Math.abs(randomScalingFactor()) / 5,
            }]
        }]
    };

    var ctx = document.getElementById("chart-js-bubble-chart").getContext("2d");
    window.myChart = new Chart(ctx, {
        type: 'bubble',
        data: bubbleChartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Bubble Chart'
            },
            tooltips: {
                mode: 'point'
            }
        }
    });

    /* BUBBLE CHART ENDS HERE */

    /* COMBO BAR LINE STARTS HERE */
    var chartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: window.chartColors.blue,
            borderWidth: 2,
            fill: false,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: window.chartColors.green,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }]

    };

    var ctx = document.getElementById("chart-js-combo-bar-line-chart").getContext("2d");
    window.myMixedChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    });

    /* COMBO BAR LINE ENDS HERE */


    /* DOGHNUT CHART STARS HERE */

    var config = {
        type: 'doughnut',
        data: {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    var ctx = document.getElementById("chart-js-doughnut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);

    var ctx = document.getElementById("chart-js-pie-chart").getContext("2d");
    var data = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Red",
            "Green",
            "Yellow",
            "Grey",
            "Blue"
        ]
    };
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    /* DOGHNUT CHART ENDS HERE */
});