// UpperCase
var personName = ("Zia");
console.log("uppercase:", personName.toUpperCase());
// LowerCase
console.log("lowercase:", personName.toLowerCase());
// TitleCase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
