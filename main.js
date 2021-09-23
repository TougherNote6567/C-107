

function makeSound(){
    navigator.mediaDevices.getUserMedia({
        audio : true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/sPqGTxzsE/model.json", function (){
        console.log("model loaded");
    });
}