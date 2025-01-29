  var FirstName = prompt("Enter your first name:");
  var LastName = prompt("Enter your last name:");
  var BirthYear = prompt("Enter your birth year:");

    var CurrentYear = new Date().getFullYear();
    var AGE = CurrentYear - BirthYear;

        document.getElementById("output").innerHTML = "Hello " + FirstName + " " + LastName + "! How does it feel to be " + AGE + " years old?";