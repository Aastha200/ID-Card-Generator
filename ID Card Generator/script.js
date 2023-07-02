document.getElementById("detailsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered details
    var name = document.getElementById("name").value;
    var roll = document.getElementById("cname").value;
    var course = document.getElementById("loc").value;
    var image = document.getElementById("image").files[0];

    // Display details on the card
    document.getElementById("cardName").textContent = name;
    document.getElementById("cardRoll").textContent = roll;
    document.getElementById("cardCourse").textContent = course;

    // Display image on the card
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("cardImage").src = e.target.result;
    };
    reader.readAsDataURL(image);
  });