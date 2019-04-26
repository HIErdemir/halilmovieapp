// RegEx object: Voor regex die nooit veranderen
let regex_a = /^([0-9]{4})([ ]{1,2})(?!SD|SA|SS)([A-Z]{2})$/;

// regEx object: Voor regex die in toekomst veranderen, bijv. bij meegeven aan functie
let regex_b = new RegExp("^([0-9]{4})([ ]{1,2})(?!SD|SA|SS)([A-Z]{2})$");

// Onze tekst om te testen
let postcode = "1234 CT";

// Voor RegExp objecten: return group
let result = regex_a.exec(postcode);
//console.log(result)

// Voor RegExp objecten: return group
result = regex_a.test(postcode);
//console.log(result)

//---------------------------------------------------------------

// Voor String objecten:
result = postcode.match(regex_b);
//console.log(result)

// Zoek en vervang
let regex_d = new RegExp("([0-9]{4})([ ]{1,2})(?!SD|SA|SS)([A-Z]{2})");
result = "Mijn postcode is 4813 CT in Breda".search(regex_d);
//console.log(result)
result = "Mijn postcode is 4813 CT in Breda".replace(regex_d, "[GEHEIM]");
//console.log(result)
result = "Mijn postcode is 4813 CT in Breda".replace(regex_d, "[$3 $1]");
console.log(result);
