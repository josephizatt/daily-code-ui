var form = document.getElementById('form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {

  e.preventDefault();

});

function validateForm() {
    var list = document.forms["form"]["list"].value;
    var k = document.forms["form"]["k"].value;
    if (list == "") {
      alert("List must be filled out");
      return false;
    }
    document.getElementById("result").innerHTML = "<p>" + two_sum(list, k) + "</p>";
}


let two_sum = function(list, k) {
    for(var i = 0; i < list.length; i++) {
        for(var j =0; j < list.length; j++) {
            if(i != j && list[i] + list[j] === k) {
                return true;
            } 
        }
    }
    return false;
}