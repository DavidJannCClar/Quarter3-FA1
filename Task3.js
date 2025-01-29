var shareInfo = confirm("Do you agree to share your personal information with our site?");

if (shareInfo) {
    console.log("Name: " + Nickname + "\nHeight: " + HeightFeet + "'" + HeightRemaining + "\"\nWeight: " + WeightPounds + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}