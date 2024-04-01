cat = 0;
dog = 0;
dino = 0;
snake = 0;

function detect() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/UeKNbharw/", modelReady)
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    if (results) {
        console.log(results);
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;
        document.getElementById("label1").innerHTML = "Name of animal - " + results[0].label;
        document.getElementById("label2").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("label1").style.color = "rgb(" + red + "," + green + "," + blue + ");";
        document.getElementById("label2").style.color = "rgb(" + red + "," + green + "," + blue + ");";
        img1 = "Cat.gif";
        img2 = "Dog.gif";
        img3 = "Dinosaur.gif";
        img4 = "Snake.gif";
        if (results == "Bark") {
            document.getElementById("i").innerHTML = "<img src='" + img2 + "'</img>";
        } else if (results == "Meow") {
            document.getElementById("i").innerHTML = "<img src='" + img1 + "'</img>";
        } else if (results == "Hiss") {
            document.getElementById("i").innerHTML = "<img src='" + img4 + "'</img>";
        } else if (results == "Roar") {
            document.getElementById("i").innerHTML = "<img src='" + img3 + "'</img>";
        }else{document.getElementById("i").innerHTML = "<img src=" + 'https://i.gifer.com/origin/6f/6f494d1b41ea80e5853933d00771ae49_w200.gif' + "</img>";}
    }
}
