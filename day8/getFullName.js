/** Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
  let outArr = [];
  outArr.push(firstName);
  outArr.push(lastName);
  console.log(`"${outArr.join(" ")}"`);
}

getFullName("GUVI", "GEEK");
