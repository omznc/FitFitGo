function copyElement(a) {
  navigator.clipboard.writeText(a.innerHTML);
  a.style.backgroundColor = "green";
}

function mouseut(a) {
  a.style.backgroundColor = rgb(216, 216, 216);
}

var oldsearches = [];

function search() {
  var thediv = document.getElementById('tableBox');
  var found = 0;
  let req = new XMLHttpRequest();
  var IB, firstname, lastname, email, email_reversed;
  nameKey = String(document.getElementById("IB").value);
  if (!(/[I,B]{2}\d{6}/.test(nameKey))){document.getElementById("IB").value = "Krivi format";}
  else{
    if (oldsearches.includes(nameKey)){document.getElementById("IB").value = "Vec ste pretrazili to";}
    else{
    document.getElementById('submit').innerText = "Searching...";
    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        array = JSON.parse(req.responseText)["record"];
        for (var i = 0; i < array.length; i++) {
          if (array[i]["IB"] === nameKey) {
            IB = array[i]["IB"];
            firstname = array[i]["normal"]["name"];
            lastname = array[i]["normal"]["lastname"];
            email = array[i]["normal"]["email"];
            email_reversed = array[i]["reversed"]["email"];
            found = 1;
            oldsearches.push(nameKey);
            document.getElementById('submit').innerText = "Search";
            document.getElementById("IB").value = "";
            break;
          }
          }
          if (found){
            var toaddshitto = document.getElementById("pleaseaddtheshithere");
            toaddshitto.innerHTML+= `<tr>
                                      <td><p onclick="copyElement(this)" onmouseout="mouseut(this)">${IB}</p></td>
                                      <td><p onclick="copyElement(this)" onmouseout="mouseut(this)">${firstname}</p></td>
                                      <td><p onclick="copyElement(this)" onmouseout="mouseut(this)">${lastname}</p></td>
                                      <td><p onclick="copyElement(this)" onmouseout="mouseut(this)">${email}</p></td>
                                      <td><p onclick="copyElement(this)" onmouseout="mouseut(this)">${email_reversed}</p></td>
                                    </tr>`
            thediv.style.display = "block";
          }
          else {
            document.getElementById("IB").value = "IB nije pronađen";
          }
        }
      }
  }
 
  };

  req.open(
    "GET",
    "https://api.jsonbin.io/v3/b/60c0b1c992164b68bec73052/latest",
    true
  );


  req.send();
}
