// ==UserScript==
// @name         Full-window YouTube button
// @namespace    http://github.com/alex-chew/userscripts/
// @version      0.1
// @description  Adds a button to YouTube to redirect to the full-window video
// @author       Alex Chew
// @match        http://www.youtube.com/*
// @match        https://www.youtube.com/*
// @match        http://youtube.com/*
// @match        https://youtube.com/*
// @grant        none
// ==/UserScript==

var re = /youtube.com\/watch\?v=([\w]+)/;
if (re.test(document.URL)) {
	var go = function() {location.href = "/v/" + re.exec(document.URL)[1];};

	var btn = document.createElement("button");
	btn.setAttribute("class", "yt-uix-button yt-uix-button-opacity");
	btn.setAttribute("type", "button");
	btn.textContent = "Full-window";
	btn.onclick = go;

	document.querySelector("[class^='watch-secondary-actions']").appendChild(btn);
}
