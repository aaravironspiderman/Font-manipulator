var nose_X = 0;
var nose_y = 0;

var leftwrist_position = 0;
var rightwrist_position = 0;

var text_length = 0;



function setup() {
    canvas = createCanvas(400, 400);
    background("white");
    canvas.position(550, 200);

    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', got_poses);
}


function draw() {

    background("white");
    textSize(textSize)
    fill("orange");
    text('Aarav',nose_X,nose_y)
   

}

function modelloaded() {
    console.log("PoseNet is Initialized");
}

function got_poses(results) {

    if (results.length > 0) {
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
     
        leftwrist_position = results[0].pose.leftWrist.x;
        rightwrist_position = results[0].pose.rightWrist.x;

        font_length = floor(leftwrist_position - rightwrist_position);

        document.getElementById("text_size").innerHTML =" Size of Font is   " + text_length;
           

    }
}