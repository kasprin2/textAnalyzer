function wordAnalyzer() {
		//creating an array of all of the words. 
		var wordArray = $('#user-text').val().split(/[ ,!.";:-]+/);
		var checkLastItem = wordArray[wordArray.length-1].length
		if (checkLastItem === 0) {
			wordArray.pop();
		}
		console.log(wordArray);

		//creating a variable of worldArray's length
		var wordCount = wordArray.length;
		
		//creating an array of unique words
		var uniqueWordArray = [];
		for (var i=0; i<wordCount; i++) {

			var isUnique = true;

				for (var j=0; j<uniqueWordArray.length; j++) {
					if (wordArray[i] === uniqueWordArray[j]) {
						isUnique = false
					};
				};

			if (isUnique) {
				uniqueWordArray.push(wordArray[i])
			};
		};

		//creating a variable of uniqueWordArray's length
		var uniqueWordCount = uniqueWordArray.length;
		

		//creating a funtion to compute averageWordLength
		function averageWordLength() {
			var average = 0;
			for (var i=0; i<wordCount; i++) {
				console.log(i, wordArray[i]);
				average += wordArray[i].length;
			};
			return average / wordCount;
		};

		//returning everything in the text

		$('#word-Count').html(wordCount);
		$('#uniqueWord').html(uniqueWordCount);
		$('#averageLength').html(averageWordLength());
};

$(function() {
  //wordAnalyzer();
  $('#analyze').click(function(event) {
		event.preventDefault();
		wordAnalyzer();
		//console.log($('#user-text').val());
	});
});

	

//might consider creating an object with three key value pairs then within funciton only calling on pieces of the object