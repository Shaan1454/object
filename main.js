img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="detecting object"
}
function modelLoaded(){
    console.log('modelLoaded');
    objectDetector.detect(img, gotResults);
}
function gotResults(error, reslts){
    if(error){
        console.log(error);
    }
    console.log("reslts");
}
function draw(){
    image(img, 0, 0, 640, 480);
    fill("red");
    text("dog", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350);

    fill("red");
    text("cat", 320, 120)
    noFill();
    stroke("red");
    rect(300, 90, 270, 320);
}