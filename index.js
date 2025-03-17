var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i =0; i<numberOfDrumButtons; i++){

    document.querySelector(".drum")[i].addEventListener("click",function (){
        
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();

});

}

//document.querySelector("button").addEventListener("click",handleClick);

/* we want our button to trigger this function when it's clicked*/
//function handleClick(){
//    alert('I got clicked!!');
//}

//other way to do it:
//document.querySelector("button").addEventListener("click",function (){
//    alert('I got clicked!!');
//});