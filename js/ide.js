$(document).ready(function(){
    fetch("http://127.0.0.1:8000/api/ide/", {
        method: "GET",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((data) => {
            for(var i=0;i<data['data'].length;i+=1)
            {
                $('#selectLang').append(
                    $('<option>', {
                            value: data['data'][i]['language_code'],
                            text: data['data'][i]['display_name']
                        }
                    )
                );
                //$('#test').html(data['data'][i]['display_name'].split('\\n').join('<br>'));
            }
    })

});