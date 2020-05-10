function order(IdOrder, TimeOut){
    console.log("id ordr :"+IdOrder);
    ProsessOrder(IdOrder,TimeOut);
}

function ProsessOrder(IdOrder,TimeOut){
    setTimeout(function(){
            console.log("id order "+IdOrder+"processs");

    },TimeOut);
}

order(101,5000);
order(102,2000);
order(103,4000);