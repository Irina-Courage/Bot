// ==UserScript==
// @name         Bot for Yandex 29.04 Superbot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @match		 https://napli.ru/*
// @match 	 	 https://psyholog.me/
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @icon         
// @grant        none
// ==/UserScript==


       let sites = {
	"napli.ru":['10 самых популярных шрифтов от Google',
				'Отключение редакций и ревизий в WordPress',
				'Вывод произвольных типов записей и полей в WordPress'],
	"xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
};
let choices = ["https://yandex.ru/","https://www.google.com/"];
let choice = choices[getRandom(0,2)];

let siteCode = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];  // randomly choose a link on the current page
let keywords = sites[siteCode];
let keyword = keywords[getRandom(0,keywords.length)];

let yandexInput = document.getElementById("text");
let yabutton = document.getElementsByClassName('button mini-suggest__button button_theme_search button_size_search i-bem button_js_inited')[0];

let i = 0;
let links = document.links;

if(yabutton !== undefined) {                              // new record for new search - only the first google page
	document.cookie = "site="+siteCode;
}else if (location.hostname == "yandex.ru") {    //after second page is opened target site is in the cookie
	siteCode = getCookie("site");
}else{
    siteCode = location.hostname;                    //already at the destination and the site name is in the document obj
}

if(yabutton !== undefined){                          //first page only contains the button   on the first Yandex page
	let timerId = setInterval(()=> {                 // adding symbols with delay
		yandexInput.value += keyword[i];
		i++;
		if(i == keyword.length) {
			clearInterval(timerId);
            yabutton.click();                        //go for search
		}
	}, 300);


//already at target site

}else if(location.hostname == siteCode ) {               // when at the target  go the yandex  or to other internal links within target's domain with delay
	console.log("redirected to the target" + siteCode );
	setTimeout(()=>{
		let index = getRandom(0,links.length);            //choose whatever link among links on the page

		if(getRandom(0,101)>=70) {                      //randomly redirected to random search site
			location.href = choices[getRandom(0,2)];
		}
        if(links[index].href.indexOf(siteCode)!=-1)     //the target site  is on the page name
			alert("within");
            links[index].click();
	},getRandom(1000,2500));
}
else{                                                      // Not the fisrst Ya, not the target  -> at the next search results page
	let nextYaPage = true;
	for(let i=0; i<links.length; i++) {
		if(links[i].href.indexOf(siteCode)!=-1) {         // one of the links on the page comtains the target
			let link = links[i];
			nextYaPage = false;
			//console.log("Нашел фразу" + link);
			setTimeout(()=>{
                link.removeAttribute("target");  // set _self did not work...
                link.click();
            },getRandom(1000,2500));
//                (link.setAttribute("target","_self")).click();},getRandom(1000,4500));      //go th the target with some delay
			break;
		}
	}
//if(document.querySelector('.pager__item_current_yes').textContent == "5") {
if((document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0]).innerText == "5") {
		nextYaPage = false;
		location.href = "https://yandex.ru/";
	}
	if(nextYaPage) {
		setTimeout(()=>{
			pnnext.click();}
				   ,getRandom(3000,5000));
	}

// if((document.getElementsByClassName('pager__item pager__item_current_yes pager__item_kind_page')[0]).innerText !== "5"){
// 	//if(document.querySelector('.pager__item_current_yes').textContent !== "5") {
// 		setTimeout(()=>{
// 			document.querySelector('.pager__item_kind_next').click();}
// 				   ,getRandom(2000,3000));
// 	}
}

function getRandom(min,max) {
	return Math.floor(Math.random()*(max-min)+min);
}
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
