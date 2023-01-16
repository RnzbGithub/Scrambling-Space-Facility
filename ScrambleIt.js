//array is words and theres a mouth of words
const words = ["hippopotamus",
"butterflies",
"puppies",
"orangutan",
"buffalo",
"penguin",
"imposter",
"astronaut",
"crewmate",
"guardian",
"angel",
"engineer",
"scientist",
"shapeshifter",
"axolotl",
"nebula",
"galactic",
"extraordinary",
"rainbow",
"evaporation",
"condensation",
"glacier",
"solar",
"system",
"mercury",
"venus",
"earth",
"mars",
"jupiter",
"saturn",
"uranus",
"neptune",
"sun",
"pluto"];
//gets a random number and divides by 35 then adds 1 and removes the decimal to find word
function randomWord(array) {
    var num = Math.floor((Math.random() * array.length) + 1);
    return num in array ? array[num] :  array[0];
 }
 //finds what the current text is and replaces it
 function addText(text){
    var existingText = document.getElementById('text1').innerHTML = text;
    return existingText;
 }
 
 //scrambles the word by changing the string by replacing substrings with eachother
 function scramble(word) {
   const scrambledArray = [];
   console.log(word);
   word = word.split('');
   while(word.length > 0) {
     var maxIndex = word.length;
     var randomIndex = Math.floor(Math.random()*maxIndex);
     scrambledArray.push(word[randomIndex])
     word.splice(randomIndex, 1)
   }
   return scrambledArray.join('');
 }
 //makes alerts that tell you if its right or wrong
 function check() {
   var answer = document.getElementById('input0').value;
   if(answer == word) {
     alert("Correct answer.");
     newWord();
   } else {
     alert("Incorrect answer. Try again!");
   }
   console.log("checking");
 }
 
 //uses randomWord (number choosing) and scramble(word) (substring replacing) to make the scrambled word
 function newWord() {
   word = randomWord(words);
   var scrambled = scramble(word);
   addText(scrambled); 
   document.getElementById('input0').value = '';
 }
 
 
 
//making sure everything works
 let word = randomWord(words);
 const mixed = scramble(word);
 const jumbled = addText(mixed);
 
 const button  = document.getElementById("button0");
 button.addEventListener("click", check);