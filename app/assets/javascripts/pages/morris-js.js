'use strict';
$(document).on('ready', function () {
    var bar = Morris.Bar({
        element: 'morris-bar',
        resize: true,
        data: [
            { x: '2011 Q1', y: 0 },
            { x: '2011 Q2', y: 1 },
            { x: '2011 Q3', y: 2 },
            { x: '2011 Q4', y: 3 },
            { x: '2012 Q1', y: 4 },
            { x: '2012 Q2', y: 5 },
            { x: '2012 Q3', y: 6 },
            { x: '2012 Q4', y: 7 },
            { x: '2013 Q1', y: 8 }
        ],
        xkey: 'x',
        ykeys: ['y'],
        labels: ['Y'],
        barColors: function (row, series, type) {
            if (type === 'bar') {
                var red = Math.ceil(255 * row.y / this.ymax);
                return 'rgb(' + red + ',0,0)';
            }
            else {
                return '#000';
            }
        }
    });

    var donut = Morris.Donut({
        element: 'morris-donut',
        resize: true,
        data: [
            { value: 70, label: 'foo' },
            { value: 15, label: 'bar' },
            { value: 10, label: 'baz' },
            { value: 5, label: 'A really really long label' }
        ],
        formatter: function (x) { return x + "%" }
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    var donut2 = Morris.Donut({
        element: 'morris-donut2',
        data: [
            { value: 70, label: 'foo' },
            { value: 15, label: 'bar' },
            { value: 10, label: 'baz' },
            { value: 5, label: 'A really really long label' }
        ],
        backgroundColor: '#ccc',
        labelColor: '#060',
        colors: [
            '#0BA462',
            '#39B580',
            '#67C69D',
            '#95D7BB'
        ],
        formatter: function (x) { return x + "%" }
    });

    var donut3 = Morris.Donut({
        element: 'morris-donut3',
        data: [
            { value: 70, label: 'foo', formatted: 'at least 70%' },
            { value: 15, label: 'bar', formatted: 'approx. 15%' },
            { value: 10, label: 'baz', formatted: 'approx. 10%' },
            { value: 5, label: 'A really really long label', formatted: 'at most 5%' }
        ],
        formatter: function (x, data) { return data.formatted; }
    });

    var area = Morris.Area({
        element: 'morris-area',
        data: [
            { x: '2010 Q4', y: 3, z: 7 },
            { x: '2011 Q1', y: 3, z: 4 },
            { x: '2011 Q2', y: null, z: 1 },
            { x: '2011 Q3', y: 2, z: 5 },
            { x: '2011 Q4', y: 8, z: 2 },
            { x: '2012 Q1', y: 4, z: 4 }
        ],
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['Y', 'Z']
    }).on('click', function (i, row) {
        console.log(i, row);
    });

    var day_data = [
        { "period": "2012-10-01", "licensed": 3407, "sorned": 660 },
        { "period": "2012-09-30", "licensed": 3351, "sorned": 629 },
        { "period": "2012-09-29", "licensed": 3269, "sorned": 618 },
        { "period": "2012-09-20", "licensed": 3246, "sorned": 661 },
        { "period": "2012-09-19", "licensed": 3257, "sorned": 667 },
        { "period": "2012-09-18", "licensed": 3248, "sorned": 627 },
        { "period": "2012-09-17", "licensed": 3171, "sorned": 660 },
        { "period": "2012-09-16", "licensed": 3171, "sorned": 676 },
        { "period": "2012-09-15", "licensed": 3201, "sorned": 656 },
        { "period": "2012-09-10", "licensed": 3215, "sorned": 622 }
    ];
    var line = Morris.Line({
        element: 'morris-line',
        data: day_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'SORN']
    });

    var quarter_data = [
        { "period": "2011 Q3", "licensed": 3407, "sorned": 660 },
        { "period": "2011 Q2", "licensed": 3351, "sorned": 629 },
        { "period": "2011 Q1", "licensed": 3269, "sorned": 618 },
        { "period": "2010 Q4", "licensed": 3246, "sorned": 661 },
        { "period": "2010 Q3", "licensed": 3257, "sorned": 667 },
        { "period": "2010 Q2", "licensed": 3248, "sorned": 627 },
        { "period": "2010 Q1", "licensed": 3171, "sorned": 660 },
        { "period": "2009 Q4", "licensed": 3171, "sorned": 676 },
        { "period": "2009 Q3", "licensed": 3201, "sorned": 656 },
        { "period": "2009 Q2", "licensed": 3215, "sorned": 622 },
        { "period": "2009 Q1", "licensed": 3148, "sorned": 632 },
        { "period": "2008 Q4", "licensed": 3155, "sorned": 681 },
        { "period": "2008 Q3", "licensed": 3190, "sorned": 667 },
        { "period": "2007 Q4", "licensed": 3226, "sorned": 620 },
        { "period": "2006 Q4", "licensed": 3245, "sorned": null },
        { "period": "2005 Q4", "licensed": 3289, "sorned": null },
        { "period": "2004 Q4", "licensed": 3263, "sorned": null },
        { "period": "2003 Q4", "licensed": 3189, "sorned": null },
        { "period": "2002 Q4", "licensed": 3079, "sorned": null },
        { "period": "2001 Q4", "licensed": 3085, "sorned": null },
        { "period": "2000 Q4", "licensed": 3055, "sorned": null },
        { "period": "1999 Q4", "licensed": 3063, "sorned": null },
        { "period": "1998 Q4", "licensed": 2943, "sorned": null },
        { "period": "1997 Q4", "licensed": 2806, "sorned": null },
        { "period": "1996 Q4", "licensed": 2674, "sorned": null },
        { "period": "1995 Q4", "licensed": 1702, "sorned": null },
        { "period": "1994 Q4", "licensed": 1732, "sorned": null }
    ];

    var line2 = Morris.Line({
        element: 'morris-line2',
        data: quarter_data,
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'SORN']
    });


    var nReloads = 0;
    function data(offset) {
        var ret = [];
        for (var x = 0; x <= 360; x += 10) {
            var v = (offset + x) % 360;
            ret.push({
                x: x,
                y: Math.sin(Math.PI * v / 180).toFixed(4),
                z: Math.cos(Math.PI * v / 180).toFixed(4)
            });
        }
        return ret;
    }
    var liveChart = Morris.Line({
        element: 'morris-live-chart',
        data: data(0),
        xkey: 'x',
        ykeys: ['y', 'z'],
        labels: ['sin()', 'cos()'],
        parseTime: false,
        ymin: -1.0,
        ymax: 1.0,
        hideHover: true
    });
    function update() {
        nReloads++;
        liveChart.setData(data(5 * nReloads));
        //$('#reloadStatus').text(nReloads + ' reloads');
    }
    setInterval(update, 500);


    $('.sidebar').on('expanded.nc.sidebar', function (e) {
        donut.redraw();
        bar.redraw();
    });

    $('.sidebar').on('collapsed.nc.sidebar', function (e) {
        donut.redraw();
        bar.redraw();
    });
});