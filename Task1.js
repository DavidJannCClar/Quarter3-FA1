var Nickname = "David";
var height = 59;
var weight = 49;

   var HeightFeet = Math.floor(height / 12);
   var HeightRemaining = Math.floor(height % 12);
   var WeightPounds = Math.floor(weight * 2.20462);

      alert("Name: " + Nickname + "\nHeight: " + HeightFeet + "'" + HeightRemaining + "\"\nWeight: " + WeightPounds + " lbs");