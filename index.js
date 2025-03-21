
//Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i =0; i<numberOfDrumButtons; i++){

    document.querySelector(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.buttonInnerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
     

});

}


//Detecting keyboard press

document.addEventListener('keypress', function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch(key){
        case "w":
            var audio_tom1 = new Audio('./sounds/tom-1.mp3');
            audio_tom1.play();
            break;
        
        case "a":
            var audio_tom2 = new Audio('./sounds/tom-2.mp3');
            audio_tom2.play();
            break;

        case "s":
            var audio_tom3 = new Audio('./sounds/tom-3.mp3');
            audio_tom3.play();
            break;  
            
        case "d":
            var audio_tom4 = new Audio('./sounds/tom-4.mp3');
            audio_tom4.play();
            break;

        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case "k":    
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('./sounds/kick.mp3');
            kick.play();
            break;


        default:
            console.log(buttonInnerHTML)
    }
       

}

function buttonAnimation(currentKey){
    var activeButon = document.querySelector("."+ currentKey);
    activeButon.classList.add("pressed");
    //we want the highlight to be removed after we clicked in some seconds so we know we have tapped it
    //we need a timeout function
    setTimeout(function(){
        activeButon.classList.remove("presed");

    },100
);



};

//document.querySelector("button").addEventListener("click",handleClick);

/* we want our button to trigger this function when it's clicked*/
//function handleClick(){
//    alert('I got clicked!!');
//}

//other way to do it:
//document.querySelector("button").addEventListener("click",function (){
//    alert('I got clicked!!');
//});
