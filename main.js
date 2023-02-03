//https://teachablemachine.withgoogle.com/models/Q6eHebnnZ/
Webcam.set({
    width: 300,
    height:300,
    image_format:'png',
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera')
function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="capture_img">'
    })
}
//console.log('ml5 works',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Q6eHebnnZ/model.json',modelisloaded)
 function modelisloaded() {
    console.log("Model is loaded")
 }
function check() {
    img = document.getElementById("capture_img");
    classifier.classify(img,gotResult)
}
function gotResult(error,results) {
    if(error) {
        console.error(error)
    }
    else{
        console.log(results)
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = (results[0].confidence * 100)+"%";
}}
