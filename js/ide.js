function formatText(tag) {
   var myTextArea = $('#code_input');
   var myTextAreaValue = myTextArea.value;
   var selected_txt = myTextAreaValue.substring(myTextArea.selectionStart, myTextArea.selectionEnd);
   var before_txt = myTextAreaValue.substring(0, myTextArea.selectionStart);
   var after_txt = myTextAreaValue.substring(myTextArea.selectionEnd, myTextAreaValue.length);
   myTextArea.value = before_txt + '<' + tag + '>' + selected_txt + '</' + tag + '>' + after_txt;
}
function preview() {
	var textbox , view ;
    textbox = $('#code_input');
	view = $("#iframeshow");
	view.html(textbox.value);
}

function onload(){
	var textarea = $("#code_input");
	textarea.onkeypress = function(e){
		if( e.which === 13)
		{
			this.value += "<br>";
		}
	}
}
