'use strict';
$(document).on('ready', function() {
    $(document).on('click', '.site-config-control', function(e) {
        var $this = $(this).parent();
        if ($this.hasClass('expanded')) {
            $this.removeClass('expanded');
        } else {
            $this.addClass('expanded');
        }
    });
    if (Cookies.get('n_arkalite') !== undefined) {
        var config = Cookies.getJSON('n_arkalite');
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-theme/g) || []).join(' ');
        });
        $('body').addClass(config.theme);
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-complement/g) || []).join(' ');
        });
        $('body').addClass(config.complement);
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-logo-demo/g) || []).join(' ');
        });
        $('body').addClass(config.logo);
    } else {
        Cookies.set('n_arkalite', {
            theme: 'warning-theme',
            complement: 'danger-complement',
            logo: 'primary-logo-demo'
        });
    }
    $(document).on('click', '.color-themes li', function(e) {
        var $this = $(this);
        var color = $this.data('color');
        var complementary = $this.data('complementary');
        var logo = $this.data('logo');
        var config = Cookies.getJSON('n_arkalite');
        var $selected = $this.closest('ul').find('.selected');
        if ($selected.length) {
            $selected.removeClass('selected');
        }
        $this.addClass('selected');
        var colorSchema = $this.find('div').attr('class');
        var className = color + '-theme';
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-theme/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-complement/g) || []).join(' ');
        });
        $('body').removeClass(function(index, css) {
            return (css.match(/(^|\s)\S+-logo-demo/g) || []).join(' ');
        });
        $('body').addClass(color + '-theme');
        $('body').addClass(complementary + '-complement');
        $('body').addClass(logo + '-logo-demo');
        config.theme = color + '-theme';
        config.complement = complementary + '-complement';
        config.logo = logo + '-logo-demo';
        Cookies.set('n_arkalite', config);
    });
});