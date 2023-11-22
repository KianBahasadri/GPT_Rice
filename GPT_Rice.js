// ==UserScript==
// @name         GPT_Rice
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @match        https://chat.openai.com/
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==


const audio = new Audio("https://www.myinstants.com/media/sounds/the-weeknd-rizzz.mp3");

document.addEventListener("DOMContentLoaded", function() {
  console.log("starting script");
  let icons = document.querySelectorAll(".gizmo-shadow-stroke");

  console.log("THIS SHOULD SAY 3 -> ", icons.length); // idk why but code breaks if i dont put this here
  let smallIcon = icons[1];
  let bigIcon = icons[2];
  bigIcon.style.cursor = "pointer";
  bigIcon.addEventListener("click", changeStyle);

  function changeStyle() {
    let title = document.querySelector(".mb-5.text-2xl.font-medium");
    title.textContent = "How may I serve you today master?";
    bigIcon.outerHTML = "<img src='https://i.pinimg.com/736x/41/a9/b7/41a9b7c2269e0ecd07e6560ec519b91a.jpg' class=circular-image>";
    smallIcon.outerHTML = "<img src='https://i.pinimg.com/736x/41/a9/b7/41a9b7c2269e0ecd07e6560ec519b91a.jpg' class=circular-image>";
	let header = document.querySelector(".group.flex.cursor-pointer.items-center.gap-1.rounded-xl.py-2.px-3.text-lg.font-medium.hover\\:bg-gray-50.radix-state-open\\:bg-gray-50.dark\\:hover\\:bg-black\\/10.dark\\:radix-state-open\\:bg-black\\/20");
    header.outerHTML = '<div class="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20" type="button" id="radix-:r1r:" aria-haspopup="menu" aria-expanded="false" data-state="closed"><div>AstolfoGPT <span class="text-token-text-secondary">6.9</span></div><svg width="16" height="17" viewBox="0 0 16 17" fill="none" class="text-token-text-tertiary"><path d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>'
    GM_addStyle (`
:root {
	--text-primary: burlywood;
} /* set primary text colour */

.flex.h-full.flex-col {
	background-image: url("https://wallpapercave.com/download/astolfo-wallpapers-wp5172434");
	background-size: cover;
} /* bkgrnd img */

.flex.h-full.w-full.flex-col.p-2 {
	background: rgba(0, 0, 0, 0.5);
} /* sidebar opacity */

.absolute.bottom-0.right-0.top-0.w-8.bg-gradient-to-l.to-transparent.from-token-surface-primary {
	display: none;
} /* sidebar gradient */

.flex.flex-col.gap-2.pb-2.text-gray-800.text-sm {
	font-family: Roboto;
	color: goldenrod;
} /* sidebar font */

.grid {
	display: none;
} /* prompt suggestions */

.h-9 {
	display: none !important;
} /* days since chat */

.gizmo\\\:mt-5 {
	margin-top: 0 !important;
} /* sidebar spacing */

.font-semibold {
	background: rgba(0,0,0,0);
	color: white;
} /* top of the screen bar */

.circular-image {
	border-radius: 50%;
	overflow: hidden;
} /* astolfo image */

.mb-5 {
	margin-bottom: 1.25rem;
	color: burlywood;
} /* main title colour */

input::placeholder, textarea::placeholder {
	background: #f2efc0A0;
} /* text input area */
	`);
    setTimeout(function(){audio.play()}, 500);
  }
});
