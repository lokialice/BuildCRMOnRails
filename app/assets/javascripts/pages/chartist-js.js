'use strict';
$(document).on('ready', function () {
    var lineChart = new Chartist.Line('.ct-chart', {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
        series: [
            [23, 42, 50, 20, 48, 90, 60, 41, 70, 80, 36, 60],
            [35, 15, 65, 42, 25, 65, 77, 100, 20, 58, 60, 45]
        ]
    }, {
            low: 0,
            high: 100,
            lineSmooth: false,
            showArea: false,
            showPoint: true,
            fullWidth: true,
            axisX: {
                showGrid: false
            },
            axisY: {
                showGrid: false
            }
        });

    lineChart.on('draw', function (data) {
        if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
                d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    }, {
            height: 300
        });

    var lineAreaChart = new Chartist.Line('.line-area-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
            low: 0,
            showArea: true
        });

    var biPolarChart = new Chartist.Line('.bi-polar-chart', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [1, 2, 3, 1, -2, 0, 1, 0],
            [-2, -1, -2, -1, -2.5, -1, -2, -1],
            [0, 0, 0, 1, 2, 2.5, 2, 1],
            [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
        ]
    }, {
            high: 3,
            low: -3,
            showArea: true,
            showLine: false,
            showPoint: false,
            fullWidth: true,
            axisX: {
                showLabel: false,
                showGrid: false
            }
        });

    var barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
            [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
        ]
    };

    var barChartOptions = {
        seriesBarDistance: 10
    };

    var barChartResponsiveOptions = [
        ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (value) {
                    return value[0];
                }
            }
        }]
    ];

    var barChart = new Chartist.Bar('.bar-chart', barChartData, barChartOptions, barChartResponsiveOptions);

    var multiLineBar = new Chartist.Bar('.multiline-bar-chart', {
        labels: ['First quarter of the year', 'Second quarter of the year', 'Third quarter of the year', 'Fourth quarter of the year'],
        series: [
            [60000, 40000, 80000, 70000],
            [40000, 30000, 70000, 65000],
            [8000, 3000, 10000, 6000]
        ]
    }, {
            seriesBarDistance: 10,
            axisX: {
                offset: 60
            },
            axisY: {
                offset: 80,
                labelInterpolationFnc: function (value) {
                    return value + ' CHF'
                },
                scaleMinSpace: 15
            }
        });

    var pirChartData = {
        series: [5, 3, 4]
    };

    var sum = function (a, b) { return a + b };

    var pieChart = new Chartist.Pie('.pie-chart', pirChartData, {
        labelInterpolationFnc: function (value) {
            return Math.round(value / pirChartData.series.reduce(sum) * 100) + '%';
        }
    });

    var gaugeChart = new Chartist.Pie('.gauge-chart', {
        series: [20, 10, 30, 40]
    }, {
            donut: true,
            donutWidth: 60,
            startAngle: 270,
            total: 200,
            showLabel: false
        });

    $('.sidebar').on('expanded.nc.sidebar', function (e) {
        lineChart.update();
        lineAreaChart.update();
        biPolarChart.update();
        barChart.update();
        multiLineBar.update();
        pieChart.update();
        gaugeChart.update();
    });

    $('.sidebar').on('collapsed.nc.sidebar', function (e) {
        lineChart.update();
        lineAreaChart.update();
        biPolarChart.update();
        multiLineBar.update();
        pieChart.update();
        gaugeChart.update();
    });
});