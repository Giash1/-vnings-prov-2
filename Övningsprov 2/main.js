/*capitalize
Skriv en funktion som tar en sträng som input och ger samma sträng tillbaka fast med stor
första bokstav.
Testdata
capitalize("hej på dig") // => "Hej på dig"
capitalize("foo") // => "Foo"
capitalize("12345") // => "12345"*/
function capitalize(str) {
  let output = str[0].toUpperCase()
  for (let i = 1; i < str.length; i++){
      output += str[i]
  }
 return output
}
    

let result= capitalize("foo");
console.log(result);

//isPalindrome
/*Skriv en funktion som avgör om en sträng är ett palindrom eller inte.
Ett palindrom är ett ord eller en mening som är samma sak framlänges som baklänges.
Testdata

Datamängden kan exempelvis se ut såhär.
isPalindrom("anna") // => true
isPalindrome("david") // => false
isPalindrom("naturrutan") // => true
isPalindrome("nationalencyklopedin") // => false
isPalindrome("ni talar bra latin") // => true*/

function isPalindrom(str) {
  let forward = ''
  let backward = ''

  for (let i = str.length - 1; i >= 0; i--) {
      //console.log(str[i]);
      if (str[i] !== " ") {
       backward +=  str[i];
      }
  }
  for (let i = 0; i < str.length; i++){
       //console.log(str[i]);
      if (str[i] !== ' ') {
          forward += str[i]
      }
  }

  if (forward === backward) {
      return true
  } else {
      return false
  }
}

let result1 = isPalindrom("david");
console.log(result1);


/*getOldest
Skapa en funktion getOldest som ger den äldsta personen ur denna datamängd.
Varje person är modellerad som följande.


{
 name: ___,
 age: ___,
 interest: [___,___],
}
Datamängden kan exempelvis se ut såhär.
[
 {name:'Sven', age: 53, interest: ['Stickning']},
 {name:'Greta', age: 62, interest: ['Fallskärmshoppning',
'Kickboxning']},
 {name:'Åsa', age: 32, interest: ['Fotografi','Burksamling']},
]
Testdata
getOldest([
 {name:'Sven', age: 53, interest: ['Stickning']},
 {name:'Greta', age: 62, interest: ['Fallskärmshoppning',
'Kickboxning']},
 {name:'Åsa', age: 32, interest: ['Fotografi','Burksamling']},
])// => {name:'Greta', age: 62, interest: ['Fallskärmshoppning',
'Kickboxning']},*/

function getOldest(arr) {
  let oldest = arr[0]
  for (let user of arr) {
      if (user.age > oldest.age) {
          oldest = user
      }
  }
return oldest
}

let result3= getOldest([
  {name:'Sven', age: 53, interest: ['Stickning']},
  {name:'Greta', age: 62, interest: ['Fallskärmshoppning',
 'Kickboxning']},
  {name:'Åsa', age: 32, interest: ['Fotografi','Burksamling']},
 ]);
 console.log(result3);