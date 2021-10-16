function eventHandler(){
    var audio = new Audio("sounds\tom-3.mp3") ;
    audio.play() ;
    alert("clicked") ;
}
var drums_array = document.querySelectorAll(".drum") ;
for (let i = 0; i < drums_array.length; i++) {
    drums_array[i].addEventListener("click",eventHandler) ;
}