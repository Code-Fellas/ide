(function() {
    'use strict';

    var editor = document.getElementById('codes');
    var codeMirror = CodeMirror.fromTextArea(editor, {
        lineNumbers: true,
        mode: 'htmlmixed',
        theme: 'solarized dark'
    });
})();
