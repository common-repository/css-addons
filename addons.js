var CssAddonsCodeMirror=[];
function cssaddons_update() {
    jQuery('.css-addons-control').each(function(){
        var csspis = {};
        var i = 0;
        jQuery(this).find('.css-addons-list input').each(function ($) {
            if (jQuery(this).is(':checked')) {
                csspis[i] = jQuery(this).val();
                i++;
            }
        });
        jQuery(this).find('.css-addons-textarea').val(serialize(csspis)).trigger("change");
    });
}
function str_replace(search,replace,subject){
    while(subject.indexOf(search)>-1){
        subject = subject.replace(search,replace);
    }
    return subject;
}
function cssaddons_refactor(){
    jQuery('#css-addons-form span.dashicons-trash').unbind('click').click(function(){
        if(confirm(cssaddons.remove_confirm)){
            jQuery(this).parent().parent().hide(500,function(){jQuery(this).remove();});
        }
    });
}
function cssaddons_editor(who){
    if(CodeMirror){
        CssAddonsCodeMirror[CssAddonsCodeMirror.length] = CodeMirror.fromTextArea(
            who,
                {
                    lineNumbers: true,
                    extraKeys: {"Ctrl-Space": "autocomplete"},
                    mode: 'text/css'
                }
            );
        cminstance = CssAddonsCodeMirror.length-1;
        //CssAddonsCodeMirror[cminstance].showHint('css');
        CssAddonsCodeMirror[cminstance].on('change', function(what){
            jQuery(what.getTextArea()).val(what.getValue()).trigger('change');
        });
        CssAddonsCodeMirror[cminstance].on('blur', function(what){
            jQuery(what.getTextArea()).val(what.getValue()).trigger('change');
        })
    }
    return false;
}

jQuery(document).ready(function ($) {
    jQuery('.css-addons-list input').change(function ($) {
        cssaddons_update();
    });
    cssaddons_update();
    cssaddons_refactor();
    $('.cssaddons-multi-editor').on('click focus', function(){
        cssaddons_editor(document.getElementById($(this).attr('id')));
    }).on('change', function(){
        _id = ($(this).attr('id')).replace('cssaddons-textarea-', '');
        $('a.thickbox#cssaddons-preview-'+_id+' code').text($(this).val());
    });

    $('.cssaddons-slug-field').on('keypress change blur', function(){
        $(this).val(str_replace(' ', '-', $(this).val()).toLowerCase())
    });

    $('#css-addons-form a.button-default').click(function(){
        i = $(this).data('id');
        newrow = $('#css-addons-form-list tr').last().clone();
        newrow.find('input, textarea').val('');
        newrow.html(str_replace('addons['+(i-1)+']','addons['+(i)+']',newrow.html()));
        newrow.appendTo('#css-addons-form-list');
        $(this).data('id',i+1);
        cssaddons_refactor();
        return false;
    });
});
