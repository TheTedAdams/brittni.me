(function() {
	var samples = document.querySelectorAll('.sample');
	for (var i = 0; i < samples.length; i++) {
		samples[i].addEventListener('click', expandSample, false);
	}
	
	function expandSample() {
		console.dir(this);
	}
	
})(document);
