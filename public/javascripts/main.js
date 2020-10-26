var indexplayer;
var indexslot;

function closeattack() {
    $(".attackopers").addClass("hidden");
    sleep(100).then(() => {
        $(".attackopers").hide()
    });

}

function openattack(indexplayer, indexslot) {
    this.indexplayer = indexplayer;
    this.indexslot = indexslot;
    $(".attackopers").show();
    $(".attackopers").removeClass("hidden");
}

function closedefence() {
    $(".defenceopers").addClass("hidden");
    sleep(100).then(() => {
        $(".defenceopers").hide()
    });

}

function opendefence(indexplayer, indexslot) {
    this.indexplayer = indexplayer;
    this.indexslot = indexslot;
    $(".defenceopers").show();
    $(".defenceopers").removeClass("hidden");
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function resetplayerdata(){
    $.post("resetplayersdata", ()=>{
        document.location = '/';
    });
    
};

var socket = io.connect();
socket.on('connect', function () {
    socket.on('setoper', function (data) {
        console.log(data.idoper);
        if (data.idoper >= 0) {
            GetTemplateOper(data, 'attack');
        }
        else {
            $("#playerid" + data.indexplayer + "slotid" + data.indexslot + 'attack').html('<div class="empty"></div>')
          

        }
      
    });
    socket.on('setdefenceoper', function (data) {
        console.log(data.idoper);
        if (data.idoper >= 0) {
            GetTemplateOper(data, 'defence');
        }
        else {
            $("#playerid" + data.indexplayer + "slotid" + data.indexslot + 'defence').html('<div class="empty"></div>')
            
        }
        
    });
    socket.on('setname', function (data) {
        $(".player" + data.idfield).val(data.name);
        console.log(data.name);
    });
});

function SetName(indexplayer) {

    socket.emit('setname', indexplayer, $(".player" + indexplayer).val());
    $(".player" + indexplayer).val($(".player" + indexplayer).val());
}

function GetTemplateOper(data, type) {
    console.log(data);
    $.post("gettemplateoper", { idoper: data.idoper }, (datatemplate) => {

        $("#playerid" + data.indexplayer + "slotid" + data.indexslot + type).html(datatemplate);
     
    });
}


function setattackoper(idoper) {
    console.log("+");
    socket.emit('setoper', idoper, indexplayer, indexslot);
    closeattack();
}

function setdefenceoper(idoper) {
    socket.emit('setdefenceoper', idoper, indexplayer, indexslot);
    closedefence()
}

