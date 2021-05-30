var km = prompt ("ciao, quanti km devi fare?");
var age = prompt ("quanti anni hai?");
var prezzo = km * 0.21 ;
var sconto18 = (prezzo * 20) / 100;
var sconto65 = (prezzo * 40) / 100;



if (age < 18) {
    document.getElementById("result").innerHTML = Math.round(prezzo) - Math.round(sconto18) + " euro" ;
} 
  
else if (age > 65) {
    document.getElementById("result").innerHTML += Math.round(prezzo) - Math.round(sconto65) + " euro";
}

else {
    document.getElementById("result").innerHTML +=  Math.round(prezzo) + " euro";
}


 
