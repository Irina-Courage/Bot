// ==UserScript==
// @name         Bot for Yandex_28_04
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @icon         
// @grant        none
// ==/UserScript==


let sites = {
	"napli.ru":['10 самых популярных шрифтов от Google',
				'Отключение редакций и ревизий в WordPress',
				'Вывод произвольных типов записей и полей в WordPress'],
	"xn----7sbab5aqcbiddtdj1e1g.xn--p1ai":['Гобой','Как звучит флейта', 'Кларнет','Саксофон','Тромбон','Валторна'],
};



let siteCode = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let yandexInput = document.getElementById("text");
let keywords = sites[siteCode];
let keyword = keywords[getRandom(0,keywords.length)];
let yabutton = document.getElementsByClassName('button mini-suggest__button')[0];
let i = 0;
let links = document.links;

if(yabutton !== undefined) {                              // new record for new search - only the first google page
	document.cookie = "site="+siteCode;
}else if (location.hostname == "www.google.com") {    //after second page is opened target site is in the cookie
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
		let index = getRandom(0,links.length);            //chhose whatever link among links on the page

		if(getRandom(0,101)>=70) {                      //randomly redirected to yandex
			location.href = "https://yandex.ru/";
		}
        if(links[index].href.indexOf(siteCode)!=-1)     //the target site  is on the page name
			links[index].click();
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
                link.removeAttribute("target");  // set _self did not work...
                link.click();
            },getRandom(1000,4500));
//                (link.setAttribute("target","_self")).click();},getRandom(1000,4500));      //go th the target with some delay
			break;
		}
	}
if(document.querySelector('.pager__item_current_yes').textContent == "5") {
		nextYaPage = false;
		location.href = "https://yandex.ru/";
	}

	if(document.querySelector('.pager__item_current_yes').textContent !== "5") {
		setTimeout(()=>{
			document.querySelector('.pager__item_kind_next').click();}
				   ,getRandom(3000,5000));
	}
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
