'use strict';
$(document).on('ready', function () {
    var util = {};
    util.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(231,233,237)'
    };
    util.randomScalingFactor = function () {
        return (Math.random() > 0.5 ? 1.0 : 2.0) * Math.round(Math.random() * 100);
    }

    /* ================ PIE CHART STARTS HERE ============*/
    $(function (util) {
        var randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        util.chartColors.red,
                        util.chartColors.orange,
                        util.chartColors.yellow,
                        util.chartColors.green,
                        util.chartColors.blue,
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    "Merseyside",
                    "Paris",
                    "Seoul",
                    "Bandung",
                    "Others"
                ]
            },
            options: {
                responsive: true
            }
        };

        var ctx = {};
        if (document.getElementById("chart-pie") != null) {
            var ctx = document.getElementById("chart-pie").getContext("2d");
            window.myPie = new Chart(ctx, config);
        }
    } (util));
    /* ================ END PIE CHART ====================*/

    /* ================ PIE CHART STARTS HERE ============*/

    /* ================ END PIE CHART ====================*/

    /* ================ REAL TIME CHART ==================*/
    $(function () {
        var data = [],
            totalPoints = 300;

        function getRandomData() {

            if (data.length > 0)
                data = data.slice(1);

            // Do a random walk

            while (data.length < totalPoints) {

                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }

                data.push(y);
            }

            // Zip the generated y values with the x values

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }

        // Set up the control widget

        var updateInterval = 200;
        $("#updateInterval").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                if (updateInterval < 1) {
                    updateInterval = 1;
                } else if (updateInterval > 1600) {
                    updateInterval = 1600;
                }
                $(this).val("" + updateInterval);
            }
        });

        var plot = $.plot("#placeholder-realtime", [getRandomData()],
            {
                colors: ['#BDBDBD'],
                series: {
                    shadowSize: 0, lines: {
                        show: true, lineWidth: 0, fill: true
                    }
                }
                , legend: {
                    show: !1
                }
                , xaxis: {
                    show: !1, font: {
                        color: '#ddd'
                    }
                }
                , yaxis: {
                    tickColor: "#edeff2", color: "#474e54", min: 0, max: 100, font: {
                        size: 14, color: '#000', weight: "300"
                    }
                }
                , grid: {
                    color: "#474e54", tickColor: "#e3e6ea", backgroundColor: {
                        colors: ["#fff", "#fff"]
                    }
                    , borderWidth: {
                        top: 0, right: 0, bottom: 1, left: 0
                    }
                    , borderColor: "#eef0f2"
                }
            }

        );

        function update() {
            plot.setData([getRandomData()]);
            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();
    })
    /* ============ END REAL TIME CHART ==================*/

    
    /* =========== LINE CHART STARTS HERE ==============*/
    $(function (util) {
        var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: util.chartColors.red,
                    borderColor: util.chartColors.red,
                    data: [
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: "My Second dataset",
                    fill: false,
                    backgroundColor: util.chartColors.blue,
                    borderColor: util.chartColors.blue,
                    data: [
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor(),
                        util.randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        window.onload = function () {
            var ctx = document.getElementById("chart-line").getContext("2d");
            window.myLine = new Chart(ctx, config);
        };

    } (util));
    /* ============ END LINE CHART ==================*/

    /* ============ DOUGHNUT CHART STARTS HERE ==============*/
    $(function (util) {
        var randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
        };

        var config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                    ],
                    backgroundColor: [
                        util.chartColors.red,
                        util.chartColors.orange,
                        util.chartColors.yellow,
                        util.chartColors.green,
                        util.chartColors.blue,
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    "Red",
                    "Orange",
                    "Yellow",
                    "Green",
                    "Blue"
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
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

        window.onload = function () {
            var ctx = document.getElementById("chart-doughnut").getContext("2d");
            window.myDoughnut = new Chart(ctx, config);
        };

    } (util));
    /* ============ END DOUGHNUT CHART ==================*/

    /* ============ GOOGLE REGION CHART STARTS HERE ==================*/

    $(function () {
        google.charts.load('upcoming', { 'packages': ['geochart'] });
        google.charts.setOnLoadCallback(drawRegionsMap);

        function drawRegionsMap() {

            var data = google.visualization.arrayToDataTable([
                ['Country', 'Popularity'],
                ['Germany', 200],
                ['United States', 300],
                ['Brazil', 400],
                ['Canada', 500],
                ['France', 600],
                ['RU', 700]
            ]);

            var options = {};

            var chart = new google.visualization.GeoChart(document.getElementById('gchart-region'));

            chart.draw(data, options);
        }
    })
    /* ============ END GOOGLE REGION CHART ===========================*/
});