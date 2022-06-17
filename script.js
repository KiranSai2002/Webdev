var entry= document.getElementById("entry");
//entry.addEventListener("onclick",displayDetails);
/*this ensures when someone clicks on button the function is called */

var row=1;

function displayDetails(){
    var name= document.getElementById("name").value;
    var email=document.getElementById("email").value;

    /*to check all details are filled*/
    if(!name || !email){
        alert("Pleases fill all details");
        return; //whole function stop executing if return is encoundered
    }
    var display=document.getElementById("display")
    var newRow=display.insertRow(row);//here row is index
  var cell1=newRow.insertCell(0);
  //reference new row we created
  var cell2=newRow.insertCell(1);

  //to append text use inner html property.
  cell1.innerHTML=name;
  cell2.innerHTML=email;

  row++;//to add new rows to add cells
}