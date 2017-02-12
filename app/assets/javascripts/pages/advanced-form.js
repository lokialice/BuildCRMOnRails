'use strict';
$(document).on('ready' ,function () {
    Inputmask.extendAliases({
        'numeric': {
            allowPlus: false,
            allowMinus: false
        }
    });
    $(".single-select").select2({
        minimumResultsForSearch: Infinity,
    });
    $(".single-select-search-box").select2({
        placeholder: "Select Your Role"
    });
    $(".multiple-select").select2({
        allowClear: true
    });
    $(".date-mask").inputmask();
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
    $('#datetimepicker6').datetimepicker();
    $('#datetimepicker7').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
    $('#datetimepicker8').datetimepicker({
        viewMode: 'years'
    });
    $('#datetimepicker9').datetimepicker({
        viewMode: 'years',
        format: 'MM/YYYY'
    });
    $('#datetimepicker10').datetimepicker({
        daysOfWeekDisabled: [0, 6]
    });
    $("#colorPicker-form").ColorPicker({
        onChange: function (hsb, hex, rgb) {
            $('#colorPicker-form').val(hex);
        }
    })
        .bind('keyup', function () {
            $(this).ColorPickerSetColor(this.value);
        });
    $('#colorSelector').ColorPicker({
        color: '#0000ff',
        onShow: function (colpkr) {
            $(colpkr).fadeIn(500);
            return false;
        },
        onHide: function (colpkr) {
            $(colpkr).fadeOut(500);
            return false;
        },
        onChange: function (hsb, hex, rgb) {
            $('#colorSelector .selector').css('backgroundColor', '#' + hex);
            $('#colorSelector input[type="text"]').val(hex);
        }
    });
});