$(document).ready(function(){

    $("#selectbutton").click(function(){
        console.log("arrives here");
        $("#output").append("<b>"+getRest()+"</b>");
    });

});

function getRest(){
  var restlist = ["Pho 11", "Panera Bread"];
  var randomRest = restlist[Math.floor(Math.random() * restlist.length)];
  console.log(randomRest);
  return randomRest;
}
