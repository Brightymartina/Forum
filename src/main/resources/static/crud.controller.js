function edit_row(no) {
    //console.log(no);
    // var table = document.getElementById("agendadatas");
    // var table_len = (table.rows.length)-1;
    // var row = table.insertRow(table_len).outerHTML = "<tr id ='row'"+table_len+"><td id='time_row'"+table_len+">"+agendatime+"</td><td id='desc_row'"+table_len+">"+agendadesc+"</td><td id = 'ins_row'"+table_len+">"+agendainstruction+"</td><td><button id='btnedit'"+table_len+"class='edit' onclick ='edit_row("+table_len+")'></button></td><td><button id='btnsave'"+table_len+" class='save' onclick='save_row("+table_len+")'></button></td><td><button id='btndel'"+table_len+" class='delete' onclick='delete_row("+table_len+")'></button></td></tr>"

    document.getElementById("btnedit" + no).style.display = "none";
    document.getElementById("btnsave" + no).style.display = "block";

    var time = document.getElementById("time_row" + no).innerText;
    var desc = document.getElementById("desc_row" + no).innerText;
    var ins = document.getElementById("ins_row" + no).innerText;

    document.getElementById('agendatime').value = time;
    document.getElementById('agendadesc').value = desc;
    document.getElementById('agendainstruction').value = ins;

    // var agendatime = $("#agendatime").val();
    // var agendadesc = $("#agendadesc").val();
    // var agendainstruction = $("#agendainstruction").val();

    // var time_data = time.innerHTML;
    // console.log(time_data);
    // var desc_data = desc.innerHTML;
    // var ins_data = ins.innerHTML;

    // time_data.innerHTML = "<input type='text' id='time_text'" + no + "value='" + time_data + "'>";
    // desc_data.innerHTML = "<input type='text' id='desc_text'" + no + "value='" + desc_data + "'>";
    // ins_data.innerHTML = "<input type='text' id='ins_text'" + no + "value='" + ins_data + "'>";

}

function save_row(no) {

    var text_time = document.getElementById('agendatime').value;
    var text_desc = document.getElementById('agendadesc').value;
    var text_ins = document.getElementById('agendainstruction').value;

    document.getElementById("time_row" + no).innerText = text_time;
    document.getElementById("desc_row" + no).innerText = text_desc;
    document.getElementById("ins_row" + no).innerText = text_ins;

    var aform = document.getElementById("agendaform");
    aform.reset();

    // var time_val = document.getElementById("time_text" + no);
    // var desc_val = document.getElementById("desc_text" + no);
    // var ins_val = document.getElementById("ins_text" + no);

    // document.getElementById("time_row" + no).innerHTML = time_val;
    // document.getElementById("desc_row" + no).innerHTML = desc_val;
    // document.getElementById("ins_row" + no).innerHTML = ins_val;

    document.getElementById("btnedit" + no).style.display = "block";
    document.getElementById("btnsave" + no).style.display = "none";
}

function delete_row(no) {

    document.getElementById("row" + no).innerHTML = "";
}

function getItem() {

    // document.getElementById("eventname").innerHTML = localStorage.EVENTNAME;
    // document.getElementById("eventdate").innerHTML = localStorage.EVENTDATE;
    // document.getElementById("eventstatus").innerHTML = localStorage.EVENTSTATUS;
    // document.getElementById("eventlocation").innerHTML = localStorage.LOCATION;
    json = JSON.parse(localStorage.getItem("data"));
    // json = JSON.stringify(fields);
    // console.log(json.length);
    for (var i = 0; i < json.length; i++) {
        var splitdata = json[i];
        $("#index tbody").append("<tr><td><button id = 'Edit" + i + "' onclick='indexEdit(" + i + ")'><i class='fa fa-pencil' aria-hidden='true'></i></button><button  id = 'Delete" + i + "' onclick='indexDelete(" + i + ")'><i class='fa fa-trash' aria-hidden='true'></i></button></td><td>" + splitdata.EVENTNAME + "</td><td>" + splitdata.EVENTDATE + "</td><td>" + splitdata.EVENTSTATUS + "</td><td>" + splitdata.LOCATION + "</td></tr>");
    }
    // console.log(JSON.stringify(fields));
    //  for (var i in json) {
    //    var splitdata = json[i];
    //    console.log(splitdata.EVENTNAME);
    //    $("#index tbody").append("<tr><td>" + splitdata.EVENTNAME + "</td><td>" + splitdata.EVENTDATE + "</td><td>" + splitdata.EVENTSTATUS + "</td><td>" + splitdata.LOCATION + "</td></tr>");
    //  }<img src='edit.png' alt='Edit" + i + "' class='indexedit'/><img src='delete.png' alt='Delete" + i + "' class='indexdelete'/>
    // 'class='indexedit'
}

function indexDelete(no) {
    var remove = JSON.parse(localStorage.getItem("data"));
    remove.splice(no, 1);
    localStorage.setItem("data", JSON.stringify(remove));
    window.location.href = "file:///C:/Users/aruna.c/Downloads/Event_Project_CRUD-master/index.html";

}

function indexEdit(no) {

    localStorage.setItem("editkey", no);
    window.location.href = "http://127.0.0.1:5500/AddEvent.html";

}

function validatekey() {

    var received = localStorage.getItem("editkey");
    var exist = JSON.parse(localStorage.getItem("data"));

    // if (localStorage.getItem("editkey") !== null) {
    //     exist[received] = JSON.stringify({
    document.getElementById("eventname").value = exist[received].EVENTNAME;
    document.getElementById("eventdate").value = exist[received].EVENTDATE;
    document.getElementById("eventstatus").value = exist[received].EVENTSTATUS;
    document.getElementById("eventlocation").value = exist[received].LOCATION;
    var agendas = exist[received].AGENDA;
    console.log(agendas);
    for (var i = 0; i < agendas.length; i++) {
        var splitagenda = agendas[i];
        console.log(i);
        agendadatas.innerHTML += "<tr id =row" + i + "><td id=time_row" + i + ">" + splitagenda.AGENDATIME + "</td><td id=desc_row" + i + ">" + splitagenda.AGENDADESC + "</td><td id = ins_row" + i + ">" + splitagenda.AGENDAINSTRUCTION + "</td><td><input type='button' id=btnedit" + i + " value='Edit' class='edit btn btn-primary' onClick ='edit_row(" + i + ")'><input type='button' id=btnsave" + i + " value='Save' class='save btn btn-primary' style='display:none' onClick='save_row(" + i + ")'></td><td><input type='button' id=btndel" + i + " value='Delete' class='delete btn btn-primary' onClick='delete_row(" + i + ")'></td></tr>";
        // document.getElementById("agendatime").value = splitagenda.AGENDATIME;
        // document.getElementById("agendadesc").value = splitagenda.AGENDADESC;
        // document.getElementById("agendainstruction").value = splitagenda.AGENDAINSTRUCTION;
    }

    var converted = [];
    var $headers = $("th");
    var $tablevalues = $("#agendadatas tbody tr").each(function (index) {
        $cells = $(this).find("td");
        converted[index] = {};
        $cells.each(function (cellindex) {
            var cell = cellindex;
            if (cell !== 3 && cell !== 4 && cell !== 5) {
                converted[index][$($headers[cellindex]).html()] = $(this).html();
            }
        });
    });
    var myobj = {};
    myobj.converted = converted;
    //     });
    // }

    // localStorage.setItem("data", exist);
}


// function update() {

//     var received = localStorage.getItem("editkey");
//     var exist = JSON.parse(localStorage.getItem("data"));

//     if (localStorage.getItem("editkey") !== null) {
//         exist[received] = JSON.stringify({
//             eventname: $("#eventname").val(),
//             eventdate: $("#eventdate").val(),
//             eventstatus: $("#eventstatus").val(),
//             eventlocation: $("#eventlocation").val()
//         });
//     }
//         console.log(exist);
//         return false;

//     localStorage.setItem("editkey", exist);
//     delete window.localStorage["editkey"];

// }



