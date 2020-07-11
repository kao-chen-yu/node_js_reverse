let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};


var outputValue = {};
var value = {};
console.log('hello world start to reverse map')

var string = JSON.stringify(inputValue);
var string_array = string.replace(/\"/g, '').replace(/\{/g, '').replace(/\}/g, '').split(':'); 
console.log(string.replace(/\"/g, '').replace(/\{/g, '').replace(/\}/g, ''));

let outputMap = new Map();

outputMap.set(string_array[1],string_array[0])


for(var i = 2 ; i < string_array.length ; i ++){
	let tmp = new Map();
	tmp.set(string_array[i],outputMap);
	
	console.log(' key : ' + string_array[i]);
	console.log(tmp.get(string_array[i]));
	outputMap = tmp ;
}

outputValue = outputMap;