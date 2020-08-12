//Container
var container = document.createElement("div");
container.className = "container";
//heading
var head = document.createElement("h1");
head.innerText = "Enter Data Table From Form Entry";
head.setAttribute(
  "style",
  "text-align: center;color: white; background:#303030;padding:20px"
);
container.appendChild(head);
//form
var form = document.createElement("form");
form.setAttribute("style", "padding: 40px");
form.setAttribute("onsubmit", "AddRow()");
//row
var row = document.createElement("div");
row.className = "form-row";
//First Name
var fDiv = document.createElement("div");
fDiv.className = "form-group col-md-6";
var labelFname = document.createElement("label");
labelFname.setAttribute("for", "fname");
labelFname.innerText = "First Name";
var inputFname = document.createElement("input");
inputFname.setAttribute("type", "text");
inputFname.setAttribute("class", "form-control");
inputFname.setAttribute("id", "fname");
inputFname.setAttribute("placeholder", "First Name");
inputFname.setAttribute("required", "true");
fDiv.appendChild(labelFname);
fDiv.appendChild(inputFname);
//Second Name
var lDiv = document.createElement("div");
lDiv.className = "form-group col-md-6";
var labelLname = document.createElement("label");
labelLname.setAttribute("for", "lname");
labelLname.innerText = "Last Name";
var inputLname = document.createElement("input");
inputLname.setAttribute("type", "text");
inputLname.setAttribute("class", "form-control");
inputLname.setAttribute("required", "true");
inputLname.setAttribute("id", "lname");
inputLname.setAttribute("placeholder", "Last Name");
lDiv.appendChild(labelLname);
lDiv.appendChild(inputLname);
//address
var aDiv = document.createElement("div");
aDiv.className = "form-group";
var labelAddress = document.createElement("label");
labelAddress.setAttribute("for", "address");
labelAddress.innerText = "Address";
var inputAddress = document.createElement("input");
inputAddress.setAttribute("type", "text");
inputAddress.setAttribute("class", "form-control");
inputAddress.setAttribute("required", "true");
inputAddress.setAttribute("id", "address");
inputAddress.setAttribute("placeholder", "1234 Main St, Apartment, City");
aDiv.appendChild(labelAddress);
aDiv.appendChild(inputAddress);
//row2(pin,state,country)
var row2 = document.createElement("div");
row2.className = "form-row";
//state
var sDiv = document.createElement("div");
sDiv.className = "form-group col-md-5";
var labelState = document.createElement("label");
labelState.setAttribute("for", "state");
labelState.innerText = "State";
var inputState = document.createElement("select");
inputState.className = "form-control";
inputState.setAttribute("id", "state");
var options = document.createElement("option");
options.innerText = "Choose the state";
options.selected = true;
var option1 = document.createElement("option");
option1.innerText = "Andhra Pradesh";
var option2 = document.createElement("option");
option2.innerText = "Tamil Nadu";
var option3 = document.createElement("option");
option3.innerText = "Uttarkhand";
inputState.appendChild(options);
inputState.appendChild(option1);
inputState.appendChild(option2);
inputState.appendChild(option3);

sDiv.appendChild(labelState);
sDiv.appendChild(inputState);
//Country
var cDiv = document.createElement("div");
cDiv.className = "form-group col-md-4";
var labelCountry = document.createElement("label");
labelCountry.setAttribute("for", "country");
labelCountry.innerText = "Country";
var inputCountry = document.createElement("select");
inputCountry.className = "form-control";
inputCountry.setAttribute("id", "country");
var options4 = document.createElement("option");
options4.innerText = "Choose the country";
options4.selected = true;
var option5 = document.createElement("option");
option5.innerText = "India";
inputCountry.appendChild(options4);
inputCountry.appendChild(option5);

cDiv.appendChild(labelCountry);
cDiv.appendChild(inputCountry);
//pincode
var pDiv = document.createElement("div");
pDiv.className = "form-group col-md-3";
var labelPincode = document.createElement("label");
labelPincode.setAttribute("for", "pincode");
labelPincode.innerText = "Pincode";
var inputPincode = document.createElement("input");
inputPincode.className = "form-control";
inputPincode.setAttribute("id", "pincode");
inputPincode.setAttribute("type", "number");

pDiv.appendChild(labelPincode);
pDiv.appendChild(inputPincode);
//row3(gender,choice of food(must choose at least 2 out of 5 options))
var row3 = document.createElement("div");
row3.className = "row";
//gender
var gDiv = document.createElement("div");
gDiv.className = "form-check col-md-4";
var labelGender = document.createElement("label");
labelGender.innerText = "Select Gender";
labelGender.setAttribute("id", "gender");
//male
var mDiv = document.createElement("div");
mDiv.className = "form-check";
var inputMale = document.createElement("input");
inputMale.setAttribute("type", "radio");
inputMale.setAttribute("class", "form-check-input");
inputMale.setAttribute("id", "male");
inputMale.setAttribute("name", "gender");
inputMale.setAttribute("value", "Male");
var labelMale = document.createElement("label");
labelMale.className = "form-check-label";
labelMale.setAttribute("for", "male");
labelMale.innerText = "Male";
mDiv.appendChild(inputMale);
mDiv.appendChild(labelMale);
//female
var feDiv = document.createElement("div");
feDiv.className = "form-check ";
var inputFemale = document.createElement("input");
inputFemale.setAttribute("type", "radio");
inputFemale.setAttribute("class", "form-check-input");
inputFemale.setAttribute("id", "female");
inputFemale.setAttribute("name", "gender");
inputFemale.setAttribute("value", "Female");
var labelFemale = document.createElement("label");
labelFemale.className = "form-check-label";
labelFemale.setAttribute("for", "female");
labelFemale.innerText = "Female";
feDiv.appendChild(inputFemale);
feDiv.appendChild(labelFemale);
//choice of food(must choose at least 2 out of 5 options)
var foodDiv = document.createElement("div");
foodDiv.className = "form-check col-md-8";
var labelFood = document.createElement("p");
labelFood.innerText = "Please Select favorite food (min 2 items)";
//item1
var item1 = document.createElement("div");
item1.className = "form-check form-check-inline";
var inputItem1 = document.createElement("input");
inputItem1.className = "form-check-input";
inputItem1.setAttribute("name", "chk");
inputItem1.setAttribute("type", "checkbox");
inputItem1.setAttribute("id", "item1");
inputItem1.setAttribute("value", "Ice Cream");
var labelItem1 = document.createElement("label");
labelItem1.setAttribute("for", "item1");
labelItem1.className = "form-check-label";
labelItem1.innerText = "Ice Cream";
item1.appendChild(inputItem1);
item1.appendChild(labelItem1);
//item2
var item2 = document.createElement("div");
item2.className = "form-check form-check-inline";
var inputItem2 = document.createElement("input");
inputItem2.className = "form-check-input";
inputItem2.setAttribute("type", "checkbox");
inputItem2.setAttribute("name", "chk");
inputItem2.setAttribute("id", "item2");
inputItem2.setAttribute("value", "Pizza");
var labelItem2 = document.createElement("label");
labelItem2.setAttribute("for", "item2");
labelItem2.className = "form-check-label";
labelItem2.innerText = "Pizza";
item2.appendChild(inputItem2);
item2.appendChild(labelItem2);
//item3
var item3 = document.createElement("div");
item3.className = "form-check form-check-inline";
var inputItem3 = document.createElement("input");
inputItem3.className = "form-check-input";
inputItem3.setAttribute("type", "checkbox");
inputItem3.setAttribute("name", "chk");
inputItem3.setAttribute("id", "item3");
inputItem3.setAttribute("value", "Hazelnut Capaccino");
var labelItem3 = document.createElement("label");
labelItem3.setAttribute("for", "item3");
labelItem3.className = "form-check-label";
labelItem3.innerText = "Hazelnut Capaccino";
item3.appendChild(inputItem3);
item3.appendChild(labelItem3);
//item4
var item4 = document.createElement("div");
item4.className = "form-check form-check-inline";
var inputItem4 = document.createElement("input");
inputItem4.className = "form-check-input";
inputItem4.setAttribute("type", "checkbox");
inputItem4.setAttribute("name", "chk");
inputItem4.setAttribute("id", "item4");
inputItem4.setAttribute("value", "Chocolate Crusher");
var labelItem4 = document.createElement("label");
labelItem4.setAttribute("for", "item4");
labelItem4.className = "form-check-label";
labelItem4.innerText = "Chocolate Crusher";
item4.appendChild(inputItem4);
item4.appendChild(labelItem4);
//item5
var item5 = document.createElement("div");
item5.className = "form-check form-check-inline";
var inputItem5 = document.createElement("input");
inputItem5.className = "form-check-input";
inputItem5.setAttribute("type", "checkbox");
inputItem5.setAttribute("name", "chk");
inputItem5.setAttribute("id", "item5");
inputItem5.setAttribute("value", "Caramel PopCorn");
var labelItem5 = document.createElement("label");
labelItem5.setAttribute("for", "item5");
labelItem5.className = "form-check-label";
labelItem5.innerText = "Caramel PopCorn";
item5.appendChild(inputItem5);
item5.appendChild(labelItem5);
//Submit Button
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute(
  "style",
  "text-align:center;padding 10px;margin-top:10px;margin-bottom:-10px"
);
var button = document.createElement("button");
button.className = "btn btn-secondary";
button.setAttribute("type", "submit");
button.innerText = "Submit";
buttonDiv.appendChild(button);
button.setAttribute("id", "btn");
button.setAttribute("value", "Add");

var table = document.createElement("table");
table.className = "table table-dark";
table.setAttribute("id", "show");
table.setAttribute("style", "margin-top:10px");
var tableRow = document.createElement("tr");
var heading1 = document.createElement("th");
heading1.innerText = "First Name";
heading1.setAttribute("scope", "col");
tableRow.appendChild(heading1);
var heading2 = document.createElement("th");
heading2.innerText = "Last Name";
heading2.setAttribute("scope", "col");
tableRow.appendChild(heading2);
var heading3 = document.createElement("th");
heading3.innerText = "Address";
heading3.setAttribute("scope", "col");
tableRow.appendChild(heading3);
var heading4 = document.createElement("th");
heading4.innerText = "State";
heading4.setAttribute("scope", "col");
tableRow.appendChild(heading4);
var heading5 = document.createElement("th");
heading5.innerText = "Country";
heading5.setAttribute("scope", "col");
tableRow.appendChild(heading5);
var heading6 = document.createElement("th");
heading6.innerText = "Pincode";
heading6.setAttribute("scope", "col");
tableRow.appendChild(heading6);
var heading7 = document.createElement("th");
heading7.innerText = "Gender";
heading7.setAttribute("scope", "col");
tableRow.appendChild(heading7);
var heading8 = document.createElement("th");
heading8.innerText = "Fav Food";
heading8.setAttribute("scope", "col");
tableRow.appendChild(heading8);
table.appendChild(tableRow);

foodDiv.appendChild(labelFood);
foodDiv.appendChild(item1);
foodDiv.appendChild(item2);
foodDiv.appendChild(item3);
foodDiv.appendChild(item4);
foodDiv.appendChild(item5);

gDiv.appendChild(labelGender);
gDiv.appendChild(mDiv);
gDiv.appendChild(feDiv);

row3.appendChild(gDiv);
row3.appendChild(foodDiv);

row2.appendChild(sDiv);
row2.appendChild(cDiv);
row2.appendChild(pDiv);

row.appendChild(fDiv);
row.appendChild(lDiv);

form.appendChild(row);
form.appendChild(aDiv);
form.appendChild(row2);
form.appendChild(row3);
form.appendChild(buttonDiv);

container.appendChild(form);
container.appendChild(table);
document.getElementsByTagName("body")[0].appendChild(container);

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
var list8 = [];

var n = 1;
var x = 0;

function AddRow() {
  var AddRown = document.getElementById("show");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("fname").value;
  list2[x] = document.getElementById("lname").value;
  list3[x] = document.getElementById("address").value;
  list4[x] = document.getElementById("state").value;
  list5[x] = document.getElementById("country").value;
  list6[x] = document.getElementById("pincode").value;
  list7[x] = gender();
  list8[x] = fav();

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);
  var cel6 = NewRow.insertCell(5);
  var cel7 = NewRow.insertCell(6);
  var cel8 = NewRow.insertCell(7);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];
  cel6.innerHTML = list6[x];
  cel7.innerHTML = list7[x];
  cel8.innerHTML = list8[x];

  n++;
  x++;
}

function gender() {
  if (document.getElementById("male").checked) {
    return document.getElementById("male").value;
  } else if (document.getElementById("female").checked) {
    return document.getElementById("female").value;
  } else {
    return "Select any one Gender";
  }
}

function fav() {
  var chk = document.getElementsByName("chk");
  var str = [];
  for (let i = 0; i < 5; i++) {
    if (chk[i].checked === true) {
      str.push(chk[i].value);
    }
  }
  if (str.length < 2) {
    alert("Please select min 2 food items");
  } else {
    return str.join(", ");
  }
}
// var table = document.createElement("div");
// table.className = "row";
// table.setAttribute("id", "show");
// table.setAttribute("style", "margin-top:50px");
// var heading1 = document.createElement("div");
// heading1.className = "col";
// heading1.innerText = "First Name";
// table.appendChild(heading1);
// var heading2 = document.createElement("div");
// heading2.className = "col";
// heading2.innerText = "Last Name";
// table.appendChild(heading2);
// var heading3 = document.createElement("div");
// heading3.className = "col";
// heading3.innerText = "Address";
// table.appendChild(heading3);
// var heading4 = document.createElement("div");
// heading4.className = "col";
// heading4.innerText = "State";
// table.appendChild(heading4);
// var heading5 = document.createElement("div");
// heading5.className = "col";
// heading5.innerText = "Country";
// table.appendChild(heading5);
// var heading6 = document.createElement("div");
// heading6.className = "col";
// heading6.innerText = "Pincode";
// table.appendChild(heading6);
// var heading7 = document.createElement("div");
// heading7.className = "col";
// heading7.innerText = "Gender";
// table.appendChild(heading7);
// var heading8 = document.createElement("div");
// heading8.className = "col";
// heading8.innerText = "Fav Food";
// table.appendChild(heading8);
