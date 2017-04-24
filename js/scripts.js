var gallon = parseFloat(prompt("Enter an amount in gallons:"));

var litre = function(gallon){
  alert((gallon * 3.78541).toFixed(1));
};


litre(gallon);
