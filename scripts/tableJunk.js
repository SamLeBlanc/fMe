function addMoveTable(arr) {
  if ($("#move-table")){
    $("#move-table").remove();
  }
  var myTableDiv = document.getElementById("move")
  var table = document.createElement('TABLE')
  var tableBody = document.createElement('TBODY')
  table.id = 'move-table'
  table.className = 'tableA'
  table.appendChild(tableBody);

  for (i = 0; i < arr.length; i++) {
    var tr = document.createElement('TR');
    for (j = 0; j < arr[i].length; j++) {
      var td = document.createElement('TD')
      td.appendChild(document.createTextNode(arr[i][j]));
      tr.appendChild(td)
    }
    tableBody.appendChild(tr);
  }
  myTableDiv.appendChild(table)
}

function createMoveTableArray(s,geoid,obj){
  var arr = [];
  arr.push([geoid,""])
  for (i = 0; i < s.length; i++){
    var num = obj[s[i]];
    num = formatNumber(num)
    arr.push([s[i],num]);
  }
  return arr
}

function createVariableDropdownSelect(id,list) {
  var x = document.getElementById(id);
  var length = x.length;
  for (i = length-1; i >= 0; i--) {
    x.options[i] = null;
  }
  for (const item of list) {
    var z = document.createElement("option");
    z.setAttribute("value", item);
    var s = " - "
    var tag = item.concat(s).concat(TAG[item])
    var t = document.createTextNode(tag);
    z.appendChild(t);
    x.appendChild(z);
    var z = document.createElement("option");
    z.setAttribute("value", item.concat("P"));
    var s = " - "
    var tag = item.concat("P").concat(s).concat(TAG[item.concat("P")])
    var t = document.createTextNode(tag);
    z.appendChild(t);
    x.appendChild(z);
  }
}