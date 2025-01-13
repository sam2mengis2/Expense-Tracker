function buttonpressed(){
    let expname = document.getElementById('expense-name').value;
    let expamt = document.getElementById('expense-amount').value;
    let exptype = document.getElementById('expense-type').value;
    let expdate = document.getElementById('expense-date').value;

    let exptable = document.getElementById('table-expenses');

    let newexprow = exptable.insertRow(exptable.rows.length);

    let editbuttn = document.createElement("button");
    let deletebuttn = document.createElement("button");
    editbuttn.textContent = "Edit";
    deletebuttn.textContent = "Delete";
    

    let editbuttnval = editbuttn.value;
    let deletebuttnval = deletebuttn.value;

        
    let cell1 = newexprow.insertCell(0);
    let cell2 = newexprow.insertCell(1);
    let cell3 = newexprow.insertCell(2);
    let cell4 = newexprow.insertCell(3);
    let cell5 = newexprow.insertCell(4);

    cell1.innerHTML = expname + "|";
    cell2.innerHTML = "$" + expamt + "|";
    cell3.innerHTML = exptype + "|";
    cell4.innerHTML = expdate + "|";
    cell5.appendChild(editbuttn);
    cell5.appendChild(deletebuttn);

    

    document.getElementById('running-total').textContent = "Total: " + sum;
}
