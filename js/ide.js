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
$(document).ready(function(){
    fetch("http://127.0.0.1:8000/api/contests/", {
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
                $('#selectContest').append(
                    $('<option>', {
                            value: data['data'][i]['contest_code'],
                            text: data['data'][i]['title']
                        }
                    )
                );
                //$('#test').html(data['data'][i]['display_name'].split('\\n').join('<br>'));
            }
    })

});
$('#selectContest').change(function(){
    var contest_code = $(this).val()
    alert(contest_code)

    fetch('http://127.0.0.1:8000/api/contests/problems/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'contest_code':contest_code})
    }).then(res=>res.json())
      .then(res => console.log(res));

});
