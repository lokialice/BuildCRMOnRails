'use strict';
var changeDataTablePaginationStyle = function () {
    $('.dataTables_paginate .paginate_button.previous').text('').append('<i class="fa fa-chevron-left" aria-hidden="true"></i>');
    $('.dataTables_paginate .paginate_button.next').text('').append('<i class="fa fa-chevron-right" aria-hidden="true"></i>');
}
$(document).on('ready', function () {
    $('#data-table-applier').DataTable({
        responsive: true,
        "bFilter": false,
        "bLengthChange": false,
        "order": [
            [0, "asc"]
        ],
        "drawCallback": function (settings) {
            changeDataTablePaginationStyle();
        },
        "aoColumns": [{
            "name": "Id",
            "className": "dt-head-center dt-body-center vertical-align-top",
        }, {
            "name": "picture",
            "className": "dt-head-center dt-body-center vertical-align-top",
        }, {
            "name": "Name",
            "className": "dt-head-left dt-body-left vertical-align-top",
        }, {
            "name": "Age",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "LastEducation",
            "className": "dt-head-left vertical-align-top",
        }, {
            "name": "ExpectedPosition",
            "className": "dt-head-left dt-body-left vertical-align-top",
        }, {
            "name": "ExpectedSalary",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "YearGraduates",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "Attachment",
            "className": "dt-head-center dt-body-center vertical-align-top",
            "orderable": false,
        }, {
            "name": "Action",
            "className": "dt-head-center dt-body-center vertical-align-top",
            "orderable": false,
        }],
    });
    var table = $('#data-table-job').DataTable({
        responsive: true,
        "dom": "<<t>ip>",
        "order": [
            [0, "asc"]
        ],
        "drawCallback": function (settings) {
            changeDataTablePaginationStyle();
        },
        "aoColumns": [{
            "name": "Id",
            "className": "dt-head-center dt-body-center vertical-align-top",
        }, {
            "name": "JobName",
            "className": "dt-head-left dt-body-left vertical-align-top",
            "sWidth": "13%"
        }, {
            "name": "PersonNeeded",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "MinEducation",
            "className": "dt-head-left dt-body-left vertical-align-top",
        }, {
            "name": "MinExperience",
            "className": "dt-head-left dt-body-left vertical-align-top",
            "orderable": false,
        }, {
            "name": "SalaryRange",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "ClosingDate",
            "className": "dt-head-center dt-body-center vertical-align-top",
        }, {
            "name": "Applied",
            "className": "dt-head-right dt-body-right vertical-align-top",
        }, {
            "name": "Trend",
            "className": "dt-head-center dt-body-center vertical-align-top",
            "orderable": false
        }]
    });
    $('#dataTableJobSearch').on('keyup', function () {
        table.search(this.value).draw();
    });
});