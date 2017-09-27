$(document).ready(function () {

    var converted_datas = [];

    $('#btndone').click(function (event) {
        event.preventDefault();

        if (localStorage.getItem("editkey") !== null && localStorage.getItem("editkey") !== 'undefined') {

            var received = localStorage.getItem("editkey");
            var exist = JSON.parse(localStorage.getItem("data"));

                exist[received] = {
                    "EVENTNAME": $("#eventname").val(),
                    "EVENTDATE": $("#eventdate").val(),
                    "EVENTSTATUS": $("#eventstatus").val(),
                    "LOCATION": $("#eventlocation").val(),
                    "AGENDA" : converted_datas
                };
            localStorage.setItem("data", JSON.stringify(exist));
            delete window.localStorage["editkey"];

        } else {

            var eventname = $("#eventname").val();
            var eventdate = $("#eventdate").val();
            var eventstatus = $("#eventstatus").val();
            var eventlocation = $("#eventlocation").val();

            var eventdatas = {
                "EVENTNAME": eventname,
                "EVENTDATE": eventdate,
                "EVENTSTATUS": eventstatus,
                "LOCATION": eventlocation,
                "AGENDA": converted_datas
            };

            var eform = document.getElementById("eventform");
            console.log(JSON.stringify(eventdatas));

            if (localStorage.getItem("data") !== null) {
                var oldevent = JSON.parse(localStorage.getItem("data"));
                oldevent.push((eventdatas));
                localStorage.setItem("data", JSON.stringify(oldevent));
            } else {
                var newevent = [];
                newevent.push(eventdatas);
                localStorage.setItem("data", JSON.stringify(newevent));
            }

        }

        window.location.href = "file:///C:/Users/aruna.c/Downloads/Event_Project_CRUD-master/index.html";

    });

    $('#btnadd').click(function (event) {
        event.preventDefault();
        var agendatime = $("#agendatime").val();
        var agendadesc = $("#agendadesc").val();
        var agendainstruction = $("#agendainstruction").val();
        // var data = document.getElementById("agendadatas");
        // agendadatas.innerHTML += "<tr><td></td><td>" + agendatime + "</td><td>" + agendadesc + "</td><td>" + agendainstruction + "</td><td><button id=\"btnedit\" class=\"btn btn-primary\">Edit</button></td><td><button id=\"btndel\" class=\"btn btn-primary\">Delete</button></td></tr>";

        var table = document.getElementById("agendadatas");
        var table_len = (table.rows.length) - 1;
        //  console.log(table_len);
        var rows = agendadatas.innerHTML += "<tr id =row" + table_len + "><td id=time_row" + table_len + ">" + agendatime + "</td><td id=desc_row" + table_len + ">" + agendadesc + "</td><td id = ins_row" + table_len + ">" + agendainstruction + "</td><td><input type='button' id=btnedit" + table_len + " value='Edit' class='edit btn btn-primary' onClick ='edit_row(" + table_len + ")'><input type='button' id=btnsave" + table_len + " value='Save' class='save btn btn-primary' style='display:none' onClick='save_row(" + table_len + ")'></td><td><input type='button' id=btndel" + table_len + " value='Delete' class='delete btn btn-primary' onClick='delete_row(" + table_len + ")'></td></tr>";
        // console.log(rows);
        var aform = document.getElementById("agendaform");
        aform.reset();

        var $headers = $("th");
        var $tablevalues = $("#agendadatas tbody tr").each(function (index) {
            $cells = $(this).find("td");
            converted_datas[index] = {};
            $cells.each(function (cellindex) {
                var cell = cellindex;
                if (cell !== 3 && cell !== 4 && cell !== 5) {
                    converted_datas[index][$($headers[cellindex]).html()] = $(this).html();
                }
            });
        });
        var myobj = {};
        myobj.converted_datas = converted_datas;
        console.log(JSON.stringify(converted_datas));
    });

});