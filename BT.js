function countBs(word, B) {
	var count = 0;
	for (var index = 0; index < word.length; index++)
		if (word.charAt(index) == B) 
			count++;
	return count;
}

console.log(countBs("Be the best you can Be"));
