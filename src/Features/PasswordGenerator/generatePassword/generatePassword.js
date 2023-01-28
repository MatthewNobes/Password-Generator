export const generatePassword = (length) => {
	const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", '"', "<", ",", ">", ".", "?", "/"];

	const combinedArray = lowercase.concat(uppercase, numbers, symbols);

	let result = "";

	if (typeof length !== "boolean") {
		for ( let i = 0; i < length; i++ ) {
			result += combinedArray[Math.floor(Math.random() * combinedArray.length)];
		}
	} 
    
	return result;
};