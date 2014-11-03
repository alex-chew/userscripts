// ==UserScript==
// @name         Facebook Poke-All Button
// @namespace    http://github.com/alex-chew/userscripts/
// @version      0.1
// @description  Add a button to the Facebook bluebar to respond to all pokes
// @author       Alex Chew
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

function pokeAll() {
	var ps = document.querySelectorAll('[id*="poke_live_item_"] a[class~="selected"]');
	for (var i = 0; i < ps.length; i++) {ps[i].click();}
}

var apDiv = document.createElement('div');
apDiv.setAttribute('id', 'autopoke-div');
apDiv.setAttribute('style', 'float: left; width: 31px; height: 31px;');
apDiv.innerHTML = '<a id="autopoke-button" style="display: block; height: 100%;"></a>';
apDiv.addEventListener('click', pokeAll, false);

document.getElementsByClassName('notifCentered')[0].appendChild(apDiv);

