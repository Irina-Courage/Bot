// ==UserScript==
// @name         Bot for Yandex_27_04
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==


let keywords = ["гобой", "Саксофон", "как звучит флейта"];
let siteCode = 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai';//code for cyrilic domain site

let yabutton = document.getElementsByClassName('button mini-suggest__button')[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
let yandexInput = document.getElementById("text");
let i = 0;

                                                     // adding symbols with delay
if(yabutton !== undefined){                          //first page only contains the button   on the first Yandex page
	let timerId = setInterval(()=> {
		yandexInput.value += keyword[i];            //fill the search with delay
		i++;
		if(i == keyword.length) {
			clearInterval(timerId);
            yabutton.click();
		}
	}, 400);



}else if(location.hostname == siteCode ) {               // when at the target  go the yandex  or to other internal links within target's domain with delay
	console.log("redirected to the target");
	setTimeout(()=>{
		let index = getRandom(0,links.length);

		if(getRandom(0,101)>=70) {                      //randomly redirected to yandex
			location.href = "https://yandex.ru/";
		}
        if(links[index].href.indexOf(siteCode)!=-1)     //the target site
			links[index].setAttribute("target","_blank").click();
	},getRandom(2000,3500));
}


else{                                                      // Not the fisrst Ya, not the target  -> at the next search results page
	let nextYaPage = true;
	for(let i=0; i<links.length; i++) {
		if(links[i].href.indexOf(siteCode)!=-1) {         // one of the links on the page comtains the target
			let link = links[i];
			nextYaPage = false;
			console.log("Нашел фразу" + link);
			setTimeout(()=>{
                (link.setAttribute("target","_self")).click();},getRandom(1000,4500));      //go th the target with some delay
			break;
		}
	}
	if((document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0]).innerText == "5") {  // result pages limit, goto Ya after 5th
		nextYaPage = false;
		location.href = "https://yandex.ru/";
	}

	if((document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0]).innerText !== "5") {//continue surfing thrue search results with delay
		setTimeout(()=>{
			(document.getElementsByClassName("link link_theme_none link_target_serp pager__item pager__item_kind_next i-bem link_js_inited")[0]).click();}
				   ,getRandom(3000,5000));
	}
}

function getRandom(min,max) {
	return Math.floor(Math.random()*(max-min)+min);
}
