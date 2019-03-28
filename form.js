
if (!localStorage.users) {
  localStorage.setItem("users", "[]");
  var array_users = JSON.parse(localStorage.getItem("users"));
} else {
  var array_users = JSON.parse(localStorage.getItem("users"));
  console.log("users set");
}
var body = document.body;
tbl = document.createElement("table");
tbl.style.width = "100px";
tbl.style.border = "1px solid black";
var header = tbl.createTHead();
var row = header.insertRow(0);
var head = ["Name", "Password", "email", "Phone", "Gender", "Address"];
for (var i = 0; i < head.length; i++) {
  var cell = row.insertCell(i);
  cell.innerHTML = "<b>" + head[i] + "</b>";
}
for (var p = 0; p < array_users.length; p++) {
  var tr = tbl.insertRow();

  // for (var j = 0; j < 6; j++) {
  var nm = tr.insertCell();
  nm.appendChild(document.createTextNode(array_users[p].name));
  var pw = tr.insertCell();
  pw.appendChild(document.createTextNode(array_users[p].password));
  var em = tr.insertCell();
  em.appendChild(document.createTextNode(array_users[p].email));
  var ph = tr.insertCell();
  ph.appendChild(document.createTextNode(array_users[p].phone));
  var gr = tr.insertCell();
  gr.appendChild(document.createTextNode(array_users[p].gender));
  var ad = tr.insertCell();
  ad.appendChild(document.createTextNode(array_users[p].address));
  //td.style.border = "1px solid black";
  // }
}
body.appendChild(tbl);
//window.localStorage.setItem("counter", "0");
var n_err = document.createElement("p");
n_err.style.visibility = "hidden";
var n_display = document.createTextNode("Please enter the name");
n_err.appendChild(n_display);
form.insertBefore(n_err, password);

var p_display = document.createTextNode("Please enter the password");
var p_err = document.createElement("p");
p_err.style.visibility = "hidden";
p_err.appendChild(p_display);
form.insertBefore(p_err, email);

var e_err = document.createElement("p");
var e_display = document.createTextNode("Please enter the email");
e_err.style.visibility = "hidden";
e_err.appendChild(e_display);
form.insertBefore(e_err, phone);

var ph_err = document.createElement("p");
var ph_display = document.createTextNode("Please enter the phone number");
ph_err.style.visibility = "hidden";
ph_err.appendChild(ph_display);
form.insertBefore(ph_err, address);

var a_err = document.createElement("p");
var a_display = document.createTextNode("Please enter the address");
a_err.style.visibility = "hidden";
a_err.appendChild(a_display);
form.insertBefore(a_err, gender_list);

var g_err = document.createElement("p");
var errornode = document.createTextNode("Please select the gender");
g_err.style.visibility = "hidden";
g_err.appendChild(errornode);
form.insertBefore(g_err, save);

var all_err = document.createElement("p");
var all_error = document.createTextNode("Please select all the details");
all_err.style.visibility = "hidden";
all_err.appendChild(all_error);
form.insertBefore(all_err, save);

var save = document.getElementById("save");

save.addEventListener("click", function() {
  checkSaveDisplay();
});
function checkSaveDisplay() {
  var name = document.getElementById("username");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var gender = document.getElementsByName("gender");
  var gender_list = document.getElementById("gender_list");
  var password = document.getElementById("password");
  var address = document.getElementById("address");
  var form = document.getElementById("form");
  var data = [];
  function validateName() {
    if (name.value == "") {
      n_err.style.visibility = "visible";
    } else {
      data.push(name.value);
      n_err.style.visibility = "hidden";
    }
  }
  function validatePwd() {
    if (password.value == "") {
      p_err.style.visibility = "visible";
    } else {
      data.push(password.value);
      p_err.style.visibility = "hidden";
    }
  }
  function validateEmail() {
    if (email.value == "") {
      e_err.style.visibility = "visible";
    } else {
      data.push(email.value);
      e_err.style.visibility = "hidden";
    }
  }
  function validatePhone() {
    if (phone.value == "") {
      ph_err.style.visibility = "visible";
    } else {
      data.push(phone.value);
      ph_err.style.visibility = "hidden";
    }
  }
  function validateAddress() {
    if (address.value == "") {
      a_err.style.visibility = "visible";
    } else {
      data.push(address.value);
      a_err.style.visibility = "hidden";
    }
  }
  function validateGender() {
    var any_checked = false;
    for (var i = 0, length = gender.length; i < length; i++) {
      if (gender[i].checked) {
        data.push(gender[i].value);
        g_err.style.visibility = "hidden";
        any_checked = true;
        break;
      }
    }
    if (!any_checked) {
      g_err.style.visibility = "visible";
    }
  }
  console.log(data);
  validateName();
  validatePwd();
  validateEmail();
  validatePhone();
  validateAddress();
  validateGender();
  if (data.length < 6) {
    all_err.style.visibility = "visible";
  } else {
    function user(name, password, email, phone, address, gender) {
      this.name = name;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.address = address;
      this.gender = gender;
    }
    all_err.style.visibility = "hidden";
    var usr = new user(data[0], data[1], data[2], data[3], data[4], data[5]);
    var array_users = JSON.parse(window.localStorage.getItem("users"));
    array_users.push(usr);
    console.log(array_users);
    window.localStorage.setItem("users", JSON.stringify(array_users));

    // if (
    //   !document.body.contains(document.querySelector("table")) &
    //   (array_users.length == 1)
    // ) {
    //   console.log(p);
    //   tbl = document.createElement("table");
    //   tbl.style.width = "100px";
    //   tbl.style.border = "1px solid black";
    //   var header = tbl.createTHead();
    //   var row = header.insertRow(0);
    //   var head = ["Name", "Password", "email", "Phone", "Gender", "Address"];
    //   for (var i = 0; i < head.length; i++) {
    //     var cell = row.insertCell(i);
    //     cell.innerHTML = "<b>" + head[i] + "</b>";
    //   }
    //   for (var p = 0; p < array_users.length; p++) {
    //     var tr = tbl.insertRow();
    //     //for (var j = 0; j < 6; j++) {
    //     var nm = tr.insertCell();
    //     nm.appendChild(document.createTextNode(array_users[p].name));
    //     var pw = tr.insertCell();
    //     pw.appendChild(document.createTextNode(array_users[p].password));
    //     var em = tr.insertCell();
    //     em.appendChild(document.createTextNode(array_users[p].email));
    //     var ph = tr.insertCell();
    //     ph.appendChild(document.createTextNode(array_users[p].phone));
    //     var gr = tr.insertCell();
    //     gr.appendChild(document.createTextNode(array_users[p].gender));
    //     var ad = tr.insertCell();
    //     ad.appendChild(document.createTextNode(array_users[p].address));
    //     //td.style.border = "1px solid black";
    //     //}
    //   }
    //   body.appendChild(tbl);
    // } else {
    tr = tbl.insertRow();
    //for (var j = 0; j < 6; j++) {
    //var count = JSON.parse(window.localStorage.getItem("counter"));
    var temp = array_users.length - 1;
    //var temp = 0;
    console.log(temp);
    // window.localStorage.setItem("counter", temp);
    // var p = 0;
    var nm = tr.insertCell();
    nm.appendChild(document.createTextNode(array_users[temp].name));
    var pw = tr.insertCell();
    pw.appendChild(document.createTextNode(array_users[temp].password));
    var em = tr.insertCell();
    em.appendChild(document.createTextNode(array_users[temp].email));
    var ph = tr.insertCell();
    ph.appendChild(document.createTextNode(array_users[temp].phone));
    var gr = tr.insertCell();
    gr.appendChild(document.createTextNode(array_users[temp].gender));
    var ad = tr.insertCell();
    ad.appendChild(document.createTextNode(array_users[temp].address));
    //}
    //}
  }
}
// if(document.body.contains(document.querySelector("#name_err"))){
//   name.addEventListener("change", function(){
//       name.innerHTML=" ";
//   });
// }
