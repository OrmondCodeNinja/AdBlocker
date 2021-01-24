chrome.webRequest.onBeforeRequest.addListener(
	function(details){return { cancel: true }},
	{ urls: ["*://www.twitch.tv/*","*://*.twitch.tv/*"]},
	["blocking"]
)
//append the list in line 3 to block more sites
//eg:-
// "*://*.xyz.com/*"
