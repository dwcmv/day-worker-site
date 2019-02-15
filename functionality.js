



function myFunction() {
  var table = document.getElementById("workers");
  var count = table.rows.length;
  var row = table.insertRow(count);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);


  var x = document.getElementById("register");

  cell1.innerHTML = count;
  cell2.innerHTML = x.elements[0].value;

  var skills = " ";
  if(document.getElementById("hs").checked)
  {
  	skills += "housekeeping,  ";
  }
  if(document.getElementById("gd").checked)
  {
  	skills += "gardening,  ";
  }
  if(document.getElementById("pb").checked)
  {
  	skills += "plumbing" ;
  }

  cell3.innerHTML = skills;


  cell4.innerHTML = '<label class="switch"><input type="checkbox"><span class="slider round"></span></label>'

  cell5.innerHTML= '<button class="btn" onclick="removeRow(' + cell1.innerHTML + ');"><i class="fa fa-trash"></i></button>'
  
}




function searchFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  table = document.getElementById("workers");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function skillSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("skillF");
  filter = input.value.toUpperCase();
  table = document.getElementById("workers");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


function removeRow(index){


  document.getElementById("workers").deleteRow(index);

  var input, filter, table, tr, td, i, txtValue, hold;
  input = document.getElementById("skillF");
  filter = input.value.toUpperCase();
  table = document.getElementById("workers");
  tr = table.getElementsByTagName("tr");
  for (i = index; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      hold = td.innerHTML-1
      td.innerHTML= hold;
    }
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      td.innerHTML='<button class="btn" onclick="removeRow(' + hold + ');"><i class="fa fa-trash"></i></button>'
    }    
  }

}





