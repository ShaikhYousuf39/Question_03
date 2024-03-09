// UpperCase

let personName:string = ("Zia")
console.log("uppercase:", personName.toUpperCase())

// LowerCase
console.log("lowercase:", personName.toLowerCase())

// TitleCase
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
