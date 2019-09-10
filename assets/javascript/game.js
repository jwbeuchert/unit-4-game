$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19)


$("#randomNumber").text(random);

var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var userTotal= 0;
var wins= 0;
var losses= 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);


function reset(){
    random=Math.floor(Math.random()*101+19);
    console.log(random)
    $("#randomNumber").text(random);
        num1= math.floor(Math.random()*11+1);
        num2= math.floor(Math.random()*11+1);
        num3= math.floor(Math.random()*11+1);
        num4= math.floor(Math.random()*11+1);
        userTotal= 0;
        $("#finalTotal").text(userTotal);
}

function yes(){
    alert("You Won!");
    wins++;
    $("#numberWins").test(wins);
    reset();
}
function loser(){
    alert ("#You lose!");
    losses++;
    $("#numberLosses").test(losses);
    reset();
}
$("#one").on("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);

    if(userTotal == random){
        yes();
    }
    else if(userTotal > random){
        loser();
    }
})

$("#two").on("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal=" + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == random){
        yes();
    }
        else if (userTotal > random){
            loser();
        }
    })

    $("#three").on("click", function(){
        userTotal = userTotal + num3;
        console.log("New userTotal=" + userTotal);
        $("#finalTotal").text(userTotal);

        if (userTotal == random){
            yes();
        }
        else if (userTotal > random){
            loser()
        };
    })

    $("#four").on("click", function(){
        userTotal = userTotal + num4;
        console.log("New userTotal=" + userTotal);
        $("#finalTotal").text(userTotal);

        if (userTotal == random){
            yes();
        }
        else if (userTotal > random){
            loser();
        }
    });
});