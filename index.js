// Get Element
var drum = document.querySelectorAll(".drum");
var drums = document.querySelector(".drum");
// Create variable
var listImgAndSound = [['k','crash'], ['l','kick'], ['j','snare'], ['w','tom1'],['a', 'tom2'], ['s','tom3'], ['d','tom4']]
// Create function playDrumSound
function playDrumSound (drum, listImgAndSound) {
    for (i=0; i < listImgAndSound.length; i++) {
            var char = listImgAndSound[i][0]
            if (drum === char) {
                var drumPlay = new Audio(`sounds/${listImgAndSound[i][1]}.mp3`);
                drumPlay.play();
            }
        }
};

// Create function buttonAnimation
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // Add class & connect with CSS to show animation in front end.
    activeButton.classList.add("pressed");
    setTimeout(function() {activeButton.classList.remove("pressed")}, 100);
}

// Event Listener: Click & play audio
for (var i=0; i<drum.length; i++) {
    drum[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        playDrumSound(buttonInnerHTML, listImgAndSound);
        buttonAnimation(buttonInnerHTML);
    })
};

// Event Listener: when user click any button on keyboard, run function.
// Kích hoạt cho toàn bộ document luôn chứ không chỉ cho riêng phần tử như việc get element hay query selector.
// function also has variable of it = "event". In this case, "event" variable will save Event info. I can use it later inside the function
document.addEventListener("keydown", function(event) {
    var eventKey = event.key;
    playDrumSound(eventKey, listImgAndSound);
    buttonAnimation(eventKey);
});

