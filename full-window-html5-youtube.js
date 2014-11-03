// ==UserScript==
// @name         Full-window HTML5 videos on YouTube
// @namespace    https://github.com/alex-chew/userscripts
// @version      0.2.2
// @description  Toggles full-window YouTube HTML5 player
// @author       Alex Chew
// @match        https://www.youtube.com/watch*
// @grant        GM_addStyle
// ==/UserScript==

// Hide scrollbars
var style_hidescroll = 'body.yt-fullwindow {overflow-x: hidden; overflow-y: hidden;}';

// Hide sticky header
var style_hideheader = '.yt-fullwindow #masthead-positioner { display: none;}';

// Make movie player full-window
var style_fullplayer =
	'.yt-fullwindow #movie_player {' +
		'position: fixed;' +
		'top: 0;' +
		'left: 0;' +
		'z-index: 999;' +
		'width: 100vw;' +
		'height: 100vh;' +
	'}';

// Center video
var style_centervideo =
	'.yt-fullwindow .video-stream {' +
		'width: 100% !important;' +
		'height: 100% !important' +
	'}';

// Center progressbar (TODO scale progressbar to full width)
var style_centerprobar =
	'.yt-fullwindow .html5-progress-bar {' +
		'position: relative;' +
		'margin: 0 auto;' +
	'}';

// Add styles to page
GM_addStyle(style_hidescroll);
GM_addStyle(style_hideheader);
GM_addStyle(style_fullplayer);
GM_addStyle(style_centervideo);
//GM_addStyle(style_centerprobar); // Dragging the time cursor doesn't work

// Keyboard shortcut for toggling full-window styles
function doc_keyUp(e) {
	if (e.keyCode == 87) { // w (for window)
		document.getElementsByTagName('body')[0].classList.toggle('yt-fullwindow');
		window.scrollTo(0, 0); // Can scroll while fullwindow; reset scroll on toggle
	}
}
document.addEventListener('keyup', doc_keyUp, false);

