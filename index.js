var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i =0; i<numberOfDrumButtons; i++){
    document.querySelector(".drum")[i].addEventListener("click",function (){
        alert('I got clicked!!');

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