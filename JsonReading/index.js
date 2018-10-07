var fs = require("fs");

// read
var content = fs.readFileSync("data.json", "utf-8");
console.log(content);
var object = JSON.parse(content);

// change
object.CompanyName = "Wipro.LTD";
object.EmployeeName = "Prasad Sangpal";

// write
var newContent = JSON.stringify(object, null, 1);
fs.writeFileSync("editedData.json", newContent, "utf-8");

console.log(newContent);
