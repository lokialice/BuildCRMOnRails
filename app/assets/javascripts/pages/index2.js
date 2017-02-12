'use strict';
$(document).on('ready' ,function () {
    var chart = new Chartist.Line('.ct-chart', {
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

    chart.on('draw', function (data) {
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
    $('.sidebar').on('expanded.nc.sidebar', function (e) {
        chart.update();
    });

    $('.sidebar').on('collapsed.nc.sidebar', function (e) {
        chart.update();
    });

});