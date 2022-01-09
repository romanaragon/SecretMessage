let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//log the initital lenght to the console to compare length
//console.log(secretMessage.length);

//removing the last string from the secretMessage array and logging it to the console to verify it works
secretMessage.pop();
//console.log(secretMessage.length);

//adding two strings to the end of the secretMessage array and logging to console to verify it works
secretMessage.push('to', 'Program');
//console.log(secretMessage);

//changing the word easily to the word right but checking the index first
//console.log(secretMessage.indexOf('easily'));
secretMessage[7] = 'right';

//removing the first element of the secretMessage array
secretMessage.shift();

//adding an element to the beginning of the secretMessage array
secretMessage.unshift('Programming');

//removing strings from the secretMessage array and replacing them but checking the indexs of each element first
//console.log(secretMessage.indexOf('get'));
//console.log(secretMessage.indexOf('right'));
//console.log(secretMessage.indexOf('the'));
//console.log(secretMessage.indexOf('first'));
//console.log(secretMessage.indexOf('time,'));
secretMessage.splice(6, 5, 'know,');

//using the .join method to concatenate the elements together with a space in between to reveal the secret message from the original array.
console.log(secretMessage.join(' '));