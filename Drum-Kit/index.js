var buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var buttonInnerhtml= this.innerHTML;
        makesound(buttonInnerhtml)
    });
});

addEventListener("keydown", ()=>{
  makesound(event.key)
})


function makesound(key){
  switch(key){
    case 'a':
      var audio= new Audio("sounds/tom-1.mp3")
      audio.play(); 
    case 's':
      var audio= new Audio("sounds/tom-2.mp3")
      audio.play();
    case 'd':
      var audio= new Audio("sounds/tom-3.mp3")
      audio.play();
    case 'f':
      var audio= new Audio("sounds/tom-4.mp3")
      audio.play();
    case 'j':
      var audio= new Audio("sounds/snare.mp3")
      audio.play();
    case 'k':
      var audio= new Audio("sounds/crash.mp3")
      audio.play();
    case 'l':
      var audio= new Audio("sounds/kick-bass.mp3")
      audio.play();   
    default:
      console.log(buttonInnerhtml)   
  }

}

// var audio= new Audio("sounds/tom-1.mp3")
//         audio.play(); 
// function handleclick(){
//   alert("I got clicked");
// }