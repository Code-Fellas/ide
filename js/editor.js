(function() {
    'use strict';

    var editor = document.getElementById('codes');
    var codeMirror = CodeMirror.fromTextArea(editor, {
        lineNumbers: true,
        mode: 'htmlmixed',
        theme: 'solarized dark'
    });

    $('.themeSwitcher').on('change', function (e) {
        btnColor($(this).prop('checked'), codeMirror);
    });

    function btnColor(btn, codeMirror) {
        var property = document.getElementById('codes')
        var property1 = document.getElementById('code')


        if (btn == false) {
            document.body.style.background = '#FFFFFF';
            property.style.backgroundColor='#FFFFFF';
            property1.style.backgroundColor='#c5c6c9';
            codeMirror.setOption("theme", "base16-light");
        }
        else {
            document.body.style.background = '#696969';
            property.style.backgroundColor='#000000';
            property1.style.backgroundColor='#000000';
            codeMirror.setOption("theme", "solarized dark");
        }
    }

})();
