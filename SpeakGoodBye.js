(function(window)
{
var speakWord = "Good Bye";
var byeSpeaker=function(name)
{
	console.log(speakWord+" "+name);
}
window.bySpeaker=bySpeaker;
})(window);
