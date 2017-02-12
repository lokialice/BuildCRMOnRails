'use strict';
$(document).on('ready', function () {
    /*=============  FLOT LINE CHART ==============*/
    $(function () {
        var d1 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d1.push([i, Math.sin(i)]);
        }

        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
        var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];

        var placeholder = $("#placeholder");
        var plot = $.plot(placeholder, [d1, d2, d3], {
            grid: {
                borderWidth: {
                    top: 0, right: 0, bottom: 1, left: 0
                }
            },
            colors: ['#fc6471', '#fac05e', '#55d6be']      
        });
    });

    
    /* ============== END LINE CHART ==================*/

    /*  ============= BAR CHART ========================*/
    $(function () {
        var d1 = [];
        for (var i = 0; i < 20; ++i) {
            d1.push([i, Math.sin(i)]);
        }

        var data = [{ data: d1, label: "Pressure", color: "#ddd" }];

        var placeholder = $("#placeholder-bar");

        var plot = $.plot(placeholder, data, {
            bars: { show: true, barWidth: 0.5, fill: 0.9 },
            xaxis: { ticks: [], autoscaleMargin: 0.02 },
            yaxis: { min: -2, max: 2 },
            grid: {
                //markings: markings,
                borderWidth: {
                    top: 0, right: 0, bottom: 1, left: 0
                }
            }
        });
    });
    /* ================ END BAR CHART ====================*/

    /* ================ REAL TIME CHART ==================*/
    // We use an inline data source in the example, usually data would
    // be fetched from a server

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

    var updateInterval = 30;
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
            colors: ['#ddd'],
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

        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }

    update();

    /* ============ END REAL TIME CHART ============*/


    /* =========== VISITOR CHART ================ */

    $(function () {
        var d = [[1196463600000, 0], [1196550000000, 0], [1196636400000, 0], [1196722800000, 77], [1196809200000, 3636], [1196895600000, 3575], [1196982000000, 2736], [1197068400000, 1086], [1197154800000, 676], [1197241200000, 1205], [1197327600000, 906], [1197414000000, 710], [1197500400000, 639], [1197586800000, 540], [1197673200000, 435], [1197759600000, 301], [1197846000000, 575], [1197932400000, 481], [1198018800000, 591], [1198105200000, 608], [1198191600000, 459], [1198278000000, 234], [1198364400000, 1352], [1198450800000, 686], [1198537200000, 279], [1198623600000, 449], [1198710000000, 468], [1198796400000, 392], [1198882800000, 282], [1198969200000, 208], [1199055600000, 229], [1199142000000, 177], [1199228400000, 374], [1199314800000, 436], [1199401200000, 404], [1199487600000, 253], [1199574000000, 218], [1199660400000, 476], [1199746800000, 462], [1199833200000, 448], [1199919600000, 442], [1200006000000, 403], [1200092400000, 204], [1200178800000, 194], [1200265200000, 327], [1200351600000, 374], [1200438000000, 507], [1200524400000, 546], [1200610800000, 482], [1200697200000, 283], [1200783600000, 221], [1200870000000, 483], [1200956400000, 523], [1201042800000, 528], [1201129200000, 483], [1201215600000, 452], [1201302000000, 270], [1201388400000, 222], [1201474800000, 439], [1201561200000, 559], [1201647600000, 521], [1201734000000, 477], [1201820400000, 442], [1201906800000, 252], [1201993200000, 236], [1202079600000, 525], [1202166000000, 477], [1202252400000, 386], [1202338800000, 409], [1202425200000, 408], [1202511600000, 237], [1202598000000, 193], [1202684400000, 357], [1202770800000, 414], [1202857200000, 393], [1202943600000, 353], [1203030000000, 364], [1203116400000, 215], [1203202800000, 214], [1203289200000, 356], [1203375600000, 399], [1203462000000, 334], [1203548400000, 348], [1203634800000, 243], [1203721200000, 126], [1203807600000, 157], [1203894000000, 288]];

        // first correct the timestamps - they are recorded as the daily
        // midnights in UTC+0100, but Flot always displays dates in UTC
        // so we have to add one hour to hit the midnights in the plot

        for (var i = 0; i < d.length; ++i) {
            d[i][0] += 60 * 60 * 1000;
        }

        // helper for returning the weekends in a period

        function weekendAreas(axes) {

            var markings = [],
                d = new Date(axes.xaxis.min);

            // go to the first Saturday

            d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7))
            d.setUTCSeconds(0);
            d.setUTCMinutes(0);
            d.setUTCHours(0);

            var i = d.getTime();

            // when we don't set yaxis, the rectangle automatically
            // extends to infinity upwards and downwards

            do {
                markings.push({ xaxis: { from: i, to: i + 2 * 24 * 60 * 60 * 1000 } });
                i += 7 * 24 * 60 * 60 * 1000;
            } while (i < axes.xaxis.max);

            return markings;
        }

        var options = {
            xaxis: {
                mode: "time",
                tickLength: 5
            },
            selection: {
                mode: "x"
            },
            grid: {
                markings: weekendAreas,
                borderWidth: {
                    top: 0, right: 0, bottom: 1, left: 0
                }
            }, colors: ['#5bc0de']
        };

        var plot = $.plot("#placeholder-visitor", [d], options);
    });
    /* =========== END VISITOR CHART ================ */

    /* =========== VISITOR CHART ================ */

    $(function () {
        
        var data = [
            {data: 20, label: "iPhone", color: '#fc6471'},
            {data: 35, label: "Samsung", color: '#5bc0de'},
            {data: 40, label: "HTC", color: '#fac05e'},
            {data: 5, label: "Windows Phone", color: '#55d6be'}
        ]

        var placeholder = $("#placeholder-pie");
        var placeholder1 = $("#placeholder-pie1");
        var placeholder2 = $("#placeholder-pie2");

        var plot = $.plot(placeholder, data, {
            series: {
                pie: {
                    show: true
                }
            },
            legend: {
                show: false
            }
        });

        var plot2 = $.plot(placeholder2, data, {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5,
                    radius: 3 / 4,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        formatter: function labelFormatter(label, series) {
                            return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
                        },
                        background: {
                            opacity: 0.5,
                            color: "#000"
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });

        var plot1 = $.plot(placeholder1, data, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            }
        });
    });

    /* =========== END VISITOR CHART ================ */
});