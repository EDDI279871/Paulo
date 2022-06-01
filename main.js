function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')

    if (results[0].label == "Aplausos") {
      img.src = 'pepe.gif';
      img1.src = 'pepe chikito.png';
    } else if (results[0].label == "Campana") {
      img.src = 'pepe.png';
      img1.src = 'pepe chikito.gif';
    } else if (results[0].label == "Chasquido") {
      img.src = 'pepe.gif';
      img1.src = 'pepe chikito.png';
    }else{
      img.src = 'pepe.png';
      img1.src = 'pepe chikito.gif';
    }
  }
}
