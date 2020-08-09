var container = document.createElement("div");
container.className = "container";
var greyColorBackground = document.createElement("div");
greyColorBackground.className = "jumbotron bg-dark";
var imageP =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png";
var profilePic = document.createElement("img");
profilePic.className = "rounded mx-auto d-block";
profilePic.src = imageP;
profilePic.setAttribute(
  "style",
  "border-radius: 50px;width: 150px; height:150px;"
);
var profileName = document.createElement("div");
profileName.className = "text-center";
profileName.innerHTML = "BRIAN DUBEY";
profileName.setAttribute(
  "style",
  "background-color: #E0BC4C; color: #000;position:absolute; font-size:2em; font-weight: bold;margin-left:30%;margin-top:-45px"
);
var whiteLine = document.createElement("hr");
whiteLine.setAttribute(
  "style",
  "background-color: #fff;margin-top: 0px; height: 12px; "
);
var address = document.createElement("div");
address.className = "text-center";
address.setAttribute("style", "font-size: 1.1em;margin-top:-30px");
address.innerHTML =
  "N. Damen Avenue, Chicago 99999|999-999-9999|hello@kickresume.com|www.kickresume.com";
var breakLine = document.createElement("hr");
breakLine.setAttribute(
  "style",
  "background-color: #000;margin-top: 0px; height: 1px; "
);
var row = document.createElement("div");
row.className = "row";
var column1 = document.createElement("div");
column1.className = "col border-right";
column1.setAttribute("style", "padding: 30px;border-right: 1px solid black;");
var column2 = document.createElement("div");
column2.className = "col";
column2.setAttribute("style", "padding: 30px");
var profileImg = document.createElement("div");
profileImg.className = "fa fa-user fa-lg";
profileImg.setAttribute(
  "style",
  "border:dotted;border-radius:50%;width:40px;height:40px;color: gold;background: black;padding: 10px;"
);
var profileTitle = document.createElement("h2");
profileTitle.innerHTML = "Profile";
profileTitle.setAttribute(
  "style",
  "margin-left: 45px; margin-top: -33px;font-size:25px"
);
var profileDes = document.createElement("p");
profileDes.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo, obcaecati eos commodi nam placeat laborum modi, ducimus, natus possimus quasi saepe eum voluptatum reiciendis cum? Ducimus pariatur ipsam id?";
profileDes.setAttribute("style", "text-align: justify;font-size: 20px");
var skillsImg = document.createElement("div");
skillsImg.className = "fa fa-flask fa-lg";
skillsImg.setAttribute(
  "style",
  "border:dotted;border-radius:50%;width:40px;height:40px;color: gold;background: black;padding: 9px;"
);
var skillsTitle = document.createElement("h2");
skillsTitle.innerHTML = "Skills";
skillsTitle.setAttribute(
  "style",
  "margin-left: 45px; margin-top: -33px;font-size:25px"
);
//Technical Skills
var skillsType = document.createElement("h3");
skillsType.innerHTML = "Technical Skills";
skillsType.setAttribute("style", "margin-left:180px;font-size:18px");
var javascript = document.createElement("div");
javascript.innerHTML = "Javascript:";
javascript.setAttribute("style", "font-size:20px");
var jsinput = document.createElement("input");
jsinput.setAttribute("type", "range");
jsinput.setAttribute("min", "1");
jsinput.setAttribute("max", "100");
jsinput.setAttribute("value", "70");
jsinput.className = "slider";
javascript.appendChild(jsinput);
var html = document.createElement("div");
html.innerHTML = "HTML   :";
html.setAttribute("style", "font-size:20px");
var htmlinput = document.createElement("input");
htmlinput.setAttribute("type", "range");
htmlinput.setAttribute("min", "1");
htmlinput.setAttribute("max", "100");
htmlinput.setAttribute("value", "90");
htmlinput.className = "slider";
html.appendChild(htmlinput);
var css = document.createElement("div");
css.innerHTML = "CSS      :";
css.setAttribute("style", "font-size:20px");
var cssinput = document.createElement("input");
cssinput.setAttribute("type", "range");
cssinput.setAttribute("min", "1");
cssinput.setAttribute("max", "100");
cssinput.setAttribute("value", "60");
cssinput.className = "slider";
css.appendChild(cssinput);
//Additional skills
var skillsType1 = document.createElement("h3");
skillsType1.innerHTML = "Additional Skills";
skillsType1.setAttribute("style", "margin-left:180px;font-size:18px");
var pm = document.createElement("div");
pm.innerHTML = "Project Managment:";
pm.setAttribute("style", "font-size:20px");
var pminput = document.createElement("input");
pminput.setAttribute("type", "range");
pminput.setAttribute("min", "1");
pminput.setAttribute("max", "100");
pminput.setAttribute("value", "70");
pminput.className = "slider";
pm.appendChild(pminput);
var recruitment = document.createElement("div");
recruitment.innerHTML = "Recruitment   :";
recruitment.setAttribute("style", "font-size:20px");
var recinput = document.createElement("input");
recinput.setAttribute("type", "range");
recinput.setAttribute("min", "1");
recinput.setAttribute("max", "100");
recinput.setAttribute("value", "90");
recinput.className = "slider";
recruitment.appendChild(recinput);
var editing = document.createElement("div");
editing.innerHTML = "Editing      :";
editing.setAttribute("style", "font-size:20px");
var editinput = document.createElement("input");
editinput.setAttribute("type", "range");
editinput.setAttribute("min", "1");
editinput.setAttribute("max", "100");
editinput.setAttribute("value", "60");
editinput.className = "slider";
editing.appendChild(editinput);

//Work
var workImg = document.createElement("div");
workImg.className = "fa fa-briefcase fa-2x";
workImg.setAttribute(
  "style",
  "border:dotted;border-radius:50%;width:40px;height:40px;color: gold;background: black;padding: 10px;"
);
workImg.setAttribute("style", "margin-top: 20px");
var workTitle = document.createElement("h2");
workTitle.innerHTML = "Work Experience";
workTitle.setAttribute(
  "style",
  "margin-left: 38px; margin-top: -31px;font-size:25px"
);
var company1 = document.createElement("div");
var company1Name = document.createElement("h2");
company1Name.innerText = "Event Manager";
company1Name.setAttribute("style", "font-size: 25px; font-weight:bold");
var company1Add = document.createElement("p");
company1Add.innerHTML = "C3 Presents, Washington DC";
company1Add.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-10px"
);
var company1date = document.createElement("p");
company1date.innerText = "03/2014-07/2017";
company1date.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-60px;margin-left: 400px"
);
var company1des = document.createElement("ul");
var l1 = document.createElement("li");
l1.setAttribute("style", "text-align: justify;");
var l2 = document.createElement("li");
l2.setAttribute("style", "text-align: justify;");
l1.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";
l2.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";

//coloumn2
var workImg2 = document.createElement("div");
workImg2.className = "fa fa-briefcase fa-2x";
workImg2.setAttribute(
  "style",
  "border:dotted;border-radius:50%;width:40px;height:40px;color: gold;background: black;padding: 10px;"
);
workImg2.setAttribute("style", "margin-top: 20px");
var workTitle2 = document.createElement("h2");
workTitle2.innerHTML = "Work Experience";
workTitle2.setAttribute(
  "style",
  "margin-left: 38px; margin-top: -31px;font-size:25px"
);
var company2 = document.createElement("div");
var company2Name = document.createElement("h2");
company2Name.innerText = "Community & Relations Manager";
company2Name.setAttribute(
  "style",
  "font-size: 25px; font-weight:bold;margin-right:200px"
);
var company2Add = document.createElement("p");
company2Add.innerHTML = "Gay and lesbian, Elder housing, Los Angeles";
company2Add.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-10px"
);
var company2date = document.createElement("p");
company2date.innerText = "06/2011-01/2014";
company2date.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-80px;margin-left: 400px"
);
var company2des = document.createElement("ul");
company2des.setAttribute("style", "margin-top:40px");
var l3 = document.createElement("li");
l3.setAttribute("style", "text-align: justify;");
var l4 = document.createElement("li");
l4.setAttribute("style", "text-align: justify;");
l3.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";
l4.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";

var education = document.createElement("div");
var educationImg = document.createElement("div");
educationImg.setAttribute(
  "style",
  "border:dotted;border-radius:50%;width:40px;height:40px;color: gold;background: black;padding: 10px;"
);
educationImg.className = "fa fa-graduation-cap fa-2x";
educationImg.setAttribute("style", "margin-top: 20px");
var educationTitle = document.createElement("h2");
educationTitle.innerHTML = "Education";
educationTitle.setAttribute(
  "style",
  "margin-left: 41px; margin-top: -31px;font-size:25px"
);

var educationName = document.createElement("h2");
educationName.innerText = "Engineering Immersion Program";
educationName.setAttribute(
  "style",
  "font-size: 25px; font-weight:bold;margin-right:200px"
);
var educationAdd = document.createElement("p");
educationAdd.innerHTML = "Thinkful, Chicago, IL";
educationAdd.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-10px"
);
var educationdate = document.createElement("p");
educationdate.innerText = "11/2018-06/2018";
educationdate.setAttribute(
  "style",
  "font-size:15px; font-weight:lighter;margin-top:-80px;margin-left: 400px"
);
var educationdes = document.createElement("ul");
educationdes.setAttribute("style", "margin-top:40px");
var l5 = document.createElement("li");
l5.setAttribute("style", "text-align: justify;");
var l6 = document.createElement("li");
l6.setAttribute("style", "text-align: justify;");
l5.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";
l6.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur pariatur ab quia aliquid perspiciatis blanditiis reiciendis corporis dolores molestias doloribus hic possimus mollitia aperiam expedita quaerat, voluptatum maiores ipsum quos!";
educationdes.appendChild(l5);
educationdes.appendChild(l6);

education.appendChild(educationImg);
education.appendChild(educationTitle);
education.appendChild(educationName);
education.appendChild(educationAdd);
education.appendChild(educationdate);
education.appendChild(educationdes);

company2des.appendChild(l3);
company2des.appendChild(l4);

company2.appendChild(company2Name);
company2.appendChild(company2Add);
company2.appendChild(company2date);
company2.appendChild(company2des);

column2.appendChild(workImg2);
column2.appendChild(workTitle2);
column2.appendChild(company2);
column2.appendChild(education);

company1des.appendChild(l1);
company1des.appendChild(l2);

company1.appendChild(company1Name);
company1.appendChild(company1Add);
company1.appendChild(company1date);
company1.appendChild(company1des);

//Order coloum1
column1.appendChild(profileImg);
column1.appendChild(profileTitle);
column1.appendChild(profileDes);
column1.appendChild(skillsImg);
column1.appendChild(skillsTitle);
column1.appendChild(skillsType);
column1.appendChild(javascript);
column1.appendChild(html);
column1.appendChild(css);
column1.appendChild(skillsType1);
column1.appendChild(pm);
column1.appendChild(recruitment);
column1.appendChild(editing);
column1.appendChild(workImg);
column1.appendChild(workTitle);
column1.appendChild(company1);

row.appendChild(column1);
row.appendChild(column2);

greyColorBackground.appendChild(profilePic);
greyColorBackground.appendChild(whiteLine);
greyColorBackground.appendChild(profileName);

container.appendChild(greyColorBackground);
container.appendChild(address);
container.appendChild(breakLine);
container.appendChild(row);

document.getElementsByTagName("body")[0].appendChild(container);
